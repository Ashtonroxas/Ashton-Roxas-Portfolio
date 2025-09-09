export const portfolioData = {
  personal: {
    name: "Ashton Roxas",
    title: "Computer Science Student",
    tagline: "Passionate about building innovative software solutions",
    email: "ashton_roxas@student.uml.edu",
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
      { name: "Windows", level: 85, icon: "Monitor" },
    ],
  },

  projects: [
    {
      title: "Expense Tracker",
      description: "Full-stack application to log and categorize personal expenses with interactive charts for real-time expense visualization.",
      tech: ["React", "Node.js", "MongoDB", "RESTful APIs", "Charts"],
      github: "https://github.com",
      live: "https://demo.example.com",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      title: "Sokoban Game",
      description: "2D puzzle game built with SFML using OOP principles, featuring dynamic gameplay, scalable level generation, and comprehensive unit testing.",
      tech: ["C++", "SFML", "OOP", "Unit Tests", "Game Development"],
      github: "https://github.com",
      live: "",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      title: "Evil Hangman Game",
      description: "Dynamic hangman game using AVL Tree data structure to adjust word pool based on guesses, with efficient word list management.",
      tech: ["C", "AVL Tree", "Data Structures", "Unit Tests", "Algorithms"],
      github: "https://github.com",
      live: "",
      image: "/api/placeholder/400/250",
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