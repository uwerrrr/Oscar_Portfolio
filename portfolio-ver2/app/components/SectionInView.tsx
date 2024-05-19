"use client";

import React, { useContext, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { SectionName } from "@/lib/types";
import { ActiveSectionContext } from "@/app/context/ActiveSectionProvider";

type InViewProps = {
  sectionName: SectionName;
};

const SectionInView = ({ sectionName }: InViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setActiveSection } = useContext(ActiveSectionContext);
  useEffect(() => {
    console.log(sectionName, " is in view: ", isInView);
    if (isInView) {
      setActiveSection(sectionName);
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="w-[1px] h-[1px] bg-orange-500 absolute m-0 left-1/2 top-1/2 border-0 p-0 overflow-hidden"
    ></div>
  );
};

export default SectionInView;
