import React from "react";
import { cn } from "@/lib/utils";

interface DescriptionListProps {
  description: string;
  bulletColor?: string;
  textColor?: string;
  isBullet?: boolean;
  isJustify?: boolean;
}

const DescriptionList: React.FC<DescriptionListProps> = ({
  description,
  bulletColor = "text-gray-700",
  textColor = "text-gray-700",
  isBullet = true,
  isJustify = false,
}) => {
  const descriptionSentences = description
    .split(/(?<!\.NET)\./) // Splits on "." only if not preceded by ".NET"
    .filter((sentence) => sentence.trim() !== "");

  return (
    <ul
      className={`${
        isBullet ? "list-disc pl-3" : "pl-0"
      } space-y-2 ${bulletColor}`}
    >
      {descriptionSentences.map((sentence, index) => (
        <li
          key={index}
          className={cn(textColor, isJustify ? "text-justify" : "")}
        >
          {sentence.trim() + (sentence.trim().endsWith(".") ? "" : ".")}
        </li>
      ))}
    </ul>
  );
};

export default DescriptionList;
