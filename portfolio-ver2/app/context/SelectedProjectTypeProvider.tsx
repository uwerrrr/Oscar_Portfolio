import { createContext, useState } from "react";
import { ProjectTypeWithAll } from "@/lib/types";
import { DEFAULT_PROJECT_TYPE } from "@/lib/data";

// ========================================
// Context
// ========================================
interface SelectedProjectTypeContextProps {
  selectedType: ProjectTypeWithAll;
  setSelectedType: React.Dispatch<React.SetStateAction<ProjectTypeWithAll>>;
}

export const SelectedProjectTypeContext =
  createContext<SelectedProjectTypeContextProps>({
    selectedType: DEFAULT_PROJECT_TYPE,
    setSelectedType: () => {},
  });

// ========================================
// Provider
// ========================================
interface SelectedProjectTypeProviderProps {
  children: React.ReactNode;
}

const SelectedProjectTypeProvider = ({
  children,
}: SelectedProjectTypeProviderProps) => {
  const [selectedType, setSelectedType] =
    useState<ProjectTypeWithAll>(DEFAULT_PROJECT_TYPE);

  return (
    <SelectedProjectTypeContext.Provider
      value={{ selectedType, setSelectedType }}
    >
      {children}
    </SelectedProjectTypeContext.Provider>
  );
};

export default SelectedProjectTypeProvider;
