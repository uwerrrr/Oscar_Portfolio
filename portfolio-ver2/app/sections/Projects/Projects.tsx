import React from "react";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import { projectsData } from "@/lib/data";
import Project from "./components/Project";

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className="flex flex-col "
      sectionName={"Projects"}
    >
      <SectionHeading className="">Projects</SectionHeading>
      <section className="flex gap-2">
        <div className="grow-1">menu</div>
        <div className="grow-2 flex flex-col items-center">
          {projectsData.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Projects;
