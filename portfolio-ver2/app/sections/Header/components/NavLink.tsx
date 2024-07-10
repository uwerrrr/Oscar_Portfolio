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
          className=" bg-gray-200 rounded-full px-[7px] py-[2px] sm:px-4 sm:py-[3px]  text-txt_primary-800 font-medium  "
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
        <span className="px-[7px] py-[2px] sm:px-0 sm:py-0">{`${sectionName}`}</span>
      )}
    </>
  );
};

export default NavLink;
