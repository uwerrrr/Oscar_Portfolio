import SectionHeading from "@/app/components/SectionHeading";
import SectionWrapper from "@/app/components/SectionWrapper";
import ExperienceList from "@/app/sections/Experience/components/ExperienceList";

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col w-full "
      sectionName={"Experience"}
    >
      {/* heading */}
      <SectionHeading className="text-center mb-3">
        <span>Experience</span>
      </SectionHeading>
      {/* body */}

      <ExperienceList />
    </SectionWrapper>
  );
};

export default Experience;
