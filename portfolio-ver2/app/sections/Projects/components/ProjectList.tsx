"use client";

import React, { useContext, useMemo } from "react";
import Project from "@/app/sections/Projects/components/Project";
import { projectsData } from "@/lib/data";
import { SelectedProjectTypeContext } from "@/app/context/SelectedProjectTypeProvider";
import { ProjectProps } from "@/lib/types";
import { ProjectType } from "@/lib/types";


const ProjectList = () => {
  const { selectedType } = useContext(SelectedProjectTypeContext);

  const filteredProjects = useMemo(() => {
    if (selectedType === "All") {
      return projectsData;
    } else {
      return projectsData.reduce((acc, curr) => {
        const isTypeExist = curr.types.some((type) => type === selectedType);
        if (isTypeExist) {
          acc.push(curr);
        }
        return acc;
      }, [] as ProjectProps[]);
    }
  }, [selectedType]);

  return (
    <div className=" flex flex-col items-center">
      {filteredProjects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  );
};

export default ProjectList;
