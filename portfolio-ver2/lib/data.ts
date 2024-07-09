import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import sampleImg from "@/public/project-imgs/sample.png";
import morseImg from "@/public/project-imgs/morse_code.png";
import employeeCreatorImg from "@/public/project-imgs/employee_creator.jpeg";
import textProjectImg from "@/public/project-imgs/text_major.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "ERP Application Consultant",
    location: "Ho Chi Minh City, Vietnam",
    description: `Worked in a team of 5 to deploy an ERP project for a major shoe manufacturing corporation in Vietnam, including the installation of ERP and database environments on the client’s server.
Engaged directly with client’s CFO to collect and analyse requirements, proposed ERP processes for the Finance
module, and developed functional processes in accordance with Vietnamese Accounting Standards.
Conducted user acceptance testing (UAT) phase, which included 5+ end-user training sessions and a detailed 10-
page user guideline.
Proposed client-tailored solutions to overcome system limitation, utilising Excel Macro.
Conducted 2 product pitching using Microsoft PowerBI.`,
    icon: faBriefcase,
    date: "Feb 2016 - Feb 2017",
  },
  {
    title: "Data Scientist Intern",
    location: "Sydney, NSW",
    description: `Utilised Python and Mediapipe library to extend Truuth facekey biometrics from 128 to 468 3D face coordinates,
enhancing the scope of potential facial verification tests.
Compiled 4 comprehensive documents outlining current implementations and potential future developments on
internal Confluence platform.
Contributed to a team of 5 in Scrum Agile environment to create a new app UX demo.
Worked closely with a senior data scientist to boost the accuracy of Truuth MVP1 liveness fusion model, which was
based on Mediapipe solution, from 65% to 75%.`,
    icon: faBriefcase,
    date: "Feb 2021 - Jun 2021",
  },
  {
    title: "Full-Stack Software Engineer Trainee",
    location: "Sydney, NSW",
    description: `Completed an intensive 12-week training program on full-stack website development. Deployed 5+ projects using React with Javascript and Typescript, Java and MySQL. Coordinated with 2 senior software engineers on backend development for a client project, which involved a student
metrics application using NestJS and Typescript. Enhanced CI/CD pipeline with Playwright end-to-end testing framework. Enriched data viewing requests by implementing 2 new HTTP requests using the MySQL virtual entities method.`,
    icon: faLaptopCode,
    date: "May 2023 - Oct 2023",
  },
  {
    title: "Full-Stack Software Engineer Intern",
    location: "Sydney, NSW",
    description: `Contributed to the development of a customer relationship management (CRM) Web Application project. Developed 3 pivotal features, including comprehensive unit testing functions, for a full-stack application built with
NextJS, TypeScript, TailwindCSS, Drizzle ORM, Turso database and Stripe, ensuring robust functionality and
adherence to best practices. Conducted comprehensive requirement gathering sessions with key stakeholders, including product managers and
end-users, to capture and prioritize 10+ functional and non-functional requirements for a web project. Design system process flow with UML flowcharts to visualize complex processes, enabling cross-team alignment.`,
    icon: faBriefcase,
    date: "Mar 2024 - Jun 2024",
  },
] as const;

export const projectsData = [
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
    types: ["Full-stack", "Front-end"],
  },
  {
    title: "Text major project",
    description: `The main task of the this project is to build and compare predictive models which are to predict `,
    tags: ["Python", "ipynb", "NLP", "Machine Learning"],
    imageUrl: textProjectImg,
    githubLink: "https://github.com/uwerrrr/text_major_project",
    deployLink:
      "https://colab.research.google.com/drive/1N9Iy4mfvcwihaAXFYW5lri77VR2bipM7#scrollTo=Pwq6jYZIrGgU",
    types: ["Data"],
  },
  {
    title: "Morse Code translator",
    description: `A simple translator between Latin characters and Morse code (both ways).\n Demonstrating error handling and writing tests.`,
    tags: ["HTML", "SCSS", "JavaScript", "TDD"],
    imageUrl: morseImg,
    githubLink: "https://github.com/uwerrrr/morseCodeTranslator",
    deployLink: "https://oscar-morsecode.netlify.app/",
    types: ["Front-end"],
  },
] as const;

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
] as const;

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
