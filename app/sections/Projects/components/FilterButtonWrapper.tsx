import React from "react";
import { projectsData, DEFAULT_PROJECT_TYPE } from "@/lib/data";
import FilterButton from "@/app/sections/Projects/components/FilterButton";
import { ProjectTypeWithAll } from "@/lib/types";

const FilterButtonWrapper = () => {
  
  // Array of project types added "All"
  const projectTypes: ProjectTypeWithAll[] = React.useMemo(() => {
    const allTypes = projectsData.flatMap((project) =>
      project.types.filter((type) => type !== DEFAULT_PROJECT_TYPE)
    );
    return [DEFAULT_PROJECT_TYPE, ...Array.from(new Set(allTypes)), "All"];
  }, []);

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
