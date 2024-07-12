import { links, projectsData, skillsData, experiencesData } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type SectionHash = (typeof links)[number]["hash"];

export type ProjectProps = (typeof projectsData)[number];
export type SkillProps = (typeof skillsData)[number];
export type ExperienceProps = (typeof experiencesData)[number];

export type ProjectType =
  | "Feature"
  | "Full-stack"
  | "Client"
  | "Front-end"
  | "Data"
  | "Back-end";

export type ProjectTypeWithAll = ProjectType | "All";

