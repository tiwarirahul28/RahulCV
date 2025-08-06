import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full text-black py-4 px-4 md:px-20 border-b-1 border-[#eee] flex items-center justify-between relative">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">Rahul Tiwari</div>

      {/* Center: Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-base font-medium">
        <li>
          <Link href="/" className="transition">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/projects" className="transition">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/contact" className="transition">
            Project
          </Link>
        </li>
        <li>
          <Link href="/contact" className="transition">
            Contact me
          </Link>
        </li>
      </ul>

      {/* Right: Resume + Menu Toggle */}
      <div className="flex items-center gap-4">
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1 font-semibold bg-black text-white px-6 py-2 rounded-md"
        >
          Resume <Download className="w-4 h-4" />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white md:hidden z-10 py-4 px-4 space-y-4">
          <Link href="/" className="block hover:text-gray-400">
            About Me
          </Link>
          <Link href="/projects" className="block hover:text-gray-400">
            Skills
          </Link>
          <Link href="/contact" className="block hover:text-gray-400">
            Project
          </Link>
          <Link href="/contact" className="block hover:text-gray-400">
            Contact me
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline font-semibold"
          >
            Resume <Download className="inline w-4 h-4 ml-1" />
          </Link>
        </div>
      )}
    </nav>
  );
}
