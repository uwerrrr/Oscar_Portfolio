// "use client";

import React from "react";
import Image from "next/image";
import { MotionDiv } from "../components/MotionDiv";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className=""
      >
        <Image
          src={"/project-imgs/sample_ava_2.png"}
          alt={"avatar"}
          width={500}
          height={500}
          priority={true}
          className="w-64 h-64 border border-red-600 bg-transparent"
        ></Image>
      </MotionDiv>

      <article className="text-center">
        <h1 className="text-4xl lg:6xl">
          Hi, I'm <span className="">Oscar NGUYEN</span>.
        </h1>
        {/* <p className="">Welcome to my portfolio.</p> */}
        <p className="mt-5 text-lg">
          A junior Full-Stack &lt;/Dev&gt; with data science background.
        </p>
      </article>
    </section>
  );
};

export default Intro;
