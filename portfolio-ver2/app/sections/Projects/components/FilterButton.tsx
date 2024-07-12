"use client";

import React from "react";
import { ProjectTypeWithAll } from "@/lib/types";
import { SelectedProjectTypeContext } from "@/app/context/SelectedProjectTypeProvider";
import { useContext } from "react";
import Button from "@/app/components/Button";

interface FilterButtonProps {
  buttonProjectType: ProjectTypeWithAll;
}

const FilterButton = ({ buttonProjectType }: FilterButtonProps) => {
  const { setSelectedType, selectedType } = useContext(
    SelectedProjectTypeContext
  );

  return (
    <Button
      onClick={() => setSelectedType(buttonProjectType)}
      className={`h-7 w-fit px-4
        ${
          selectedType === buttonProjectType
            ? "bg-ucla-300 font-base"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }
      `}
    >
      {buttonProjectType}
    </Button>
  );
};

export default FilterButton;
