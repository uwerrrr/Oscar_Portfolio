import React from "react";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import { projectsData } from "@/lib/data";
import Project from "./components/Project";

const Projects = () => {
  const projectTypes = projectsData.reduce(
    (acc, curr) => {
      acc = Array.from(new Set([...acc, ...curr.type]));
      return acc;
    },
    ["All"] as string[]
  );

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
      <div className=" flex flex-col items-center">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
