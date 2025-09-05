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
import fizzBuzzLightYearImg from "@/public/project-imgs/fizz_buzz_light_year.png";


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
    description: `Migrated an architectural drawing management application from .NET 5 to .NET 9 within a 10-member agile team.
Developed 'Disciplines' and 'Buildings' modules for the migrated application using ASP.NET Core Web API, Entity Framework Core, Angular, and GraphQL.
Developed a full-stack CRM application using Next.js and TypeScript, delivering 3 key features including document management, a new landing page, and tax settings functionality.
Authored over 8 unit tests for the CRM application to ensure robust functionality and adherence to best practices.
Built an internal web-based system using .NET Core, C#, and SQL Server with RESTful APIs.
Captured and prioritised 10+ functional and non-functional requirements, resulting in a 20% improvement in project delivery speed.
Designed system process flows using UML flowcharts to visualize complex processes, enhancing cross-team alignment and understanding.
`,
    icon: faLaptopCode,
    date: "Dec 2023 - Jan 2025",
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Nology",
    location: "Sydney, NSW",
    description: `Completed an intensive 12-week full-stack development program, deploying 6 projects using React
with JavaScript and TypeScript, Java and MySQL.
Collaborated with senior engineers on backend development for a client project - a student metrics
application using NestJS and TypeScript.
Enhanced system functionality by improving the CI/CD pipeline through migration to Playwright for
end-to-end testing and implementing 2 new HTTP requests for enriched data viewing requests using
MySQL virtual entities.`,
    icon: faLaptopCode,
    date: "May 2023 - Dec 2023",
  },
  {
    title: "Data Scientist",
    company: "Truuth",
    location: "Sydney, NSW",
    description: `Improved the accuracy of the Truuth MVP1 liveness fusion model from 65% to 75%, significantly
enhancing overall system reliability, in collaboration with a senior data scientist. Leveraged Python
for model development and evaluation.
Migrated from Firebase Kit to Mediapipe library to extend Truuth facekey biometrics from 128 to
468 3D face coordinates, enhancing the scope of potential facial verification tests. This involved
significant data manipulation and analysis using Python.
Developed documentation outlining implementations and future developments on Confluence.
Contributed to UX demo development within a Scrum Agile team.`,
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
  ".Net",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
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
  "Node.js",
  "Git",
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
    title: "FizzBuzzLightYear",
    description: "An online gaming application that allows users to create, manage, and play custom FizzBuzz-like games. Players can define their own divisibility rules, play timed sessions with randomly generated numbers, and track their scores based on correct and incorrect answers. The application features a Next.js and TypeScript front-end, with an ASP.NET 8 Web API backend and a lightweight SQLite database, all packaged for easy deployment using Docker.",
    tags: [".NET", "Next.js", "TypeScript", "Entity Framework Core", "SQLite", "Docker"],
    imageUrl: fizzBuzzLightYearImg,
    githubLink: "https://github.com/uwerrrr/FizzBuzzLightYear",
    deployLink: "",
    types: ["Full-stack", "Feature"],
  },
  {
    title: `Quizz app .Net Project`,
    description: `This is an online quiz application that can create, manage, and participate in quizzes. This project has been implemented by using .NET Core, Entity Framework, and Razor Pages. 
    Besides, it maintains an attractive interface that will allow users to take quizzes, keeping track of their results and managing questions.
    This project is supposed to be hands-on practice for C#, .NET Core, and Entity Framework.`,
    tags: [".NET", "C#", "Entity Framework Core", "Razor Pages"],
    imageUrl: quizzAppImg,
    githubLink: "https://github.com/uwerrrr/quizzApp",
    deployLink: "",
    types: ["Full-stack", "Front-end", "Feature"],
  },
  {
    title: "Richard Le",
    description:
      "Richard Le project is a front-end website built with Next.js. I collaborated with a team of developers and designers to build key features such as landing page, animation, slideshow, SEO optimization and translation.",
    tags: ["Next.js", "TypeScript"],
    imageUrl: richardLeImg,
    githubLink: "",
    deployLink: "https://www.richardle.com.au/",
    types: ["Front-end", "Client", "Feature"],
  },
  {
    title: "Golo CRM",
    description: `Golo CRM is a full-stack CRM application built with Next.js. Collaborated with GeniusIT team to build key features such as document database, document management dashboard and landing page`,
    tags: ["Next.js", "TypeScript", "Vercel", "Turso", "drizzle"],
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
    title: "Personal portfolio website",
    description: `Within this portfolio, you will gain insights into my background, skills, and experiences. Additionally, you will have the opportunity to explore the projects I have completed. Should you wish to get in touch, please feel free to contact me via email or LinkedIn.`,
    tags: [
      "Next.js",
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
