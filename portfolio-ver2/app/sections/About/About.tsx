import React from "react";

import SectionHeading from "@/app/components/SectionHeading";
import { MotionDiv } from "@/app/components/MotionDiv";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="flex flex-col ">
      <MotionDiv
        className="flex-1 flex flex-col   h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading className="">About me</SectionHeading>

        <article className="grow text-justify flex flex-col justify-evenly">
          <p className="mb-3">
            [After graduating with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue
            my passion for programming. I enrolled in a coding bootcamp and
            learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking
            to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a
            software developer.
          </p>

          <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, and playing with my dog. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am
            currently learning about{" "}
            <span className="font-medium">history and philosophy</span>. I'm
            also learning how to play the guitar.]
          </p>
        </article>
      </MotionDiv>
    </SectionWrapper>
  );
}
