import { links, projectsData } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type SectionHash = (typeof links)[number]["hash"];

export type ProjectProps = (typeof projectsData)[number];
