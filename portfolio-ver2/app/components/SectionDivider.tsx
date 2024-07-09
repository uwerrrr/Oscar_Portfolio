import React from "react";
import { MotionDiv } from "./MotionDiv";

export default function SectionDivider() {
  return (
    <MotionDiv
      className="bg-gray-300 my-[45px] h-[77px] w-1 rounded-full sm:block  "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></MotionDiv>
  );
}
