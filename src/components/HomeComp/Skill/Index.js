import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "WordPress", icon: FaWordpress },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "PHP", icon: FaPhp },
  { name: "MySQL", icon: SiMysql },
];

const Index = () => {
  return (
    <section className="text-black px-4 md:px-20 py-20">
      <h2 className="text-center text-4xl">
        My <span className="font-bold">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-6 md:mt-10 gap-5">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group text-center border-2 p-6 rounded bg-white transition-all duration-300 hover:bg-black hover:text-white"
          >
            <Icon className="mx-auto mb-2 text-6xl text-black group-hover:text-white transition-colors duration-300" />
            <h3 className="font-semibold text-base">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
