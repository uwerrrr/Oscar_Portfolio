import SectionDivider from "./components/SectionDivider";
import Intro from "./sections/Intro/Intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}
