import React from "react";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import { skillsData } from "@/lib/data";
import Skill from "./components/Skill";

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      className="flex flex-col  w-full h-fit"
      sectionName={"Skills"}
    >
      <SectionHeading className="text-center ">Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center my-auto gap-3 sm:gap-8 text-lg text-gray-800 items-center ">
        {skillsData.map((skill, index) => (
          <Skill skill={skill} i={index} key={index} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Skills;
