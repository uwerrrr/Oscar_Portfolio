import React from "react";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import EduTimeline from "@/app/sections/Education/components/EduTimeline";

const Education = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col w-full mb-8"
      sectionName={"Education"}
    >
      {/* heading */}
      <SectionHeading className="text-center mb-3">
        <span>Education</span>
      </SectionHeading>

      {/* body */}
      <EduTimeline />
    </SectionWrapper>
  );
};

export default Education;
