import React from "react";
import translations from "../data/translations";

const ProjectCard = ({ tags, imgSrc, title, description, demoUrl, codeUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden" id="projects">
    <div className="p-4 bg-gray-50 border-b">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-1">
      <img src={imgSrc} alt={`Preview del proyecto ${title}`} className="w-full h-48 object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between">
        {demoUrl && (
          <a href={demoUrl} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = ({ language = "es" }) => {
  const t = translations[language].projects;
  return (
    <section id="proyectos" className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projectList.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;