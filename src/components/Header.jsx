import React from "react";
import translations from "../data/translations";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Header = ({ language, toggleLanguage }) => {
  const t = translations[language].header;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              <img src="img/logosolo.png" alt="Logo SP" className="h-8 w-8" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#inicio" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              {t.home}
            </a>
            <a href="#sobre-mi" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              {t.about}
            </a>
            <a href="#habilidades" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              {t.skills}
            </a>
            <a href="#proyectos" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              {t.projects}
            </a>
            <a href="#contacto" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              {t.contact}
            </a>
            <a href="https://www.linkedin.com/in/stefanoparrachini/" className="py-4 px-2 text-gray-900 hover:text-blue-500 transition duration-300" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
            </a>
            <a href="https://github.com/stfno7" className="py-4 px-2 text-gray-900 hover:text-blue-500 transition duration-300" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
            </a>
          </div>

          <div className={`language-selector ${language === "es" ? "active-es" : "active-en"} cursor-pointer`} onClick={toggleLanguage} title="Language">
            {/** Toggler lenguaje */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;