import Button from "@/app/components/Button";
import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import React from "react";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="flex flex-col w-full ">
      <SectionHeading className="text-center ">Contact</SectionHeading>
      <form
        action=""
        className="mx-auto flex flex-col gap-4 w-[min(100%,38rem)]"
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          maxLength={500}
          placeholder="Your email"
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          className="h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          id="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <Button className="" type="submit">
          Submit
        </Button>
      </form>
    </SectionWrapper>
  );
};

export default Contact;
