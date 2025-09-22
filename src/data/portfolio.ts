export const portfolioData = {
  personal: {
    name: "Ashton Roxas",
    title: "CS Student🧑‍🎓",
    tagline: "Passionate about building innovative software solutions",
    email: "ashton.roxas@gmail.com",
    location: "Manchester, NH",
    bio: "Computer Science student at University of Massachusetts Lowell,  passionate about full-stack development and game programming. Dean's List honors student with leadership experience as UML Club President. Skilled in multiple programming languages and frameworks, with hands-on experience in building dynamic applications and contributing to community initiatives.",
    image: "/api/placeholder/300/300", // Will generate this
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
      { name: "C", level: 85, icon: "Code" },
      { name: "C++", level: 88, icon: "Code2" },
      { name: "Java", level: 85, icon: "Coffee" },
      { name: "Python", level: 85, icon: "Terminal" },
      { name: "JavaScript", level: 82, icon: "FileCode" },
      { name: "HTML/CSS", level: 80, icon: "Globe" },
      { name: "SQL", level: 78, icon: "Database" },
    ],
    frontend: [
      { name: "React", level: 85, icon: "Component" },
      { name: "HTML/CSS", level: 80, icon: "Palette" },
      { name: "JavaScript", level: 82, icon: "FileCode" },
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "Server" },
      { name: "MongoDB", level: 82, icon: "DatabaseZap" },
      { name: "RESTful APIs", level: 80, icon: "Route" },
    ],
    tools: [
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "VSCode", level: 90, icon: "Code" },
      { name: "SFML", level: 75, icon: "Gamepad2" },
      { name: "Boost", level: 70, icon: "Zap" },
      { name: "Linux", level: 78, icon: "Terminal" },
      { name: "AWS", level: 85, icon: "Monitor" },
    ],
  },

   projects: [
    {
      title: "BudgetBuddy (Expense Tracker)",
      description:
        "Full-stack app for expense tracking with multi-currency support, secure APIs, and interactive charts.",
      tech: ["Node.js", "MongoDB", "React", "Chart.js"],
      image: "/images/budgetbuddy.png",
      github: "https://github.com/Ashtonroxas/BudgetBuddy",
      live: "",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive React + TypeScript portfolio website with Framer Motion and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      image: "/images/portfolio.png",
      github: "https://github.com/Ashtonroxas/portfolio",
      live: "/",
      featured: true,
    },
    {
      title: "Sokoban Game",
      description:
        "2D puzzle game built with C++ and SFML, featuring level generation and unit tests.",
      tech: ["C++", "SFML", "Unit Tests"],
      image: "/images/sokoban.png",
      github: "https://github.com/Ashtonroxas/sokoban",
      live: "",
      featured: false,
    },
    {
      title: "Evil Hangman Game",
      description:
        "Dynamic hangman game using an AVL Tree for adaptive gameplay and efficient data structures.",
      tech: ["C", "AVL Tree", "Unit Tests"],
      image: "/images/evil-hangman.png",
      github: "https://github.com/Ashtonroxas/evil-hangman",
      live: "",
      featured: false,
    },
  ],

  experience: [
    {
      role: "President",
      company: "UML The Filipino Club",
      duration: "April 2024 – April 2025",
      description: "Leading a team in organizing cultural events and expanding membership through strategic outreach and social media campaigns.",
      achievements: [
        "Increased club participation by 40% through targeted engagement strategies",
        "Managed budgeting and logistics for cultural outreach programs",
        "Expanded membership through social media campaigns and networking events",
      ],
    },
    {
      role: "Computer Science Student",
      company: "University of Massachusetts Lowell",
      duration: "2022 - 2026 (Expected)",
      description: "Bachelor of Science in Computer Science with 3.1 GPA. Dean's List and Honors Student with comprehensive coursework in programming and system design.",
      achievements: [
        "Maintained Dean's List status and Honors Student recognition",
        "Completed coursework in Data Structures, OOP, Operating Systems, and Computer Architecture",
        "Developed strong foundation in C, C++, Java, Python, and web technologies",
      ],
    },
    {
      role: "Barista/Cashier",
      company: "Gong Cha",
      duration: "July 2021 - December 2024",
      description: "Delivered exceptional customer service in fast-paced environment, managing transactions and streamlining store operations.",
      achievements: [
        "Reduced service time by 15% through improved operational efficiency",
        "Enhanced customer satisfaction through effective communication and teamwork",
        "Managed high-volume transactions while maintaining quality standards",
      ],
    },
    {
      role: "Volunteer",
      company: "Boston Misang Pinoy",
      duration: "December 2020 – Present",
      description: "Coordinate logistics for community events and create multimedia presentations to enhance engagement and community participation.",
      achievements: [
        "Demonstrated strong organizational leadership in event coordination",
        "Designed multimedia presentations increasing attendee engagement",
        "Contributed to meal preparation and event execution for community gatherings",
      ],
    },
  ],

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
      url: "mailto:ashton_roxas@student.uml.edu", 
      icon: "Mail",
      username: "ashton_roxas@student.uml.edu"
    },
  ],
};