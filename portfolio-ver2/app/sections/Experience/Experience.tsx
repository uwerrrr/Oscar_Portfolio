import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import { experiencesData } from "@/lib/data";

const Experience = () => {


  return (
    <SectionWrapper
      id="contact"
      className="flex flex-col w-full "
      sectionName={"Experience"}
    >
      {/* heading */}
      <SectionHeading className="text-center mb-3">
        <span>Experience</span>
      </SectionHeading>
      {/* body */}
      <VerticalTimeline lineColor=""></VerticalTimeline>
    </SectionWrapper>
  );
};

export default Experience;
