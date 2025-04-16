import { FaGithub } from "react-icons/fa";
import { Button } from "./Button";

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
      <h3 className="text-xl font-bold mb-2 text-pink-500">{title}</h3>
      <img
        src={image}
        alt={title}
        className="my-9 rounded-3xl md:h-40 md:w-3xs relative mx-auto"
      />
      <p className="text-gray-400">{description}</p>
      <div className="my-4 text-gray-400">
        <h3>Built by :</h3>
        <ul className="list-disc pl-5">
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5 ">
        <div className="flex items-center justify-center gap-1 w-1/3 relative mx-auto bg-pink-500 text-white rounded font-medium transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
          <FaGithub />
          <Button href={githubLink} buttonText={"GitHub"} />
        </div>
        <div className="flex items-center justify-center gap-1  w-1/3 relative mx-auto bg-pink-500 text-white  rounded font-medium transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
          <Button href={demoLink} buttonText={"Demo"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
