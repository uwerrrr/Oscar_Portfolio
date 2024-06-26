import { links, projectsData, skillsData } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type SectionHash = (typeof links)[number]["hash"];

export type ProjectProps = (typeof projectsData)[number];
export type SkillProps = (typeof skillsData)[number];

export type ProjectTypes = (typeof projectsData)[number]["type"];
