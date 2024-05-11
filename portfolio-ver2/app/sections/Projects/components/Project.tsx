"use client";

import React, { useRef } from "react";
import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { MotionDiv } from "@/app/components/MotionDiv";
import Button from "@/app/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  deployLink,
}: ProjectProps) => {
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
      className="group mb-3 sm:mb-8 last:mb-0 w-full "
    >
      <section
        className="bg-powder-500 w-full border border-black/5 rounded-lg 
        overflow-hidden min-h-[200px] sm:min-h-[300px]  group-hover:bg-eggshell transition 
        flex
        p-4 
        relative
        gap-1
 "
      >
        {/* ======== about project section ======== */}
        <div className=" sm:flex-[2] sm:grow-[2] sm:group-even:order-1 flex justify-evenly flex-col z-20 opacity-100 relative">
          <h3 className="text-large font-semibold ">{title}</h3>
          {/* description */}
          <article className="text-base py-2 leading-relaxed text-gray-700 grow-[2] flex flex-col gap-3">
            {/* dark:text-white/70 */}
            {description.split("\n").map((line, i) => (
              <p key={i}>
                {line} <br />
              </p>
            ))}
          </article>
          {/* tech tags */}
          <ul className=" flex flex-wrap my-1 gap-2 items-center">
            {tags.map((tag, index) => (
              <li
                className=" bg-black/[0.7] px-[10px] py-[1.5px] text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {/* buttons */}
          <hr className="bg-powder-400 py-[0.5px] w-full mx-auto group-hover:bg-uranian " />
          <div className="flex gap-3 justify-start items-center ">
            <Button className="p-1 text-txt_primary-500 hover:text-[rgb(102,42,140)] bg-transparent border-none">
              <a href={githubLink} target="_blank">
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  size="2xl"
                  className="max-h-[33px] p-0"
                />
              </a>
            </Button>
            <Button className="p-1 text-txt_primary-500 hover:text-azul bg-transparent border-none">
              <a href={deployLink} target="_blank">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  size="2xl"
                  className="max-h-[33px] p-0"
                />
              </a>
            </Button>
          </div>
        </div>
        {/* ================ */}

        {/* ======== img section ======== */}
        <div className="absolute sm:flex-[1] sm:grow-[1]  sm:relative  top-0 left-0  h-full w-full sm:h-[initial] sm:w-[initial] flex justify-end group-even:justify-start">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute sm:opacity-100 opacity-[0.17] rounded shadow-2xl transition 
            
            top-[12%] w-auto h-full min-h-[130%] 
            sm:top-[-0%] sm:h-auto sm:min-w-[130%] 

            left-[70%]
            group-even:right-[70%]
            group-even:left-[initial]
            sm:left-[10%]
            sm:group-even:right-[10%]

            group-hover:scale-[1.04]
  
            group-hover:-translate-x-[4%]
            group-hover:translate-y-[4%]
            group-hover:-rotate-2

            group-even:group-hover:translate-x-[4%]
            group-even:group-hover:translate-y-[4%]
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
