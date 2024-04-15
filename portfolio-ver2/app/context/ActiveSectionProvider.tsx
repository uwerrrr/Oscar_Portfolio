import { createContext, useState } from "react";
import { SectionName } from "@/lib/types";

// ========================================
// Context
// ========================================
interface ActiveSectionContextProps {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

// ========================================
// Provider
// ========================================
interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
