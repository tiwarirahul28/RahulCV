import Image from "next/image";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import BaseLayout from "@/components/layout/BaseLayout";
import HomeComp from "@/components/HomeComp/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <BaseLayout>
      <div
        className={`${geistSans.className} ${geistMono.className} ${poppins.className} min-h-screen py-10 md:py-20`}
      >
        <HomeComp />
      </div>
    </BaseLayout>
  );
}
