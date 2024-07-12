import { createContext, useState } from "react";
import { SectionName } from "@/lib/types";

// ========================================
// Constants
// ========================================
const DEFAULT_SECTION: SectionName = "Home";

// ========================================
// Context
// ========================================
interface ActiveSectionContextProps {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextProps>({
  activeSection: DEFAULT_SECTION,
  setActiveSection: () => {},
});

// ========================================
// Provider
// ========================================
interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] =
    useState<SectionName>(DEFAULT_SECTION);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
