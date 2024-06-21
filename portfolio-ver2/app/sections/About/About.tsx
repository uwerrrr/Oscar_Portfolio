import React from "react";

import SectionHeading from "@/app/components/SectionHeading";
import { MotionDiv } from "@/app/components/MotionDiv";
import SectionWrapper from "@/app/components/SectionWrapper";
import SectionInView from "@/app/components/SectionInView";

export default function About() {
  return (
    <SectionWrapper id="about" className=" " sectionName="About">
      <MotionDiv
        className="flex-1 flex flex-col h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading className="">About me</SectionHeading>

        <article className="grow text-justify text-lg flex flex-col justify-evenly gap-10">
          <p className="">
            I&apos;m a tech enthusiast living in Sydney, proudly Saigonese at
            heart.
          </p>
          <p className=" font-semibold">
            🔥 My passion lies in using innovative solutions to solve business
            problems, enhance business processes and create engaging user
            experiences.
          </p>
          <p className="">
            My journey includes studies in Business Information Systems and Data
            Science, plus hands-on roles as an{" "}
            <span className="font-semibold px-1 rounded bg-uranian">
              ERP Consultant
            </span>
            ,{" "}
            <span className="font-semibold px-1 rounded bg-uranian">
              Data Scientist
            </span>
            , and{" "}
            <span className="font-semibold px-1 rounded bg-uranian">
              Software Engineer
            </span>
            . This blend has equipped me with a versatile toolkit: web
            development, machine learning, data analysis, and business tech
            planning.
          </p>
          <p>
            I&apos;m on the lookout for new Software Engineering opportunities
            where I can apply my full-stack skills to craft software that&apos;s
            both functional and visually appealing. Problem-solving,
            adaptability, teamwork, and documentation are my strong suits.
            Driven by a thirst for knowledge, I&apos;m always eager to expand my
            tech skills to create more meaningful solutions.
          </p>
          <p className="">
            Outside of work, you&apos;ll find me exploring city streets with my{" "}
            <a
              href="https://www.icloud.com/sharedalbum/#B1159UlCqCREDh"
              target="_blank"
              className="bg-ucla-200/80 rounded px-1 hover:underline hover:decoration-coral-500 hover:text-ucla-200/80 hover:bg-txt_primary-500"
            >
              camera
            </a>{" "}
            or unwinding at home with my cats,{" "}
            <a
              href="https://www.icloud.com/sharedalbum/#B115yeZFhmnKdA"
              target="_blank"
              className="bg-ucla-200/80 rounded px-1 hover:underline hover:decoration-coral-500 hover:text-ucla-200/80 hover:bg-txt_primary-500"
            >
              Simba and Pumpkin
            </a>
            .
          </p>
          <p className="">
            Got an exciting project in mind? Let&apos;s connect and see what we
            can create together!
          </p>
          {/* <p className="">
            {`I'm proud to be a Sydneysider, but I'm a Saigonese at heart. As a
            technology and data enthusiast, I have a genuine passion for
            utilizing technologies to enhance business activities. With a
            background in Machine Learning and ICT Business Analysis, and now
            equipped with full-stack development skills, I am eager to build
            technical solutions for any business challenges.`}
          </p>

          <p className="">
            Also an amateur
            <a
              href="https://www.icloud.com/sharedalbum/#B1159UlCqCREDh"
              className="link"
              target="_blank"
            >
              <span className="link link__hidden-album">photographer</span>
            </a>
            .
          </p>
          <p className="">
            And a cat lover too!
            <a
              href="https://www.icloud.com/sharedalbum/#B115yeZFhmnKdA"
              className="link"
              target="_blank"
            >
              <span className="link link__hidden-album">Simba & Pumpkin</span>
            </a>
            .
          </p> */}
          {/* <p className="mb-3">
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
          </p> */}
        </article>
      </MotionDiv>
    </SectionWrapper>
  );
}
