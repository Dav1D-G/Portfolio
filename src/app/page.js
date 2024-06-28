'use client'
import { Navigation } from "@/components/Navigation";
import { Hello } from "@/components/Hello";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { useRef } from "react";

export default function Home() {

  const helloSection = useRef(null);
  const aboutMeSection = useRef(null);
  const experienceSection = useRef(null);
  const projectsSection = useRef(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dupa">
        <Navigation helloRef={helloSection} aboutRef={aboutMeSection} expRef={experienceSection} projectRef={projectsSection}/>
        <div className="body-section">
          <Hello refs={helloSection}/>
          <AboutMe refs={aboutMeSection}/>
          <Experience refs={experienceSection}/>
          <Projects refs={projectsSection}/>
        </div>
      </main>
  );
}
