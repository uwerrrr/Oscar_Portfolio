"use client";

import { MotionDiv } from "@/app/components/MotionDiv";
import React, { useContext } from "react";
import { links } from "@/lib/data";
import { SectionName } from "@/lib/types";
import { ActiveSectionContext } from "@/app/context/ActiveSectionProvider";

type NavLinkProps = {
  sectionName: SectionName;
};

const NavLink = ({ sectionName }: NavLinkProps) => {
  const { activeSection } = useContext(ActiveSectionContext);
  
  return (
    <>
      {activeSection === sectionName ? (
        <MotionDiv
          className=" bg-gray-200 rounded-full sm:px-4 py-1.5 sm:py-[3px] px-[25px] text-txt_primary-800 font-medium  "
          layoutId="activeSection"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {sectionName}
        </MotionDiv>
      ) : (
        sectionName
      )}
    </>
  );
};

export default NavLink;
