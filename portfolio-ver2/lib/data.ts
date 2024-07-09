import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const Intro = [
//   {
//     title:
//       "Welcome to my portfolio a Full-Stack &lt;/Dev&gt; with a data-driven mindset",
//   },
//   { subTitle: "" },
// ];

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

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
