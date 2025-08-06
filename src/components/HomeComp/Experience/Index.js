import Image from "next/image";
import React from "react";

const experiences = [
  {
    company: "Tunica Tech",
    role: "Software Developer",
    duration: "May 2022 – Present",
    description: `
      • Developed and maintained responsive web applications using JavaScript, Next.js, React.js, HTML, and CSS to ensure seamless user experiences.
      • Designed and implemented Strapi APIs for efficient data exchange between frontend and backend systems.
      • Integrated and optimized MySQL databases for improved data storage, retrieval, and performance.
      • Customized WordPress themes and plugins to align with business requirements and enhance functionality.
      • Collaborated with designers and backend developers to improve application performance, UX/UI, and overall efficiency.
      • Optimized website performance, ensuring faster load times, improved SEO, and enhanced user engagement.
    `,
    image: "/assets/tunicatech.svg",
  },
  {
    company: "LEAD School",
    role: "Software Tester",
    duration: "June 2021 – August 2022",
    description: `
      • Created detailed test plans and test cases to validate Android and web-based applications.
      • Identified, documented, and tracked software defects using bug-tracking tools.
      • Conducted regression and functional testing to ensure system stability before releases.
      • Worked closely with developers to resolve reported bugs and improve software quality.
    `,
    image: "/assets/leadschool.svg",
  },
];

const Index = () => {
  return (
    <section className="bg-black px-4 text-white md:px-20 py-10 md:py-20">
      <h2 className="text-center text-4xl">
        My <span className="font-bold">Experience</span>
      </h2>

      <div className="mt-10 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-sm p-6 space-y-3"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={exp.image}
                  width={50}
                  height={50}
                  alt={exp.company}
                  className="w-[60px]"
                  priority
                />
                <div>
                  <h4 className="font-bold text-xl">
                    {exp.role} at {exp.company}
                  </h4>
                </div>
              </div>
              <span className="text-[#D4D4D8] font-semibold">
                {exp.duration}
              </span>
            </div>

            <p className="text-[#D4D4D8] whitespace-pre-line">
              {exp.description.trim()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
