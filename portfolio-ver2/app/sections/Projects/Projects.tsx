import React from "react";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import { projectsData } from "@/lib/data";
import Project from "./components/Project";
import ProjectList from "@/app/sections/Projects/components/ProjectList";
import FilterButtonWrapper from "@/app/sections/Projects/components/FilterButtonWrapper";

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className="flex flex-col "
      sectionName={"Projects"}
    >
      <SectionHeading className="">Projects</SectionHeading>

      <FilterButtonWrapper />
      <ProjectList />
      
    </SectionWrapper>
  );
};

export default Projects;
