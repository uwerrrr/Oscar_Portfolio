import React, { useContext } from "react";
import Image from "next/image";
import { MotionDiv } from "../../components/MotionDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import LinkToSection from "../../components/LinkToSection";
import Button from "@/app/components/Button";
import SectionWrapper from "@/app/components/SectionWrapper";
import avaImg from "@/public/ava.png";
import SocialButton from "@/app/components/SocialButton";

const Intro = () => {
  return (
    <SectionWrapper
      className={`flex flex-col justify-center items-center gap-4  `}
      id="home"
      sectionName={"Home"}
    >
      {/* ====== Picture ======*/}
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
          src={avaImg}
          alt={"avatar"}
          width={500}
          height={500}
          priority={true}
          className="w-64 h-64 bg-transparent"
        ></Image>
      </MotionDiv>
      {/* ==================== */}
      {/* ====== Intro message ======*/}
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <article className="text-center text-lg  flex flex-col gap-5">
          <h1 className="text-4xl lg:6xl">
            {`Hi, I'm`} <span className="">Oscar NGUYEN</span>.
          </h1>
          <p className="">Welcome to my portfolio 👋.</p>
          <p className="">
            A{" "}
            <span className="font-semibold text-orange-400"> Full-Stack </span>
            &lt;/Dev&gt; with
            <span className="font-semibold text-orange-400"> .NET </span>
            and
            <span className="font-semibold text-orange-400">
              {" "}
              data science{" "}
            </span>
            background.
          </p>
        </article>
      </MotionDiv>
      {/* ==================== */}

      {/* ====== Buttons ======*/}
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-col gap-y-3 sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium">
          <Button className="bg-ucla-500 text-white hover:bg-ucla-800">
            <LinkToSection toSection={"Contact"}>{`Let's talk`}</LinkToSection>
          </Button>
          <Button className="">
            <a href="/OscarNguyen.Resume.pdf" download="OscarNguyen.Resume.pdf">
              Download CV
            </a>
          </Button>
          <div className="flex gap-5  sm:flex-row ">
            <SocialButton social={"linkedin"} />
            <SocialButton social={"github"} />
            <SocialButton social={"email"} />
          </div>
        </div>
      </MotionDiv>
      {/* ==================== */}
    </SectionWrapper>
  );
};

export default Intro;
