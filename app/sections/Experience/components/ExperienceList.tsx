"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import DescriptionList from "@/app/components/DescriptionList";

const ExperienceList = () => {
  const theme = "light";

  return (
    <VerticalTimeline lineColor="#d1d5db" className=" !w-full">
      {experiencesData.map((experienceItem, index) => (
        // <ExperienceItem experience={experienceItem} key={index} />

        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",

              padding: "1.3rem 2rem",
            }}
            // contentArrowStyle={{
            //   borderRight:
            //     theme === "light"
            //       ? "0.4rem solid #9ca3af"
            //       : "0.4rem solid rgba(255, 255, 255, 0.5)",
            // }}
            date={experienceItem.date}
            dateClassName="!px-2"
            icon={<FontAwesomeIcon icon={experienceItem.icon} size="2xs" />}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              // fontSize: "1.5rem",
            }}
            iconClassName={"!font-semibold"}
          >
            <h3 className="font-semibold capitalize">{experienceItem.title}</h3>
            <p className="font-normal !mt-0 text-txt_second-500">
              {experienceItem.location}
            </p>
            <div className="!mt-1 !font-normal text-gray-800 text-sm">
              <DescriptionList
                description={experienceItem.description}
                isJustify={true}
              />
            </div>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceList;
