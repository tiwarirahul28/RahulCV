import Image from "next/image";
import React from "react";

const Index = () => {
  const aboutContent = [
    "I'm a passionate, self-taught designer and developer specializing in full-stack development using technologies like React.js and Node.js. I love bridging the gap between design and engineering to create seamless digital experiences. Clean, performant code and pixel-perfect design are at the heart of what I do.",
    "My journey began in 2015, and over the years, I've taken on exciting challenges and stayed up-to-date with evolving technologies. Now, with over 7 years of experience, I'm building modern, scalable web applications using tools like Next.js, TypeScript, NestJS, Tailwind CSS, Supabase, and more.",
    "When I'm not coding, you’ll likely find me exploring indie startups on Twitter or Indie Hackers, learning from others, and enjoying tech discussions. Feel free to connect with me on Twitter or check out my work on GitHub.",
  ];
  return (
    <section className="px-4 md:px-20 py-10 md:py-20 grid grid-cols-1 md:grid-cols-[35%_60%] gap-10">
      <div>
        <Image
          src="/assets/aboutimage.svg"
          width={500}
          height={500}
          alt="Person working on laptop"
          className="w-full max-w-[500px] object-cover"
          priority
        />
      </div>
      <div>
        <h2 className="text-4xl mb-4">
          About <span className="font-bold">Me</span>
        </h2>
        <div className="space-y-4 text-[#444] dark:text-[#ccc]">
          {aboutContent.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
