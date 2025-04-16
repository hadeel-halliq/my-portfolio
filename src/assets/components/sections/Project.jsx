import watch from "../../images/watch.jpg";
import Food from "../../images/Food.jpg";
import Form from "../../images/Form.jpg";
import cloth from "../../images/cloth.jpg";
import carton from "../../images/carton.jpg";

import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    title: "Watches",
    image: watch,
    description:
      "This project was built by React to clean up API usage and authentication.",
    techStack: ["React.js", "React Router", "Formik", "Yup", "Axios"],
    githubLink: "https://github.com/hadeel-halliq/watches",
    demoLink: "https://hadeel-halliq.github.io/watches/"
  },
  {
    title: "ecommerce-food-del",
    image: Food,
    description:
      "React was used to build this responsive project. You can choose your dishes and add them to the card, and your account will be calculated.",
    techStack: ["Vite", "React.js", "React Router"],
    githubLink: "https://github.com/hadeel-halliq/ecommerce-food-del",
    demoLink: "https://hadeel-halliq.github.io/ecommerce-food-del/"
  },
  {
    title: "Clothe store",
    image: cloth,
    description:
      "React was used to build this responsive project. You can choose the clothes you want for yourself or your child. There are more than one section. Enjoy.",
    techStack: ["Vite", "React.js", "React Router"],
    githubLink: "https://github.com/hadeel-halliq/clothe-store",
    demoLink: "https://hadeel-halliq.github.io/ecommerce-clothing/"
  },
  {
    title: "Form With Validation",
    image: [Form],
    description:
      "React Response Form demonstrates the use of formik and yup to display validation.",
    techStack: ["React.js", "Yup"],
    githubLink: "https://github.com/hadeel-halliq/Form-Validaation",
    demoLink: "https://hadeel-halliq.github.io/Form-Validaation/"
  },
  {
    title: "Cartoon characters",
    image: [carton],
    description:
      "HTML and CSS were used to build this page to show some beautiful CSS styles with animation of course everything is responsive",
    techStack: ["Html", "Css"],
    githubLink: "https://github.com/hadeel-halliq/Cartoon-series",
    demoLink: " https://hadeel-halliq.github.io/Cartoon-series/"
  },
];

export const Projects = () => {
  return (
    <section id="projects" 
            className="flex items-center justify-center mt-64"
            style={{ scrollMarginTop: "200px" }}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
