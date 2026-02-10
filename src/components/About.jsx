import React from "react";
import translations from "../data/translations";

const About = ({ language = "es" }) => {
  const t = translations[language].about;

  return (
    <section id="sobre-mi" className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t.title}
        </h2>
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-4">{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
