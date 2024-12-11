import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";

function All() {
  return (
    <>
      <div>
      <Navbar/>
      <AboutMe />
      <Education />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
    </>
  );
}

export default All;
