import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <section className="text-black px-4 md:px-20 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div>
            <div>
              <h1 className="text-3xl md:text-5xl font-normal leading-10 md:leading-16">
                Hello I’am <span className="font-bold">Rahul Tiwari.</span>{" "}
                <span className="font-bold">Frontend</span> Developer Based In{" "}
                <span className="font-bold">India</span>.
              </h1>
            </div>
            <p className="text-base mt-3 md:mt-5 leading-relaxed">
              I specialize in crafting modern, responsive, and user-friendly web
              interfaces. With a strong foundation in frontend technologies, I’m
              passionate about turning creative ideas into functional digital
              experiences. Im dedicated to writing clean, efficient code and
              continuously improving my skills. My journey in web development is
              driven by curiosity, innovation, and a commitment to delivering
              high-quality work.
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-6 md:mt-10 flex gap-2 items-center ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white p-2 rounded-sm border transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white p-2 rounded-sm hover:bg-white hover:text-black border "
            >
              <Github size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white p-2 rounded-sm border transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white p-2 rounded-sm border transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/assets/bannerImage.svg"
            width={500}
            height={500}
            alt="Person working on laptop"
            className="w-full hidden md:flex"
            priority
          />
          <Image
            src="/assets/bannermoblieimage.svg"
            width={500}
            height={500}
            alt="Person working on laptop"
            className="w-full md:hidden"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
