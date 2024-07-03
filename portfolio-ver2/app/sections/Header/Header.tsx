import { links } from "@/lib/data";
import { MotionDiv } from "../../components/MotionDiv";
import LinkToSection from "@/app/components/LinkToSection";
import NavLink from "@/app/sections/Header/components/NavLink";

const Header = () => {
  return (
    <header className="z-[999] relative h-28 sm:h-32 w-full">
      <div className="relative h-full w-full flex justify-center sm:top-6 ">
        <MotionDiv
          className=" flex justify-center items-center fixed w-full "
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <nav className="bg-white bg-opacity-75 flex border border-white border-opacity-40 sm:w-3/4 w-full shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] justify-center sm:rounded-full sm:max-w-[500px] ">
            <ul className="flex sm:justify-around mx-2 my-[7px] sm:my-[4px] gap-2 w-full items-center justify-evenly flex-wrap ">
              {links.map((link) => (
                <li
                  key={link.hash}
                  className=" flex items-center justify-center relative "
                >
                  <LinkToSection
                    toSection={link.name}
                    className="flex w-full items-center justify-center text-txt_second-500 hover:text-gray-950 transition "
                  >
                    <NavLink sectionName={link.name} />
                  </LinkToSection>
                </li>
              ))}
            </ul>
          </nav>
        </MotionDiv>
      </div>
    </header>
  );
};

export default Header;
