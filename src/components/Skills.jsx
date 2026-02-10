import React from "react";
import translations from "../data/translations";
import {FaReact,FaHtml5,FaCss3Alt,FaJs,FaPhp,FaGitAlt} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiMysql, SiFigma, SiAdobephotoshop, SiWordpress } from "react-icons/si";

const skillIcons = {
  React: <FaReact className="text-sky-500" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,

  Firebase: <SiFirebase className= "text-orange-500"/>,
  PHP: <FaPhp className="text-indigo-500" />,
  SQL: <SiMysql className="text-blue-600" />,

  "Git, GitHub": <FaGitAlt className="text-orange-600" />,
  "Figma / Canva": <SiFigma className="text-purple-500" />,
  "Adobe Photoshop": <SiAdobephotoshop className="text-blue-500" />,
  Wordpress: <SiWordpress className="text-blue-700" />,
  Excel: <span className="font-bold text-green-600">X</span>,
};

const SkillList = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-2 text-gray-600">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center gap-2">
          {skillIcons[skill] && (
            <span className="text-lg">{skillIcons[skill]}</span>
          )}
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = ({ language = "es" }) => {
  const t = translations[language].skills;

  return (
    <section id="habilidades" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.skillLists.map((skillList, i) => (
            <SkillList key={i} title={skillList.title} skills={skillList.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
