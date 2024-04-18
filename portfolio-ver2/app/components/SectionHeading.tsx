import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  otherProps?: React.HTMLProps<HTMLHeadingElement>;
};

export default function SectionHeading({
  children,
  className,
  ...otherProps
}: SectionHeadingProps) {
  return (
    <h2
      className={cn("text-3xl font-medium capitalize mb-8", className, {})}
      {...otherProps}
    >
      {children}
    </h2>
  );
}
