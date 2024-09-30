export interface Project {
  title: string;
  description: string[];
  link?: string;
  technologies: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Transaction Tracker",
    description: [
      "Developed a Transaction tracker using React, ASP.NET Web Core Rest APIs, and MS SQL.",
      "Stores customer payment invoices along with car and work details.",
    ],
    technologies: ["React", "ASP.NET Core", "MS SQL"],
  },
  {
    title: "Emart E-Commerce Website",
    description: [
      "Developed a responsive e-commerce website using Bootstrap and Angular.",
      "Implemented a restricted-access admin CRUD dashboard using ASP.NET Web Core Rest APIs.",
    ],
    technologies: ["Bootstrap", "Angular", "ASP.NET Core"],
  },
  {
    title: "Stock Data Extraction & Visualization",
    description: [
      "Developed a data science project for extracting and visualizing stock data of Tesla and GameStop.",
      "Used Web Scraping in Python with the BeautifulSoup Library.",
      "Created interactive graphs and visualizations to perform analysis of stock data.",
    ],
    technologies: ["Python", "BeautifulSoup", "Data Visualization"],
  },
  {
    title: "Real-Time Predictive & Descriptive Analysis in HealthCare (FYP)",
    description: [
      "Developing a scalable and real-time healthcare analytics system for early disease detection.",
      "Utilizing predictive models and descriptive data analytics with interactive graphs and charts.",
      "Web portal helps manage epidemics, reducing mortality rates and healthcare costs.",
      "System built using React, Java Spring Boot, Apache Kafka, Apache Spark, Apache Echart, and PostgreSQL.",
    ],
    technologies: [
      "React",
      "Java Spring Boot",
      "Apache Kafka",
      "Apache Spark",
      "PostgreSQL",
    ],
  },
];

export interface Experience {
  company: string;
  position: string;
  date: string;
  description: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    company: "AwaTech Technology Solutions, Lahore",
    position: "Full Stack .NET Developer",
    date: "Mar 2024 — Current",
    description: [
      "Developed front-end interfaces and enhanced user experiences using Angular and React, optimizing forms and reports.",
      "Created robust backend APIs with C# .NET Core using the Repository pattern to structure services and controllers, ensuring efficient data management and accuracy.",
      "Automated data import processes from FTP servers, reducing manual tasks by 90%.",
      "Implemented real-time communication features using SignalR for real-time command execution and monitoring in electronic devices, enhancing system responsiveness.",
      "Debugged and fixed backend APIs for seamless operations.",
    ],
  },
];

export interface Skill {
  category: string;
  skills: string[];
}

export const sections = [
  { name: "About", icon: "fa-user" },
  { name: "Skills", icon: "fa-cogs" },
  { name: "Experience", icon: "fa-briefcase" },
  { name: "Certifications", icon: "fa-certificate" },
  { name: "Projects", icon: "fa-folder-open" },
];

export const skillVisibleCount: number = 4;

export const skills: Skill[] = [
  {
    category: "Languages",
    skills: ["C#/C/C++", "JavaScript", "TypeScript", "Python", "Java", "PHP"],
  },
  {
    category: "Backend Technologies",
    skills: [
      "ASP.NET Web Core & MVC",
      ".NET Framework",
      "Entity Framework",
      "Microservices",
      "RESTful APIs",
      "Middleware",
      "Java Spring Boot",
      "Hibernate",
      "JDBC",
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      "React",
      "Angular",
      "AngularJS",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "Material UI",
      "Ant Design",
      "Apache Echart",
      "Bootstrap",
      "Ag-Grid",
    ],
  },
  {
    category: "Databases",
    skills: ["SQL", "MS SQL Server", "MySQL", "Postgres"],
  },
  {
    category: "Data Engineering",
    skills: ["Apache Kafka", "Python"],
  },
  {
    category: "Tools",
    skills: [
      "IntelliJ IDEA",
      "Visual Studio Code",
      "Visual Studio Community",
      "Docker",
      "Postman",
      "GitHub/Git",
      "JIRA/Trello",
      "Slack",
      "FileZilla",
      "Windows",
      "Linux",
    ],
  },
  {
    category: "Software Engineering",
    skills: ["Strong background in Design Principles and Patterns"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication",
      "Collaboration",
      "Adaptability",
      "Quick Learner",
      "Problem-Solving",
      "Leadership",
      "Time Management",
    ],
  },
  {
    category: "Domains",
    skills: ["Finance", "Management System & Automation"],
  },
];

export const certifications = [
  {
    title: "Frontend Developer (React)",
    institution: "HackerRank",
    date: "Aug 2024",
    link: "https://www.hackerrank.com/certificates/316f6f39fbd3",
  },
  {
    title: "Programming with JavaScript - Meta",
    institution: "Coursera",
    date: "Mar 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/WCSUP392298C",
  },
  {
    title: ".NET CORE C#, Angular",
    institution: "AwaTech Solution",
    date: "Mar 2024",
  },
  {
    title: "Introduction to Front-End Development - Meta",
    institution: "Coursera",
    date: "Feb 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/K93XEZYHSW3D",
  },
  {
    title: "Version Control - Meta",
    institution: "Coursera",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/MW2L26UE8FF5",
  },
  {
    title: "SQL (Intermediate)",
    institution: "HackerRank",
    date: "Aug 2022",
    link: "https://www.hackerrank.com/certificates/8f84d6f1544a",
  },
];

interface SocialMediaLink {
  href: string;
  label: string;
  icon: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    href: import.meta.env.VITE_LINKEDIN_URL as string,
    label: "LinkedIn",
    icon: "fa-linkedin",
  },
];
