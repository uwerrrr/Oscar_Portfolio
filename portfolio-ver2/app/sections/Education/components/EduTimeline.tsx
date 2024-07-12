"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { eduData } from "@/lib/data";
import Image from "next/image";
import DescriptionList from "@/app/components/DescriptionList";

const EduTimeline = () => {
  return (
    <VerticalTimeline lineColor="#d1d5db" className=" !w-full">
      {eduData.map((edu, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              padding: "1.3rem 2rem",
            }}
            visible={true}
            date={edu.date}
            dateClassName="!px-2"
            icon={
              <Image
                src={edu.logo}
                alt={edu.place}
                className="rounded-full "
              ></Image>
            }
            iconClassName={"!font-semibold bg-white"}
          >
            <h3 className="font-semibold capitalize">{edu.degree}</h3>
            <p className="font-normal !mt-0">{edu.place}</p>
            <div className="!mt-1 !font-normal text-gray-800 text-sm">
              <DescriptionList description={edu.description} />
            </div>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
};
export default EduTimeline;
