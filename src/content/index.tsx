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
  imgSrc: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    href: import.meta.env.VITE_LINKEDIN_URL as string,
    label: "LinkedIn",
    imgSrc:
      "data:image/png;base64,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",
  },
];
