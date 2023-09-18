import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Ui/section-divider";
import Skills from '@/components/Skills'
import TechNotices from "@/components/TechNotices";
import Contact from "@/components/Contact";

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <Projects />
    <Skills />
    <TechNotices />
    <Contact />
  </main>;
}
