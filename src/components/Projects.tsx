"use client";

import React from "react";
import SectionHeading from "./Ui/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";



type ProjectsProps = {};

export default function Projects({}: ProjectsProps) {
   const { ref } = useSectionInView("Projetos", 0.5)
  return (
    <section
    ref={ref}
    className="mb-28 max-w-[45rem] scroll-mt-24 sm:mb-40"
    id="projects"
    >
      <SectionHeading>Meus Projetos</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


