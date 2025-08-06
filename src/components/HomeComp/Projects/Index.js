import Image from "next/image";
import React from "react";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    image: "/assets/project.svg",
    url: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio to showcase projects, blog, and contact information. Built using Next.js and Tailwind CSS.",
    image: "/assets/project.svg",
    url: "#",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description:
      "Built a full-stack admin dashboard for an e-commerce store with analytics, product management, and order tracking features.",
    image: "/assets/project.svg",
    url: "#",
  },
];

const Index = () => {
  return (
    <section className="bg-black px-4 text-white md:px-20 py-10 md:py-20">
      <h2 className="text-center text-4xl font-bold">
        My <span className="font-normal">Projects</span>
      </h2>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div
            className={`rounded-lg overflow-hidden shadow-lg  ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <Image
              src={project.image}
              width={800}
              height={600}
              alt={project.title}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* Info Section */}
          <div>
            <span className="text-4xl font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-3xl font-bold mt-4 mb-4">{project.title}</h3>
            <p className="text-[#D4D4D8] leading-relaxed mb-6">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:underline"
            >
              <LuExternalLink className="text-xl" />
              Visit Project
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Index;
