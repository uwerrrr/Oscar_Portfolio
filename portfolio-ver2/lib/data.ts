import { StaticImageData } from "next/image";
import { ProjectType, ProjectTypeWithAll } from "@/lib/types";

// Icons
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMicroscope } from "@fortawesome/free-solid-svg-icons";

// Education images
import MacquarieUniLogo from "@/public/edu-logo/MacquarieUniLogo.png";
import RMITUniLogo from "@/public/edu-logo/RMITUniLogo.png";

// Project images
import morseImg from "@/public/project-imgs/morse_code.png";
import employeeCreatorImg from "@/public/project-imgs/employee_creator.jpeg";
import textProjectImg from "@/public/project-imgs/text_major.png";
import mysqlAnalyticsImg from "@/public/project-imgs/mysql_analytics.png";
import googleBooksImg from "@/public/project-imgs/google_books.png";
import awsDataProcessingImg from "@/public/project-imgs/aws_data_processing.png";
import minesweeperImg from "@/public/project-imgs/minesweeper.png";
import fakeOsImg from "@/public/project-imgs/fake_os.png";
import goloImg from "@/public/project-imgs/golo_crm.png";
import portfolioImg from "@/public/project-imgs/portfolio.png";
import quizzAppImg from "@/public/project-imgs/quizz_app.png";
import richardLeImg from "@/public/project-imgs/richardle.jpg";

// Sections
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Social urls
export const socials = {
  linkedin: {
    // color: "#145ab5",
    // color: "linkedin",
    url: "https://www.linkedin.com/in/oscar-vannguyen/",
    icon: faLinkedin,
  },
  github: {
    // color: "#662a8c",
    // color: "github",
    url: "https://github.com/uwerrrr",
    icon: faSquareGithub,
  },
  email: {
    // color: "#3179b5",
    // color: "#fb923c",
    // color: "email",
    url: "van.lenguyen@outlook.com ",
    icon: faEnvelope,
  },
  // portfolio: {
  //   color: "#3179b5",
  //   url: "https://github.com/uwerrrr",
  // },
};

// Education data
export const eduData = [
  {
    place: "Macquarie University",
    degree: "Master of Data Science",
    logo: MacquarieUniLogo,
    date: "2019 - 2021",
    description: `Weighted Average Mark: 82 (Distinction).
    Awarded Letter of Commendation for High Distinction in Machine Learning, Mining Unstructured Data, Applications
of Data Science and Enterprise Application Integration courses.
    Awarded 1st winner of AI-Enabled Banking Hackathon 2020 organising by Big Data Society, Department of
Computing. 
    Macquarie University ASEAN Scholarship.`,
  },
  {
    place: "RMIT University",
    degree: "Bachelor of Business Information System",
    logo: RMITUniLogo,
    date: "2013 - 2018",
    description: `High Distinction grades in Developing Mobility Solutions and Information Systems Development.
    Vice President of RMIT Business Information System Club, leading the sponsorship team in an academic competition that attracted 50 participants from 5 major universities.`,
  },
];

// Experience data
export const experiencesData = [
  {
    title: "Full-Stack Software Engineer",
    company: "Genius IT Solutions",
    location: "Sydney, NSW",
    description: `Built an internal web-based system using .NET Core, C#, and SQL Server with RESTful APIs
    Contributed to the development of a customer relationship management (CRM) Web Application project.
    Developed a customer relationship management (CRM) Web Application project with NextJS, React, and TypeScript, implementing 3 key features: document management, landing page, and tax settings, along with unit testing.
    Successfully captured and prioritized 10 functional and non-functional requirements, leading to a 20% increase in project delivery speed.
    Design system process flow with UML flowcharts to visualize complex processes, enabling cross-team alignment.`,
    icon: faLaptopCode,
    date: "Dec 2023 - Jan 2025",
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Nology",
    location: "Sydney, NSW",
    description: `Completed an intensive 12-week training program on full-stack website development.
Deployed 6 projects using React with Javascript and Typescript, Java and MySQL.
Coordinated with 2 senior software engineers on backend development for a client project, which involved a student
metrics application using NestJS and Typescript.
Enhanced CI/CD pipeline by migrating to Playwright end-to-end testing framework.
Enriched data viewing requests by implementing 2 new HTTP requests using the MySQL virtual entities method.`,
    icon: faLaptopCode,
    date: "May 2023 - Oct 2023",
  },
  {
    title: "Data Scientist",
    company: "Truuth",
    location: "Sydney, NSW",
    description: `Did migration from Firebase Kit to Mediapipe library to extend Truuth facekey biometrics from 128 to 468 3D face
coordinates, enhancing the scope of potential facial verification tests.
Compiled 4 comprehensive documents outlining current implementations and potential future developments on
internal Confluence platform.
Contributed to a team of 5 in Scrum Agile environment to create a new app UX demo.
Worked closely with a senior data scientist to increase the accuracy of Truuth MVP1 liveness fusion model from
65% to 75%, improving overall system reliability.
TRG International, Ho Chi Minh City, Vietnam`,
    icon: faMicroscope,
    date: "Feb 2021 - Jun 2021",
  },
  {
    title: "ERP Application Consultant",
    company: "TRG International",
    location: "Ho Chi Minh City, Vietnam",
    description: `Worked in a team of 5 to deploy an ERP project for a 2000-store shoe manufacturing corporation in Vietnam,
including the installation of ERP and database environments on the client’s server.
Engaged directly with client’s CFO to collect and analyse requirements, proposed ERP processes for the Finance
module, and developed functional processes in accordance with Vietnamese Accounting Standards.
Conducted user acceptance testing (UAT) phase, which included 7 end-user training sessions and a detailed 15-
page user guideline.
Developed client-tailored solutions, improving operational efficiency by 25% using Excel Macro to overcome system
limitations.
Conducted 2 product pitching using Microsoft PowerBI.`,
    icon: faBriefcase,
    date: "Jan 2016 - Jan 2017",
  },
] as const;

// Skills data
export const skillsData = [
  "Machine Learning",
  "Amazon SageMaker",
  "Data Analysis",
  "System Design",
  "Microsoft PowerBI",
  "R",
  "Framer Motion",
  "Java",
  "SpringBoot",
  "Python",
  "SQL",
  "CSS",
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  ".Net",
] as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  githubLink: string;
  deployLink: string;
  types: ProjectType[];
}

// Default project type
export const DEFAULT_PROJECT_TYPE: ProjectTypeWithAll = "Feature";

// Projects data
export const projectsData: Project[] = [
  {
    title: "Richard Le",
    description:
      "Richard Le project is a front-end website built with NextJS. I collaborated with a team of developers and designers to build key features such as landing page, animation, slideshow, SEO optimization and translation.",
    tags: ["NextJS", "TypeScript"],
    imageUrl: richardLeImg,
    githubLink: "",
    deployLink: "https://www.richardle.com.au/",
    types: ["Front-end", "Client", "Feature"],
  },
  {
    title: "Golo CRM",
    description: `Golo CRM is a full-stack CRM application built with NextJS. Collaborated with GeniusIT team to build key features such as document database, document management dashboard and landing page`,
    tags: ["NextJS", "TypeScript", "Vercel", "Turso", "drizzle"],
    imageUrl: goloImg,
    githubLink: "",
    deployLink: "https://golocrm.com",
    types: ["Full-stack", "Client", "Feature"],
  },
  {
    title: "Text major project",
    description: `The main task of the this project is to build and compare predictive models which are to predict `,
    tags: ["Python", "ipynb", "NLP", "Machine Learning"],
    imageUrl: textProjectImg,
    githubLink: "https://github.com/uwerrrr/text_major_project",
    deployLink:
      "https://colab.research.google.com/drive/1N9Iy4mfvcwihaAXFYW5lri77VR2bipM7#scrollTo=Pwq6jYZIrGgU",
    types: ["Data", "Feature"],
  },
  {
    title: "Employee-Creator",
    description: `Effortlessly manage employees: VIEW, CREATE, EDIT, DELETE with built-in validation for accuracy.`,
    tags: [
      "React",
      "TypeScript",
      "Java",
      "SpringBoot",
      "React hook form & Yup",
    ],
    imageUrl: employeeCreatorImg,
    githubLink: "https://github.com/uwerrrr/employee-creator",
    deployLink: "https://oscar-employeecreator.onrender.com",
    types: ["Full-stack", "Front-end", "Feature"],
  },
  {
    title: "Morse Code translator",
    description: `A simple translator between Latin characters and Morse code (both ways). Demonstrating error handling and writing tests.`,
    tags: ["HTML", "SCSS", "JavaScript", "TDD"],
    imageUrl: morseImg,
    githubLink: "https://github.com/uwerrrr/morseCodeTranslator",
    deployLink: "https://oscar-morsecode.netlify.app/",
    types: ["Front-end"],
  },
  {
    title: "Google books search",
    description: `A book search engine using the Google Books API. 
    Demonstrating React implementation to make an interactive website, API integration and error handling.`,
    tags: ["React", "SCSS", "JavaScript", "API"],
    imageUrl: googleBooksImg,
    githubLink: "https://github.com/uwerrrr/Google-Books-Search",
    deployLink: "https://oscar-booksearch.netlify.app/",
    types: ["Front-end"],
  },
  {
    title: "mySQL analytics",
    description: `This project aims to create a compact MySQL database using an open-source dataset and then leverage Python to perform data analysis and insights.`,
    tags: ["SQL", "mySQL", "Database Normalization"],
    imageUrl: mysqlAnalyticsImg,
    githubLink: "https://github.com/uwerrrr/mySQL-analytics",
    deployLink: "",
    types: ["Data"],
  },
  {
    title: "Tiny AWS Lambda Data Processing Project",
    description: `This project demonstrates a minimal data processing pipeline implemented on AWS Lambda using the Titanic: Machine Learning from Disaster dataset.
    The pipeline is designed to run a data processing function daily to handle the dataset stored in an S3 bucket.`,
    tags: ["AWS S3", "AWS Lambda"],
    imageUrl: awsDataProcessingImg,
    githubLink: "https://github.com/uwerrrr/aws_titanic",
    deployLink: "",
    types: ["Data"],
  },
  {
    title: "Minesweeper",
    description: `A minesweeper game running in CLI. Classic but will blow your mind away! Built with JAVA.`,
    tags: ["Java"],
    imageUrl: minesweeperImg,
    githubLink: "https://github.com/uwerrrr/minesweeper",
    deployLink: "",
    types: ["Back-end"],
  },
  {
    title: "fakeOS",
    description: `Travel back to 1984 with my interactive fake retro Macintosh OS on web page. Demonstrating interactive website creation using only Javascript and HTML.`,
    tags: ["HTML, SCSS, JavaScript"],
    imageUrl: fakeOsImg,
    githubLink: "https://github.com/uwerrrr/fakeOS",
    deployLink: "https://uwerrrr.github.io/fakeOS/",
    types: ["Back-end"],
  },
  {
    title: `Quizz app .Net Project`,
    description: `This is an online quiz application that can create, manage, and participate in quizzes. This project has been implemented by using .NET Core, Entity Framework, and Razor Pages. 
    Besides, it maintains an attractive interface that will allow users to take quizzes, keeping track of their results and managing questions.
    This project is supposed to be hands-on practice for C#, .NET Core, and Entity Framework.`,
    tags: [".NET", "C#", "Entity Framework", "Razor Pages"],
    imageUrl: quizzAppImg,
    githubLink: "https://github.com/uwerrrr/quizzApp",
    deployLink: "",
    types: ["Full-stack", "Front-end", "Feature"],
  },
  {
    title: "Personal portfolio website",
    description: `Within this portfolio, you will gain insights into my background, skills, and experiences. Additionally, you will have the opportunity to explore the projects I have completed. Should you wish to get in touch, please feel free to contact me via email or LinkedIn.`,
    tags: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "Resend API",
      "Framer Motion",
      "Vercel",
    ],
    imageUrl: portfolioImg,
    githubLink: "https://github.com/uwerrrr/Oscar_Portfolio",
    deployLink: "https://oscar-nguyen.vercel.app/",
    types: ["Front-end", "Feature"],
  },
] as const;
