"use client";

import ActiveSectionProvider from "./ActiveSectionProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </>
  );
};

export default Providers;
