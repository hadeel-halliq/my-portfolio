import { useEffect } from "react";
import { FaFeatherAlt } from "react-icons/fa";

export const NavBar = ({ menuOpen, setMenuOPen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed p-5 top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold font-white">
            <div className="flex items-center ">
              <h1 className="text-pink-500 font-bold text-2xl tracking-tight">
                Hadeel.
              </h1>
              <FaFeatherAlt className="text-pink-500" />
            </div>
          </a>

          <div
            className="w-7 h-8 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOPen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hoveLtext-white ">
              Home
            </a>
            <a href="#about" className="text-gray-300 hoveLtext-white ">
              About
            </a>
            <a href="#projects" className="text-gray-300 hoveLtext-white ">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hoveLtext-white ">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
