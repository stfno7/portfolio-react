import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import translations from "./data/translations";
import "./App.css";

  const App = () => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="pt-16">
        <Hero language={language} translations={translations} />
        <About language={language} translations={translations} />
        <Skills language={language} translations={translations} />
        <Projects language={language} translations={translations} />
        <Contact language={language} translations={translations} />
      </main>
      <Footer language={language} translations={translations} />
    </>
  );
};

export default App;