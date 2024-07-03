import React from "react";
import { projectsData } from "@/lib/data";
import FilterButton from "@/app/sections/Projects/components/FilterButton";
import { ProjectType } from "@/lib/types";

const FilterButtonWrapper = () => {
  const projectTypes: ProjectType[] = [
    "All",
    ...Array.from(new Set(projectsData.flatMap((project) => project.types))),
  ];

  return (
    <ul className="flex flex-wrap w-full justify-left gap-5 mb-5">
      {projectTypes.map((type) => (
        <li key={type}>
          <FilterButton buttonProjectType={type} />
        </li>
      ))}
    </ul>
  );
};

export default FilterButtonWrapper;
