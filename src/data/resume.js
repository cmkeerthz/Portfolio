import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaGithub, FaDatabase, FaHtml5, FaCss3, FaRobot, FaCode } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiFastapi, SiMongodb, SiMysql, SiPostman, SiStreamlit, SiScikitlearn } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';

export const resumeData = {
  personal: {
    name: "Keerthana C",
    role: "AI & Full Stack Developer",
    location: "Palladam, Tiruppur, Tamil Nadu, India",
    phone: "+91 9994694314",
    email: "cmkeerthanaapdm@gmail.com",
    linkedin: "linkedin.com/in/keerthana-chandrasekar",
    github: "github.com/cmkeerthc",
    bio: "I am a Full Stack Developer with hands-on internship experience building responsive, database-driven web applications using React.js, Node.js, Express.js, and both SQL and NoSQL databases. I am skilled in designing REST APIs, implementing authentication, and delivering end-to-end features across multiple full-stack projects. I complement this with practical experience integrating AI capabilities such as OCR, NLP, and generative AI into modern web applications."
  },
  skills: {
    frontend: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
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
      { name: "NLP", icon: BiNetworkChart },
      { name: "OCR", icon: BiNetworkChart },
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
      role: "Full Stack Developer Intern",
      company: "CodeAlpha",
      period: "Jun 2024 - Jul 2024",
      description: "Developed full-stack web applications end-to-end, connecting React.js frontends with Node.js/Express.js backend services for an e-commerce platform and a social media platform. Implemented CRUD functionality and secure authentication, and designed REST APIs integrated with SQL and NoSQL databases."
    },
    {
      role: "MERN Full Stack Developer Intern",
      company: "WebStack Academy",
      period: "Jun 2024 - Jul 2024",
      description: "Built and tested REST API endpoints and backend logic for a MERN-stack project, independently developed following an agile development workflow. Debugged and integrated full-stack features under project deadlines, using Git/GitHub for version control."
    },
    {
      role: "Research Intern",
      company: "Bharat Search Education and Research Center",
      period: "May 2023 - Present",
      description: "Design and develop AI-based software solutions as part of ongoing applied research initiatives, translating research concepts into working prototypes."
    }
  ],
  projects: [
    {
      name: "Food Genie",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "Full-stack food delivery platform with user authentication, restaurant listings, and a shopping cart; integrated AI-powered personalized food recommendations via REST APIs.",
      github: "https://github.com/cmkeerthc", // Placeholder
      demo: "#"
    },
    {
      name: "PharmaFog+",
      tech: ["Python", "FastAPI", "OCR", "NLP", "Streamlit"],
      description: "AI-powered prescription analyzer that applies OCR and NLP to extract and interpret prescription data, served through a FastAPI backend and Streamlit interface.",
      github: "https://github.com/cmkeerthc",
      demo: "#"
    },
    {
      name: "Business Location Predictor",
      tech: ["Python", "Web Application", "Data Analytics"],
      description: "Data-driven web application that recommends profitable business locations by analyzing customer flow, competition, and rental costs, with an interactive visualization interface for location insights.",
      github: "https://github.com/cmkeerthc",
      demo: "#"
    },
    {
      name: "Influencer Management System",
      tech: ["SQL", "MySQL"],
      description: "Normalized relational database with SQL-based CRUD operations for managing influencer campaign data.",
      github: "https://github.com/cmkeerthc",
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
    "Campus Ambassador, Gldy.ai / CStream.io",
    "Campus Connect Chair, SPARKS Student Association",
    "Branding Member, IGNITTRON Technical Team (2025-2026)",
    "Secured 4th place in a Capture the Flag (Cybersecurity) and inter-college technical quiz competition at Coimbatore Institute of Technology",
    "Participated in a 24-hour hackathon at Karunya Institute of Technology and Sciences"
  ]
};
