import React from "react";
import Typewriter from "typewriter-effect";
import translations from "../data/translations";

const Hero = ({ language = "es" }) => {
  const t = translations[language].hero;

  return (
    <section id="inicio" className="pt-24 pb-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/** <img src="img/logospblank.png" alt="SP" className="rounded-full mx-auto mb-1 w-50 h-10"/> {/** Logo */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          <Typewriter
            options={{
              strings: ["Stefano Parrachini"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="text-xl text-gray-600 mb-1">{t.subtitle}</p>
        <p className="text-gray-600 mb-10">{t.subtitle2}</p>
        <div className="flex justify-center space-x-4">
          <a href="#contacto" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            {t.btnContact}
          </a>
          <a href="#projects" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
            {t.btnProjects}
          </a>
          <a href="/StefanoP-CV.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-500 hover:text-blue-500 transition duration-300">
          {t.btnCV}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
