import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaGithub, FaDatabase, FaHtml5, FaCss3, FaRobot, FaCode } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiFastapi, SiMongodb, SiMysql, SiPostman, SiStreamlit, SiScikitlearn, SiTypescript } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';

export const resumeData = {
  personal: {
    name: "Keerthana Chandirasekar",
    role: "Software Development Engineer (SDE) — Full-Stack, Backend & AI Systems",
    location: "Palladam, Tiruppur, Tamil Nadu, India",
    phone: "+91 9994694314",
    email: "cmkeerthanapdm@gmail.com",
    linkedin: "linkedin.com/in/keerthana-chandirasekar-189a55328",
    github: "github.com/cmkeerthz",
    bio: "Software Development Engineer with hands-on internship experience building scalable web applications, REST APIs, and database-backed systems using React.js, Node.js, Express.js, FastAPI, Python, and SQL/NoSQL databases, with practical integration of AI and data-driven features."
  },
  skills: {
    frontend: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 }
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: FaCode }
    ],
    databases: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: FaDatabase }
    ],
    ai: [
      { name: "Generative AI", icon: FaRobot },
      { name: "Machine Learning", icon: SiScikitlearn },
      { name: "NLP & Semantic Search", icon: BiNetworkChart },
      { name: "OCR & Vision", icon: BiNetworkChart },
      { name: "Prompt Engineering", icon: BiNetworkChart }
    ],
    tools: [
      { name: "Git & GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "AWS", icon: FaAws },
      { name: "Streamlit", icon: SiStreamlit }
    ]
  },
  experience: [
    {
      role: "Research Intern",
      company: "Bharat Search Education and Research Center",
      period: "May 2023 - Present",
      description: "Design and develop AI-based software solutions as part of ongoing applied research initiatives, translating research concepts into working software prototypes."
    },
    {
      role: "Full Stack Developer Intern",
      company: "CodeAlpha",
      period: "Jun 2024 - Jul 2024",
      description: "Developed full-stack web applications end-to-end, connecting React.js frontends with Node.js/Express.js backend services, implementing CRUD operations and authentication, and designing REST APIs integrated with SQL and NoSQL databases."
    },
    {
      role: "MERN Full Stack Developer Intern",
      company: "WebStack Academy",
      period: "Jun 2024 - Jul 2024",
      description: "Built and tested REST API endpoints and backend logic for a MERN-stack project following an agile workflow, debugging and integrating full-stack features using Git and GitHub."
    }
  ],
  projects: [
    {
      name: "Campus Opportunity Radar",
      tech: ["Python", "FastAPI", "Semantic Search", "AI/NLP", "JavaScript"],
      description: "AI-powered opportunity discovery and semantic matching platform helping students find internships and hackathons through smart filtering and structured search.",
      github: "https://github.com/cmkeerthz/CampusOpportunityRadar",
      demo: "#"
    },
    {
      name: "PharmaFog+",
      tech: ["Python", "FastAPI", "OCR", "NLP", "Streamlit"],
      description: "AI-powered prescription analyzer that applies OCR and NLP to extract and interpret prescription data, served through a FastAPI backend and interactive interface.",
      github: "https://github.com/cmkeerthz/Team27_PharmaFog",
      demo: "#"
    },
    {
      name: "InkloomGuard",
      tech: ["Python", "FastAPI", "Node.js", "Express.js", "MongoDB"],
      description: "Brand governance and pre-publication review platform with role-based workflows, claim verification, and structured content rewrites.",
      github: "https://github.com/cmkeerthz/InkloomGuard",
      demo: "#"
    },
    {
      name: "Food Genie",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "Full-stack food delivery platform with user authentication, restaurant listings, shopping cart workflows, and personalized recommendations via REST APIs.",
      github: "https://github.com/cmkeerthz/FoodProject-wsa",
      demo: "#"
    },
    {
      name: "Driver Distraction Detection",
      tech: ["Python", "Deep Learning", "CNN", "Computer Vision"],
      description: "Computer vision pipeline using Convolutional Neural Networks (CNNs) to classify driver distraction states from visual inputs.",
      github: "https://github.com/cmkeerthz/Driver-Distraction-Detection-Using-CNN",
      demo: "#"
    },
    {
      name: "Business Location Predictor",
      tech: ["Python", "Data Analytics", "Web Application"],
      description: "Data-driven web application that scores and recommends candidate business locations by analyzing customer flow, competition, and rental costs.",
      github: "https://github.com/cmkeerthz?tab=repositories",
      demo: "#"
    },
    {
      name: "Influencer Management System",
      tech: ["SQL", "MySQL", "Database Design"],
      description: "Normalized relational database schema and SQL query engine with CRUD operations for managing creator profiles, campaigns, and payouts.",
      github: "https://github.com/cmkeerthz?tab=repositories",
      demo: "#"
    },
    {
      name: "Social Platform & Portfolio Builds",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
      description: "Responsive full-stack and frontend web builds developed during full-stack engineering internships and personal software builds.",
      github: "https://github.com/cmkeerthz/Social_Platform",
      demo: "#"
    }
  ],
  education: [
    {
      degree: "B.Tech, Artificial Intelligence and Data Science",
      institution: "KPR Institute of Engineering and Technology",
      period: "2024 - 2028",
      cgpa: "8.04 / 10",
      coursework: "Data Structures, DBMS, Full Stack Development, Cloud Computing, Machine Learning, Data Analytics"
    }
  ],
  certifications: [
    "TATA GenAI Powered Data Analytics Job Simulation - Forage",
    "Introduction to Generative AI - Google Cloud Skills Boost",
    "Responsible and Safe AI Systems - NPTEL (Ongoing)"
  ],
  leadership: [
    "Top 50 Finalist at CodeNexus India 2026 National Hackathon",
    "3rd Place in Capture the Flag (CTF) & technical competitions",
    "Campus Ambassador, Gldy.ai / CStream.io",
    "Campus Connect Chair, SPARKS Student Association",
    "Branding Member, IGNITTRON Technical Team (2025-2026)",
    "Participated in a 24-hour hackathon at Karunya Institute of Technology and Sciences"
  ]
};
