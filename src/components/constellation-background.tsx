"use client"

import { useEffect, useRef } from "react"

// Fixed number of stars regardless of screen size
const STAR_COUNT = 50

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinkleDirection: number
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize stars with relative positions (0-1 range)
  const initializeStars = () => {
    const stars: Star[] = []

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        // Use relative coordinates (0-1) instead of absolute pixels
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    return stars
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize stars if not already done
    if (starsRef.current.length === 0) {
      starsRef.current = initializeStars()
    }

    // Set canvas dimensions and handle resize
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const displayWidth = window.innerWidth
      const displayHeight = window.innerHeight

      // Set display size (css pixels)
      canvas.style.width = `${displayWidth}px`
      canvas.style.height = `${displayHeight}px`

      // Set actual size in memory (scaled for retina)
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr

      // Scale all drawing operations by the dpr
      ctx.scale(dpr, dpr)
    }

    // Handle window resize with debounce
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setCanvasDimensions()
      }, 200)
    }

    // Set initial dimensions
    setCanvasDimensions()

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Animation function
    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      // Clear canvas
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)

      // Draw stars and connections
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i]

        // Convert relative coordinates to actual pixels
        const x = star.x * width
        const y = star.y * height

        // Twinkle effect (change opacity)
        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity > 0.9 || star.opacity < 0.4) {
          star.twinkleDirection *= -1
        }

        // Draw star glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 2)
        gradient.addColorStop(0, `rgba(180, 180, 255, ${star.opacity})`)
        gradient.addColorStop(1, "rgba(180, 180, 255, 0)")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(x, y, star.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw star center
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.arc(x, y, star.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections - only connect to closest 2 stars to reduce vertices
        const connections: { distance: number; index: number }[] = []

        for (let j = 0; j < starsRef.current.length; j++) {
          if (i === j) continue

          const otherStar = starsRef.current[j]
          const otherX = otherStar.x * width
          const otherY = otherStar.y * height

          const dx = x - otherX
          const dy = y - otherY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < width * 0.2) {
            // Only consider stars within 20% of screen width
            connections.push({ distance, index: j })
          }
        }

        // Sort by distance and only draw the closest 2 connections
        connections.sort((a, b) => a.distance - b.distance)
        const maxConnections = Math.min(2, connections.length)

        for (let c = 0; c < maxConnections; c++) {
          const { index, distance } = connections[c]
          const otherStar = starsRef.current[index]
          const otherX = otherStar.x * width
          const otherY = otherStar.y * height

          // Draw connection
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(otherX, otherY)

          // Fade the line based on distance
          const maxDistance = width * 0.2
          const opacity = (1 - distance / maxDistance) * 0.4
          ctx.strokeStyle = `rgba(180, 180, 255, ${opacity})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
}
