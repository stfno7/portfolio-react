import React from "react";
import translations from "../data/translations";

const Contact = ({ language = "es" }) => {
  const t = translations[language].contact;

  return (
    <section id="contacto" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t.title}
        </h2>
        <div className="max-w-lg mx-auto">
          <form action="https://formspree.io/f/mpwwbjaj" method="POST" className="space-y-4"> {/** Manejado formspree */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="nombre">
                {t.nameLabel}
              </label>
              <input type="text" id="nombre" name="nombre"className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required/>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                {t.emailLabel}
              </label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required/>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="mensaje">
                {t.messageLabel}
              </label>
              <textarea id="mensaje" name="mensaje" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>                
              </textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
              {t.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
