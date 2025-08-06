import React from "react";
import Banner from "@/components/HomeComp/Banner/Index";
import Skill from "@/components/HomeComp/Skill/Index";
import Experience from "@/components/HomeComp/Experience/Index";
import About from "@/components/HomeComp/About/Index";
import Projects from "@/components/HomeComp/Projects/Index";
import Testimonial from "@/components/HomeComp/Testimonial/Index";
import Contact from "@/components/HomeComp/Contact/Index";
const Index = () => {
  return (
    <>
      <Banner />
      <Skill />
      <Experience />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Index;
