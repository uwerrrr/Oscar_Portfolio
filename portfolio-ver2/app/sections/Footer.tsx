import React from "react";

const Footer = () => {
  return (
    <div className="h-48 flex flex-col justify-center items-center text-center text-txt_second-500 font-light text-xs gap-2">
      <p>© {new Date().getFullYear()} Oscar NGUYEN. All rights reserved. </p>
      <p>
        About this website: built with React & Next.js (App Router & Server
        Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend,
        Vercel hosting.
      </p>
    </div>
  );
};

export default Footer;
