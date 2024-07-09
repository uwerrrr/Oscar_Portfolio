import React from "react";
import { ExperienceProps } from "@/lib/types";

interface ExperienceItemProps {
  experience: ExperienceProps;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  // Description sentences
  const descriptionSentences = experience.description.split('. ').filter(sentence => sentence.trim() !== '');

  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-semibold">{experience.title}</h3>
      </div>
      <p className="text-gray-600 mb-2">
        {experience.location} | {experience.date}
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {descriptionSentences.map((sentence, index) => (
          <li key={index} className="text-gray-700">
            {sentence + (sentence.endsWith(".") ? "" : ".")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
