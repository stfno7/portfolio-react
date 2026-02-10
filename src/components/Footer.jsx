import React from "react";
import translations from "../data/translations";

const Footer = ({ language = "es" }) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>{t.copyright}</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/stefanoparrachini/" className="hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
            LinkedIn
            </a>
            <a href="https://github.com/stfno7" className="hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
            GitHub
            </a>
            <a href="mailto:stepaohhh@gmail.com" className="hover:text-blue-400 transition duration-300">
            Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
