import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  otherProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({ children, className, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={cn(
        "group bg-white px-7 py-2 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer ",
        "border border-black border-opacity-[0.10]",
        // "shadow ",
        className,
        {}
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
