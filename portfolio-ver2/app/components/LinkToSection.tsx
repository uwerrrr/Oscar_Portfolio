"use client";

import Link from "next/link";
import { ActiveSectionContext } from "@/app/context/ActiveSectionProvider";
import { useContext } from "react";
import { SectionName } from "@/lib/types";
import { cn } from "@/lib/utils";

interface LinkToSectionProps {
  // children: React.ReactNode;
  toSection: SectionName;
  label: string;
  className?: string;
}

const LinkToSection = ({
  // children,
  toSection,
  label,
  className,
}: LinkToSectionProps) => {
  const { setActiveSection } = useContext(ActiveSectionContext);

  return (
    <Link
      href={toSection}
      className={cn("", className)}
      onClick={() => {
        setActiveSection(toSection);
      }}
    >
      {label}
    </Link>
  );
};

export default LinkToSection;
