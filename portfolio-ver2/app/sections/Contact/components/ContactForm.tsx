import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/app/components/Button";
import { sendEmail } from "@/app/actions/sendEmail";

const ContactForm = () => {
  return (
    <form
      action={sendEmail}
      className="mx-auto flex flex-col gap-4 w-[min(100%,38rem)]"
    >
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="h-14 px-4 rounded-lg borderBlack 
         transition-all"
        maxLength={500}
        placeholder="Your email"
      />
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        // className="h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        className="h-52 rounded-lg borderBlack p-4 transition-all dark:outline-none"
        name="message"
        id="message"
        placeholder="Your message"
        required
        maxLength={5000}
      />
      <Button
        className="max-w-fit bg-ucla-500 text-white hover:bg-ucla-800 font-medium"
        type="submit"
      >
        Submit
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 opacity-90 text-sm "
        />
      </Button>
    </form>
  );
};

export default ContactForm;
