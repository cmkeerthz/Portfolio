import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaGithub, FaDatabase, FaHtml5, FaCss3, FaRobot, FaCode } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiFastapi, SiMongodb, SiMysql, SiPostman, SiStreamlit, SiScikitlearn, SiTypescript } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';

export const resumeData = {
  personal: {
    name: "Keerthana Chandirasekar",
    role: "AI, Backend & Full-Stack Engineer",
    location: "Tiruppur / Coimbatore, Tamil Nadu, India",
    phone: "+91 9994694314",
    email: "cmkeerthanapdm@gmail.com",
    linkedin: "linkedin.com/in/keerthana-chandirasekar-189a55328",
    github: "github.com/cmkeerthz",
    bio: "B.Tech student in Artificial Intelligence & Data Science at KPR Institute of Engineering and Technology (CGPA 8.04/10). I build LLM-powered agents, semantic search pipelines, FastAPI & Node.js backends, and full-stack web applications with strong SQL/NoSQL data modeling and reliability."
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
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: FaCode }
    ],
    databases: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL (3NF & Joins)", icon: FaDatabase }
    ],
    ai: [
      { name: "LLM Agents & Tool Use", icon: FaRobot },
      { name: "RAG & Semantic Search", icon: BiNetworkChart },
      { name: "Machine Learning", icon: SiScikitlearn },
      { name: "OCR & NLP", icon: BiNetworkChart },
      { name: "Structured Outputs", icon: BiNetworkChart }
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
      period: "2025 - Present",
      description: "Design and build AI-driven software prototypes and search/retrieval workflows as part of applied research initiatives."
    },
    {
      role: "Full Stack Developer Intern",
      company: "CodeAlpha",
      period: "2024",
      description: "Built full-stack web applications connecting React.js frontends with Node.js/Express.js APIs, authentication, and SQL/NoSQL data stores."
    },
    {
      role: "MERN Full Stack Developer Intern",
      company: "WebStack Academy",
      period: "2024",
      description: "Developed and tested REST API endpoints and full-stack features following agile workflows and Git/GitHub version control."
    }
  ],
  projects: [
    {
      name: "Campus Opportunity Radar",
      tech: ["Python", "FastAPI", "Semantic Search", "AI/NLP", "JavaScript"],
      description: "AI-powered opportunity discovery and semantic matching platform helping students find internships and hackathons via smart filtering and search.",
      github: "https://github.com/cmkeerthz/CampusOpportunityRadar",
      demo: "#"
    },
    {
      name: "PharmaFog+",
      tech: ["Python", "FastAPI", "scikit-learn", "React", "OCR & NLP"],
      description: "Multi-agent clinical risk and prescription evaluation engine combining predictive ML scoring, rule validation, and FastAPI services.",
      github: "https://github.com/cmkeerthz/Team27_PharmaFog",
      demo: "#"
    },
    {
      name: "InkloomGuard",
      tech: ["Python", "FastAPI", "Node.js", "Express.js", "MongoDB"],
      description: "Intelligent brand governance and pre-publication review platform with role-based workflows, claim verification, and structured rewrites.",
      github: "https://github.com/cmkeerthz/InkloomGuard",
      demo: "#"
    },
    {
      name: "Food Genie",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "Full-stack food ordering platform with authentication, cart workflows, and personalized dish recommendations via REST APIs.",
      github: "https://github.com/cmkeerthz/FoodProject-wsa",
      demo: "#"
    },
    {
      name: "Driver Distraction Detection",
      tech: ["Python", "Deep Learning", "CNN", "Computer Vision"],
      description: "Real-time computer vision classification pipeline using Convolutional Neural Networks (CNNs) to detect distracted driving states.",
      github: "https://github.com/cmkeerthz/Driver-Distraction-Detection-Using-CNN",
      demo: "#"
    },
    {
      name: "Influencer Management System",
      tech: ["SQL", "MySQL", "3NF Schema Design"],
      description: "Normalized 3NF relational database architecture and optimized SQL queries for managing creator profiles, campaigns, and payouts.",
      github: "https://github.com/cmkeerthz?tab=repositories",
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
    "Responsible and Safe AI Systems - NPTEL"
  ],
  leadership: [
    "Top 50 Finalist at CodeNexus India 2026 National Hackathon (1,000+ teams)",
    "3rd Place in Capture the Flag (CTF) & technical competitions",
    "24-Hour National Hackathon builder at Karunya Institute of Technology and Sciences",
    "Campus Ambassador & student tech community roles (SPARKS, IGNITTRON)"
  ]
};
