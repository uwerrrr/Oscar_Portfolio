"use client";

import SelectedProjectTypeProvider from "@/app/context/SelectedProjectTypeProvider";
import ActiveSectionProvider from "@/app/context/ActiveSectionProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <ActiveSectionProvider>
        <SelectedProjectTypeProvider>
          {children}
        </SelectedProjectTypeProvider>
      </ActiveSectionProvider>
    </>
  );
};

export default Providers;
