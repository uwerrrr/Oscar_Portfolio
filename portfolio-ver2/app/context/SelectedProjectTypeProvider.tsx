import { createContext, useState } from "react";
import { ProjectType } from "@/lib/types";

// ========================================
// Constants
// ========================================
const DEFAULT_TYPE: ProjectType = "All";

// ========================================
// Context
// ========================================
interface SelectedProjectTypeContextProps {
  selectedType: ProjectType;
  setSelectedType: React.Dispatch<React.SetStateAction<ProjectType>>;
}

export const SelectedProjectTypeContext =
  createContext<SelectedProjectTypeContextProps>({
    selectedType: DEFAULT_TYPE,
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
  const [selectedType, setSelectedType] = useState<ProjectType>(DEFAULT_TYPE);

  return (
    <SelectedProjectTypeContext.Provider
      value={{ selectedType, setSelectedType }}
    >
      {children}
    </SelectedProjectTypeContext.Provider>
  );
};

export default SelectedProjectTypeProvider;
