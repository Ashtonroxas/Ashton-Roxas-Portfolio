import { 
  Code2, 
  Globe, 
  Database, 
  Terminal, 
  Cpu, 
  Cloud, 
  Layout, 
  Server, 
  GitBranch, 
  Layers, 
  Box, 
  Workflow,
  Zap,
  CheckCircle 
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Ashton Roxas",
    title: "CS Student & Full-Stack Engineer",
    tagline: "Building scalable cloud solutions and intuitive user experiences.",
    email: "ashton.roxas@gmail.com",
    location: "Manchester, NH",
    bio: "Computer Science student at UMass Lowell with a strong foundation in cloud-native architecture, full-stack development, and AI integration. Passionate about solving complex problems using modern tools like AWS, Azure, and React. Proven leader with experience driving community engagement and managing technical projects.",
    image: "/portfolio.jpg", 
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  skills: {
    languages: [
      { name: "Java", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "C++", icon: Code2 },
      { name: "TypeScript", icon: Globe },
      { name: "SQL", icon: Database },
      { name: "Kotlin", icon: Code2 },
      { name: "HTML/CSS", icon: Layout },
      { name: "C", icon: Code2 }, 
    ],
    cloud: [ 
      { name: "AWS (Lambda/CDK)", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Firebase", icon: Database },
      { name: "Docker", icon: Box },
      { name: "CI/CD", icon: Workflow },
      { name: "Git", icon: GitBranch },
    ],
    frameworks: [
      { name: "React.js", icon: Globe },
      { name: "Next.js", icon: Globe },
      { name: "Vite", icon: Zap },        
      { name: "Node.js", icon: Server },
      { name: "Spring Boot", icon: Server },
      { name: "Tailwind CSS", icon: Layout },
      { name: "SFML", icon: Cpu },
      { name: "JUnit", icon: CheckCircle }, 
    ],
    concepts: [ 
      { name: "Microservices", icon: Layers },
      { name: "REST/GraphQL", icon: Globe },
      { name: "Agile", icon: Workflow },
      { name: "Data Structures", icon: Database },
      { name: "OOP", icon: Code2 },
    ],
  },

  projects: [
    {
      title: "AudioByte",
      description: "Cloud-native music platform architected with AWS Microservices. Engineered a serverless GraphQL API with Python Lambda resolvers to handle authenticated file uploads and concurrent user requests. Utilized AWS CDK for infrastructure-as-code to reduce deployment time by 40%.",
      tech: ["AWS Lambda", "Python", "GraphQL", "AWS CDK", "React"],
      image: "/images/audiobyte.png", // Ensure you add this image to your public folder!
      github: "https://github.com/Ashtonroxas/AudioByte",
      live: "",
      featured: true,
    },
    {
      title: "HawkAdvisor",
      description: "AI-powered career discovery platform for 18,000+ students. Leveraged LLM logic and Azure Cognitive Search to bridge the gap between academic electives and industry demands. Implemented automated data scrapers and a '5-click rule' UI for rapid data access.",
      tech: ["Kotlin", "Spring Boot", "Azure AI", "SQL", "LLM"],
      image: "/images/hawkadvisor.png", 
      github: "https://github.com/Ashtonroxas/HawkAdvisor",
      live: "",
      featured: true,
    },
    {
      title: "GroupTab",
      description: "Real-time expense-sharing SaaS app. Utilized Firebase Firestore snapshots for sub-second data synchronization. Engineered a secure 'Join Code' system with strict Security Rules. Designed a glass-morphism dashboard with dynamic receipt splitting logic.",
      tech: ["React", "Vite", "Firebase", "Tailwind CSS"],
      image: "/images/grouptab.png",
      github: "https://github.com/Ashtonroxas/GroupTab",
      live: "",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio built with React, TypeScript, and Framer Motion for smooth animations. Features dynamic content rendering and a modern component-based architecture.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      image: "/portfolio.jpg",
      github: "https://github.com/Ashtonroxas/portfolio",
      live: "/",
      featured: false,
    },
  ],

  experience: [
    {
      role: "President",
      company: "UML The Filipino Club",
      duration: "April 2024 – April 2025",
      description: "Directing a cross-functional team of 10 officers to execute cultural events.",
      achievements: [
        "Managed a semester operating budget of $2,000+ and orchestrated logistics for large-scale outreach programs",
        "Increased active membership by 25% through data-driven social media campaigns",
        "Acted as primary liaison between the student body and university administration",
      ],
    },
    {
      role: "CS Student",
      company: "UMass Lowell",
      duration: "2022 - 2026 (Expected)",
      description: "Bachelor of Science in Computer Science (GPA: 3.3).",
      achievements: [
        "Relevant Coursework: Cloud Computing, Computer Security, Analysis of Algorithms, Mobile App Programming",
        "Dean's List & Honors Student",
      ],
    },
    {
      role: "Barista/Cashier",
      company: "Gong Cha",
      duration: "July 2021 - Dec 2024",
      description: "Provided exceptional service in a high-volume environment.",
      achievements: [
        "Reduced service time by 15% through operational efficiency improvements",
        "Managed high-volume transactions while maintaining quality standards",
      ],
    },
  ],

  leadership: {
    role: "Volunteer Coordinator",
    organization: "Boston Misang Pinoy",
    duration: "Dec 2020 – Present",
    description: "Coordinating logistics for community events and designing multimedia presentations to enhance engagement.",
    achievements: [
      "Demonstrated strong organizational leadership in event coordination",
      "Designed multimedia presentations increasing attendee engagement",
      "Contributed to meal preparation and event execution"
    ]
  },

  social: [
    { 
      name: "GitHub", 
      url: "https://github.com/Ashtonroxas", 
      icon: "Github",
      username: "@ashtonroxas"
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/ashton-roxas", 
      icon: "Linkedin",
      username: "Ashton Roxas"
    },
    { 
      name: "Email", 
      url: "mailto:ashton.roxas@gmail.com", 
      icon: "Mail",
      username: "ashton.roxas@gmail.com"
    },
  ],
};