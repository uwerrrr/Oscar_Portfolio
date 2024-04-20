"use client";

import React, { useRef } from "react";
import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionDiv } from "@/app/components/MotionDiv";

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <MotionDiv
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 w-[90%] "
    >
      <section
        className="bg-powder-500 w-full border border-black/5 rounded-lg 
        overflow-hidden sm:min-h-[290px]  hover:bg-gray-200 transition 
        sm:flex
        p-4 
        relative
 "
      >
        {/* ======== text section ======== */}
        <div className=" sm:flex-[2] sm:grow-[2]  sm:group-even:order-1 flex justify-evenly flex-col z-20 opacity-100 relative">
          <h3 className="text-large font-semibold ">{title}</h3>
          <article className="text-sm py-2 leading-relaxed text-gray-700 dark:text-white/70  grow-[2] flex flex-col gap-3">
            {description.split("\n").map((line, i) => (
              <p key={i}>
                {line} <br />
              </p>
            ))}
          </article>
          <ul className=" flex flex-wrap m-2 my-1 gap-2 items-center">
            {tags.map((tag, index) => (
              <li
                className="bg-black sm:bg-black/[0.7] px-[10px] py-[1.5px] text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* ================ */}

        {/* ======== img section ======== */}
        <div className="absolute sm:flex-[1] sm:grow-[1] borderTest sm:relative  top-0 left-0  h-full w-full sm:h-[initial] sm:w-[initial]">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="relative sm:opacity-100 opacity-[0.2]  rounded shadow-2xl transition -bottom-[14%] w-auto min-h-[95%] h-[200px] 
            
            sm:-right-[20%]
            -right-[70%] 
            group-hover:scale-[1.04]
            group-hover:-translate-x-[10%]
            group-hover:translate-y-[10%]
            group-hover:-rotate-2

            
            sm:group-even:-left-[20%]
            group-even:-left-[70%]
            group-even:group-hover:translate-x-[10%]
            group-even:group-hover:translate-y-[10%]
            group-even:group-hover:rotate-2
 
            "
          />
        </div>
        {/* ================ */}
      </section>
    </MotionDiv>
  );
};

export default Project;
