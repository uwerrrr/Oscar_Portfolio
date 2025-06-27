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

  /**
  * This regular expression splits the string on a period '.' character.
  * It uses a "negative lookahead" (?!) to ensure the period is NOT immediately followed by 'NET' or 'Net'.
  */
  const regex = /\.(?!NET|Net)/;

  const descriptionSentences = description
    .split(regex)
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0);
console.log("descriptionSentences: ", descriptionSentences)
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
