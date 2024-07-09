interface ExperienceDescProps {
  desc: string;
}

const ExperienceDesc = ({ desc }: ExperienceDescProps) => {
  console.log(desc);
  const descriptionSentences = desc
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <ul className="list-disc pl-5 space-y-2">
      {descriptionSentences.map((sentence, index) => (
        <li key={index} className="text-gray-700">
          {sentence + (sentence.endsWith(".") ? "" : ".")}
        </li>
      ))}
    </ul>
  );
};

export default ExperienceDesc;
