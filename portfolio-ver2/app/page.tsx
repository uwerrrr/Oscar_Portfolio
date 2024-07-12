import SectionDivider from "./components/SectionDivider";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Intro from "./sections/Intro/Intro";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <div className="min-h-[90vh] flex flex-col justify-center top-5 ">
        <div className="justify-center items-center flex flex-[3]">
          <Intro />
        </div>
        <div className="flex flex-col items-center justify-center flex-[1] ">
          <SectionDivider />
        </div>
      </div>
      <About />
      <SectionDivider />
      <Experience />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <Contact />
    </main>
  );
}
