import { cn } from "@/lib/utils";
import React from "react";
import SectionInView from "./SectionInView";
import { SectionName } from "@/lib/types";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: any;
  otherProps?: React.HTMLAttributes<HTMLElement>;
  sectionName: SectionName;
};

export default function SectionWrapper({
  children,
  className,
  id,
  ref,
  sectionName,
  ...otherProps
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        // min-h-[70vh]
        "scroll-mt-28 sm:max-w-[800px] min-h-fit",
        "relative",
        className,
        {}
      )}
      id={id}
      ref={ref}
      {...otherProps}
    >
      <SectionInView sectionName={sectionName} />
      {children}
    </section>
  );
}
