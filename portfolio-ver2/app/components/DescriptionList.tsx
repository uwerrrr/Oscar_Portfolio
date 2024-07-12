import React from "react";

interface DescriptionListProps {
  description: string;
  bulletColor?: string;
  textColor?: string;
  isBullet?: boolean;
}

const DescriptionList: React.FC<DescriptionListProps> = ({
  description,
  bulletColor = "text-gray-700",
  textColor = "text-gray-700",
  isBullet = true,
}) => {
  const descriptionSentences = description
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <ul
      className={`${
        isBullet ? "list-disc pl-3" : "pl-0"
      } space-y-2 ${bulletColor}`}
    >
      {descriptionSentences.map((sentence, index) => (
        <li key={index} className={textColor}>
          {sentence.trim() + (sentence.trim().endsWith(".") ? "" : ".")}
        </li>
      ))}
    </ul>
  );
};

export default DescriptionList;
