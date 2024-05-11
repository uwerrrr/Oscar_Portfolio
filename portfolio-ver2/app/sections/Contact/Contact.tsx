import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import React from "react";
import ContactForm from "./components/ContactForm";
import SocialButton from "@/app/components/SocialButton";
import { socials } from "@/lib/data";

const Contact = () => {
  const myEmail = socials.email.url;
  return (
    <SectionWrapper id="contact" className="flex flex-col w-full ">
      {/* heading */}
      <SectionHeading className="text-center mb-3">
        <span>Contact</span>
      </SectionHeading>
      {/* body */}
      <div className="flex flex-col gap-5">
        {/* message */}
        <p className="text-center text-base font-normal normal-case">
          Please feel free to connect with me via{" "}
          <a className="underline hover:font-bold" href={`mailto:${myEmail}`}>
            {myEmail}
          </a>{" "}
          or my socials.
        </p>
        <div className="flex justify-center gap-5">
          <SocialButton social={"linkedin"} />
          <SocialButton social={"github"} />
        </div>

        {/* form */}
        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
