"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Header = () => {
  const activeSection = links[0].name;
  return (
    <header className="z-[999] relative">
      {/* <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-txt_second sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-txt_primary transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav> */}
      <motion.div
        className="w-full  flex justify-center items-center mt-4 fixed"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="bg-white bg-opacity-75 flex border border-white border-opacity-40 sm:w-3/4 w-full shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] justify-center sm:rounded-full sm:max-w-[500px]">
          <ul className="flex sm:justify-around mx-2 gap-2 w-full items-center justify-evenly flex-wrap">
            {links.map((link) => (
              <li
                key={link.hash}
                className=" flex items-center justify-center relative "
              >
                <Link
                  href={link.hash}
                  className="flex w-full items-center justify-center text-txt_second hover:text-gray-950 transition "
                >
                  {activeSection === link.name ? (
                    <motion.span
                      className=" bg-gray-100 rounded-full py-1.5 px-2 text-txt_primary"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      {link.name}
                    </motion.span>
                  ) : (
                    link.name
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
