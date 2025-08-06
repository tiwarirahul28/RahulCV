import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Evren Shah",
    role: "Product Manager at TechNova",
    quote:
      "They revamped our frontend using React and Next.js, and the results were outstanding. Load times dropped significantly, and our bounce rate improved by 30%.",
    image: "/assets/user.svg",
  },
  {
    id: 2,
    name: "Flora Sheen",
    role: "Founder at Sheen Interiors",
    quote:
      "We needed a WordPress site that reflected our brand and was easy to update. They delivered a customized solution that’s both beautiful and scalable.",
    image: "/assets/user.svg",
  },
  {
    id: 3,
    name: "Nikhil Verma",
    role: "CTO at Startly",
    quote:
      "Their integration of Strapi with our frontend was seamless. We now have a fast, secure, and easy-to-manage CMS-backed application.",
    image: "/assets/user.svg",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    role: "Operations Head at Finlytics",
    quote:
      "We saw a 50% performance improvement after their MySQL optimization. Data fetch times are now blazing fast across our dashboard and analytics tools.",
    image: "/assets/user.svg",
  },
  {
    id: 5,
    name: "Ravi Menon",
    role: "CEO at CloudCap",
    quote:
      "From design to deployment, the team was proactive and detail-oriented. Their Tailwind + Next.js setup gave us a clean, responsive, and maintainable codebase.",
    image: "/assets/user.svg",
  },
];

const Index = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:py-20">
      <h2 className="text-center text-4xl">
        My <span className="font-bold">Testimonial</span>
      </h2>
      <div className="mt-12">
        <Carousel>
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 pb-2"
              >
                <div className="group rounded-xl p-8 shadow-md border text-center bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 h-full">
                  <div className="flex justify-center mb-6 relative">
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.name}
                      className="rounded-full border border-black group-hover:border-white"
                    />
                    <span className="absolute bottom-0 right-[40%] text-lg font-bold bg-black text-black border p-1 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black text-white">
                      <FaQuoteRight className="text-inherit" />
                    </span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed">{item.quote}</p>
                  <hr className="border-t w-16 mx-auto mb-4" />
                  <h4 className="font-bold">{item.name}</h4>
                  <span className="text-sm opacity-70">{item.role}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Index;
