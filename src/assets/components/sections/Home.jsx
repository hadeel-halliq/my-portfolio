import hadeel from "../../images/hadeel.jpg";
import { Button } from "../Button";

export const Home = () => {
  return (
    <section
      id="home"
      className="p-5 mx-auto mt-32 md:mt-48 flex flex-col md:flex-row items-center justify-center relative gap-x-32"
      style={{ scrollMarginTop: "200px" }}
    >
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          src={hadeel}
          className=" rounded-4xl max-w-xs w-60 md:w-64 h-auto"
          alt="Hadeel Halliq"
        />
      </div>
      <div className="text-center z-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Hadeel Halliq
        </h1>
        <p className="text-gray-400 text-2xl mb-8 max-w-lg mx-auto">
          I’m a front-end developer with React.js who loves crafting clean,
          scalable web applications. My goal is to build solutions that offer
          both exceptional performance and a delightful user experience.
        </p>
        <div className="flex justify-center space-x-4">
          {/* <a
            href="#projects"
            className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
          >
            Projects
          </a> */}
          <Button href={"#projects"} buttonText={"Projects"}/>
          <a
            href="#contact"
            className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-pink-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
