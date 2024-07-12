import React from "react";

import SectionHeading from "@/app/components/SectionHeading";
import { MotionDiv } from "@/app/components/MotionDiv";
import SectionWrapper from "@/app/components/SectionWrapper";
import { cn } from "@/lib/utils";

const HighlightText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <span className={cn(className, `px-1 py-0 rounded`)}>{text}</span>;
};

const HobbyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="italic hover:rounded underline decoration-coral-500 hover:bg-uranian"
  >
    {children}
  </a>
);

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

        <article className="grow text-justify text-base flex flex-col justify-evenly gap-10">
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
            {["ERP Consultant", "Data Scientist", "Software Engineer"].map(
              (role, i, arr) => (
                <>
                  <HighlightText
                    key={role}
                    text={role}
                    className="bg-uranian"
                  />
                  {i < arr.length - 1 ? ", " : ". "}
                </>
              )
            )}
            This blend has equipped me with a versatile toolkit: web
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
            <HobbyLink href="https://www.icloud.com/sharedalbum/#B1159UlCqCREDh">
              camera
            </HobbyLink>{" "}
            or unwinding at home with my cats,{" "}
            <HobbyLink href="https://www.icloud.com/sharedalbum/#B115yeZFhmnKdA">
              Simba and Pumpkin
            </HobbyLink>
            .
          </p>
          <p className="">
            Got an exciting project in mind? Let&apos;s connect and see what we
            can create together!
          </p>
        </article>
      </MotionDiv>
    </SectionWrapper>
  );
}
