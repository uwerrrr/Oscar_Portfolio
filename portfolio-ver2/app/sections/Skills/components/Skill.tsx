"use client";

import { SkillProps } from "@/lib/types";
import React from "react";
import { MotionDiv } from "@/app/components/MotionDiv";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type Props = { skill: SkillProps; i: number };

const Skill = ({ skill, i }: Props) => {
  return (
    <li className="">
      <MotionDiv
        className="bg-white borderBlack rounded-xl sm:px-5 sm:py-3 px-3 py-2 "
        // dark:bg-white/10 dark:text-white/80
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={i}
      >
        {skill}
      </MotionDiv>
    </li>
  );
};

export default Skill;
