export const techSkills = {
  frontend: {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
    //   {
    //     name: "Tailwind CSS",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    //   },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      },
      {
        name: "Sass",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
      }
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
    //   {
    //     name: "Express",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    //   },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        name: "GraphQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
      }
    ]
  },
  languages: {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      },
      {
        name: "Go",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
      },
    //   {
    //     name: "Rust",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
    //   },
      {
        name: "Swift",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
      }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      },
    //   {
    //     name: "AWS",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
    //   },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      },
      {
        name: "Jenkins",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      },
      {
        name: "Nginx",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
      }
    ]
  }
};
// export const techSkills = {
 
// };

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jul 2025 - Present",
    description: [
      "Developed and maintained web applications using MERN stack",
      "Implemented RESTful APIs with Node.js and Express",
      "Optimized application performance reducing load time by 40%"
    ],
    skills: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Creations",
    duration: "nov 2024 - Dec 2024",
    description: [
      "Built responsive UIs with React and Tailwind CSS",
      "Collaborated with design team to implement Figma mockups",
      "Improved accessibility scores by 30%"
    ],
    skills: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    id: 3,
    role: "Backend Intern",
    company: "Data Systems Ltd.",
    duration: "Mar 2024 - April 2024",
    description: [
      "Assisted in developing server-side logic with Express",
      "Worked with MongoDB database design and queries",
      "Participated in code reviews and team meetings"
    ],
    skills: ["Node.js", "MongoDB", "REST APIs"]
  },
  // Add more experiences as needed
 
];
// constants.js
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment gateway and admin dashboard",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/ecommerce.jpg",
    link: "#",
    github: "#",
    features: [
      "Product catalog with filters",
      "User authentication",
      "Payment processing",
      "Order tracking"
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Modern developer portfolio with interactive elements",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio.jpg",
    link: "#",
    github: "#",
    features: [
      "Responsive design",
      "Animated transitions",
      "Dark/light mode",
      "Contact form"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Productivity application with real-time updates",
    technologies: ["React", "Firebase", "Redux"],
    image: "/images/taskapp.jpg",
    link: "#",
    github: "#",
    features: [
      "Drag-and-drop interface",
      "Team collaboration",
      "Progress tracking",
      "Notifications"
    ]
  },
  // Add more projects as needed
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    image: "/images/weather.jpg",
    link: "#",
    github: "#",
    features: [
      "Location-based forecasts",
      "5-day outlook",
      "Interactive charts",
      "Responsive design"
    ]
  }
];
// constants.js
// constants.js
export const education = [
  {
    id: 1,
    level: "Matriculation",
    degree: "Science",
    institution: "Govt High School Sardi Bhalgran",
    duration: "2020 - 2022",
    description: [
      "Major Subjects: Physics, Chemistry, Mathematics",
      "Grade: A+ (90%)",
      "Awarded Merit Scholarship"
    ],
    logo: "/logos/school-icon.png" // Default icon
  },
  {
    id: 2,
    level: "Intermediate",
    degree: "FSC (Pre-Engineering)",
    institution: "Kashmir College of Modern Sciences & Commerce",
    duration: "2022 - 2024",
    description: [
      "Major Subjects: Mathematics, Physics, Computer Science",
      "Grade: A (85%)",
      "Class Representative"
    ],
    logo: "/logos/college-icon.png"
  },
  {
    id: 3,
    level: "Undergraduate",
    degree: "BSCS (Continuing)",
    institution: "Minhaj University Lahore (MUL)",
    duration: "2025 - Present",
    description: [
      "Specialization: Software Engineering",
      "Current CGPA: 3.6/4.0",
      "Active in CS Society"
    ],
    logo: "/logos/university-icon.png"
  },
  {
    id: 4,
    level: "Professional Certification",
    degree: "MERN Stack Development",
    institution: "Arfa Karim Tower (Nexskill)",
    duration: "2024 (6 Months)",
    description: [
      "Hands-on training in MongoDB, Express, React, Node.js",
      "Built 5+ real-world projects",
      "Certified with 98% score"
    ],
    logo: "/logos/certificate-icon.png"
  }
];