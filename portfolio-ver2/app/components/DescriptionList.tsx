import React from "react";

interface DescriptionListProps {
  description: string;
  bulletColor?: string;
  textColor?: string;
}

const DescriptionList: React.FC<DescriptionListProps> = ({
  description,
  bulletColor = "text-gray-700",
  textColor = "text-gray-700",
}) => {
  const descriptionSentences = description
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <ul className={`list-disc pl-5 space-y-2 ${bulletColor}`}>
      {descriptionSentences.map((sentence, index) => (
        <li key={index} className={textColor}>
          {sentence.trim() + (sentence.trim().endsWith(".") ? "" : ".")}
        </li>
      ))}
    </ul>
  );
};

export default DescriptionList;
