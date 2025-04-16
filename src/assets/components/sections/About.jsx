import { FaBookOpen } from "react-icons/fa";

export const About = () => {
  const frontEndSkills = [
    "Html",
    "Css",
    "JavaScript",
    "React.js",
    "Mui",
    "TailwindCss",
  ];

  return (
    <section 
      id="about" 
      className="flex items-center justify-center mt-64"
      style={{ scrollMarginTop: "200px" }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 hover:-translate-y-1 transition">
          <p className="text-gray-300 mb-6 text-center text-xl">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions
          </p>
          <h3 className="text-2xl font-bold mb-4 text-center mt-10">
            {" "}
            Frontend Skills
          </h3>
          <div className="flex items-center gap-8 justify-center mt-5 flex-wrap">
            {frontEndSkills.map((skill, key) => (
              <span
                key={key}
                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-lg
                hover: bg-pink-500/20  hover:shadow-[0_2px_8px_rgba(255,105,180,0.2)] transition cursor-pointer
                px-16 py-2
               "
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex  justify-center items-baseline gap-5">
            <h3 className="text-2xl font-bold mb-4 text-center mt-12">
              Education and training{" "}
            </h3>
            <FaBookOpen className="text-3xl text-pink-500" />
          </div>
          <div className="flex items-center">
            <ul className="text-gray-300 text-lg">
              <li>
                <span className="text-xl text-pink-500 font-bold">2020 : </span>{" "}
                Bachelor's degree in Communications and Electronics Engineering
                from latakia University
              </li>
              <li>
                <span className="text-xl text-pink-500 font-bold">2024 : </span>
                Front End Training Certificate from Mad Solutions Company
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
