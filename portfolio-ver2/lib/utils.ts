// export const validateString = (
//   value: unknown,
//   maxLength: number
// ): value is string => {
//   if (!value || typeof value !== "string" || value.length > maxLength) {
//     return false;
//   }

//   return true;
// };

// export const getErrorMessage = (error: unknown): string => {
//   let message: string;

//   if (error instanceof Error) {
//     message = error.message;
//   } else if (error && typeof error === "object" && "message" in error) {
//     message = String(error.message);
//   } else if (typeof error === "string") {
//     message = error;
//   } else {
//     message = "Something went wrong";
//   }

//   return message;
// };

import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

/**
 * This function is a utility for handling Tailwind CSS class names in a React component.
 *
 * @param {ClassValue[]} inputs - An array of class values. 
 * ClassValue is a type that can represent
 a CSS class in various formats (string, array, object, etc.).
 *
 * @returns {void} The function returns a string of class names.
 * It merges the class values using clsx and twMerge.
 * clsx is a utility for constructing className strings conditionally. 
 * twMerge is a utility for merging Tailwind CSS class names.
 *
 **/
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
