"use client";

import React from "react";
import Image from "next/image";
import { MotionDiv } from "../components/MotionDiv";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center ">
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
          src={"/project-imgs/sample_ava.svg"}
          alt={"avatar"}
          width={200}
          height={200}
          priority={true}
          className="w-24 h-24 border border-red-600"
        ></Image>
      </MotionDiv>
      <article className="text-center">
        <h1 className="">Hi, I'm Oscar NGUYEN.</h1>
        {/* <p className="">Welcome to my portfolio.</p> */}
        <p className="">
          A junior Full-Stack &lt;/Dev&gt; with data science background
        </p>
      </article>
    </section>
  );
};

export default Intro;
