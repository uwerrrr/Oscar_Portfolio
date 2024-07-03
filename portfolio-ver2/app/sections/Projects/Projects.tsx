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
      {/* <div className="mb-3">
        <ul className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <li key={type} className="">{type}</li>
          ))}
        </ul>
      </div> */}
      <FilterButtonWrapper />
      <ProjectList />
      <div className=" flex flex-col items-center">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
