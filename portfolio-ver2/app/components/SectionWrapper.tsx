import { cn } from "@/lib/utils";
import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: any;
  otherProps?: React.HTMLAttributes<HTMLElement>;
};

export default function SectionWrapper({
  children,
  className,
  id,
  ref,
  ...otherProps
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        // min-h-[70vh]
        "scroll-mt-28 sm:max-w-[800px] min-h-fit",
        className,
        {}
      )}
      id={id}
      ref={ref}
      {...otherProps}
    >
      {children}
    </section>
  );
}
