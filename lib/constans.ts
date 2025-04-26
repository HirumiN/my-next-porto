// Portfolio data constants

// Profile information
export const PROFILE = {
  name: "Hilmi Nurullah",
  title: "Full-stack Developer",
  bio: "Full-stack developer with a passion for creating clean, efficient, and user-friendly applications. I specialize in React, Laravel, and modern web technologies.",
  contact: {
    email: "hilminurullah3@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "github.com/HirumiN",
    linkedin: "linkedin.com/in/hilmin",
    instagram: "@hirummi_nur",
  },
};

// Skills
export const SKILLS = {
  frontend: [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML/CSS" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Vue.js" },
  ],
  backend: [
    { name: "PHP" },
    { name: "Laravel" },
    { name: "Code Igniter" },
    { name: "SQL" },
    { name: "REST API" },
  ],
  tools: [
    { name: "Git" },
    { name: "Docker" },
    { name: "Webpack" },
    { name: "Figma" },
    { name: "VS Code" },
    { name: "CI/CD" },
    { name: "Linux System" },
  ],
};

// Education information
export const EDUCATION = [
  {
    degree: "Bachelor of Applied Science - Multimedia Engineering Technology",
    institution: "Electronic Engineering Polytechnic Institute of Surabaya",
    period: "2022 - present",
    description:
      "Specialized in Web Developing. Still learning for more experience.",
    courses: [
      "Algorithms",
      "Data Structures",
      "Object-Oriented Programming",
      "Database Management Systems",
    ],
  },
];

// Work experience
export const EXPERIENCE = [
  {
    title: "Project Manager",
    company: "Janaka Visual Novel",
    companyUrl: "#",
    period: "2024 - 2025",
    description:
      "Responsible for managing the end-to-end development of a visual novel game, ensuring smooth collaboration across teams and successful project delivery.",
    responsibilities: [
      "Planned and managed the production timeline",
      "Created and maintained project documentation",
      "Monitored project progress and made adjustments as necessary",
      "Resolved conflicts and issues within the team",
      "Conducted user testing and gathered feedback to improve the game experience",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Tim app",
    companyUrl: "http://timapp.id/",
    period: "2025",
    description:
      "As a Frontend Developer, I was responsible for implementing user-facing features, maintaining code quality, and ensuring seamless user experiences across devices.",
    responsibilities: [
      "Collaborated with designers to implement UI/UX improvements",
      "Updated and migrated several outdated libraries and frameworks to the latest versions",
      "Refactored legacy code to enhance maintainability and scalability",
      "Conducted code reviews and provided constructive feedback to team members",
    ],
  },
];

// Projects -
export const PROJECTS = [
  {
    title: "Management App",
    description:
      "A simple full-stack management app that includes projects, tasks, and users.",
    technologies: ["Laravel", "React", "MySQL", "Inertia.js"],
    githubUrl: "https://github.com/HirumiN/management-app",
    demoUrl: null,
    period: "2025",
    image: "/img/management.png",
  },
  {
    title: "Sales App",
    description:
      "A full-stack e-commerce platform with product management, shopping cart, and payment processing.",
    technologies: ["Bootstrap", "Code Igniter", "Jquery", "MySQL"],
    githubUrl: null,
    demoUrl: null,
    period: "2025",
    image: "/img/sales.png",
  },
  {
    title: "Rent House App",
    description:
      "A full-stack rental platform for managing property listings, tenant applications, and online payments.",
    technologies: ["Laravel", "Filament", "Sqlite", "Midtrans", "Tailwind CSS"],
    githubUrl: "https://github.com/HirumiN/Kosan",
    demoUrl: null,
    period: "2025",
    image: "/img/kosan.png",
  },
  {
    title: "Blog",
    description:
      "This project is an implementation of various concepts in web application development using the Laravel framework. The main goal of this project is to learn and master the various features and capabilities provided by Laravel.",
    technologies: ["Laravel", "Alpine.Js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/HirumiN/Kosan",
    demoUrl: null,
    period: "2024",
    image: "/img/blog.png",
  },
  {
    title: "Meal List",
    description:
      "This is a frontend web project that showcases a list of meals and their recipes. The project leverages a free API from TheMealDB to fetch meal data and recipe details.",
    technologies: ["Vue.Js", "Vuex", "API", "Tailwind CSS"],
    githubUrl: "https://github.com/HirumiN/vuejs-search-meals",
    demoUrl: null,
    period: "2024",
    image: "/img/meal.png",
  },
  {
    title: "Lone Germ",
    description:
      "This is a simple casual game I developed as part of a Game Jam+ competition. As this was my first time developing a game. My role as a UI/UX Designer involved designing a clean, easy-to-navigate interface to enhance the overall player experience",
    technologies: ["UI/UX", "Figma"],
    githubUrl: null,
    demoUrl: null,
    period: "2023",
    image: "/img/lone.png",
  },
];
