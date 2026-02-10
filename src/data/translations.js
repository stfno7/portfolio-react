const translations = {
  // ESPAÑOL
  es: {
    about: { /** ABOUT.JSX  */
      title: "Sobre Mí",
      p1: "Frontend React Developer enfocado en el desarrollo de aplicaciones web utilizando React, JavaScript y CSS. He trabajado en proyectos personales y académicos que incluyen formularios, manejo de estado, consumo de APIs, diseño responsive y construcción de componentes reutilizables.",
      p2: "Soy una persona responsable, comprometida y orientada a mis objetivos. Valoro el trabajo en equipo, la buena comunicación y la organización como pilares para desarrollar productos digitales funcionales."
    },
    header: { /** HEADER.JSX */
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: { /** HERO.JSX */
      subtitle: "Frontend React developer",
      subtitle2: 'de Argentina 📍',
      btnContact: "Contáctame",
      btnProjects: "Ver proyectos",
      btnCV: "Descargar CV"
    },
    skills: { /** SKILLS.JSX */
      title: "Habilidades Técnicas",
      skillLists: [
        { title: "Frontend", skills: ["React", "JavaScript", "HTML5", "CSS", "Tailwind CSS"] },
        { title: "Backend & Databases", skills: ["Firebase", "PHP", "SQL"] },
        { title: "Tools", skills: ["Git, GitHub", "Figma / Canva", "Adobe Photoshop", "Wordpress", "Excel"] }
      ]
    },
    projects: { /** PROJECTS.JSX */
     title: "Proyectos",
     projectList: [
       {
         tags: ["JavaScript", "Firebase", "Tailwind CSS"],
         imgSrc: "img/proyecto-feedback/feedbackindex.png",
         title: "Aplicación feedback anónimo",
         description: "Aplicación para subir feedback sin registro y control de feedback con rol de administrador (ruta /login.html)",
         demoUrl: "https://anonymous-feedback-af7e8.web.app",
         codeUrl: "https://github.com/stfno7/feedly-anonymous-feedback"
       },
       {
         tags: ["PHP", "SQL"],
         imgSrc: "img/proyecto-transporte/preview.png",
         title: "Carga de Transportes",
         description: "CRUD para carga de choferes, transportes y viajes, utilizando PHP y SQL",
         codeUrl: "https://github.com/stfno7/php-proyecto-transportes"
       },
       {
        tags: ["PHP", "SQL"],
        imgSrc: "img/proyecto-campus/preview.png",
        title: "Plantilla Campus Virtual",
        description: "Plantilla de campus educativo. Implementa funcionalidad CRUD y reseteo de contraseña vía token",
        codeUrl: "https://github.com/stfno7/campus"
       },
       {
        tags: ["Wordpress", "SEO Tools", "SSL"],
        imgSrc: "img/proyecto-cdt/preview.png",
        title: "Club de Tuercas",
        description: "Desarrollo de sitio web CMS con Wordpress. Configuración de hosting y dominio",
        demoUrl: "https://clubdetuercas.com.ar/",
        codeUrl: null
       },
       {
        tags: ["HTML", "CSS", "JavaScript"],
        imgSrc: "img/proyecto-ases/preview.png",
        title: "Gym Coach Website",
        description: "Website design for a gym coach. JavaScript and Form validation using FormSpree",
        demoUrl: "https://larrondopersonalizados.netlify.app/",
        codeUrl: "https://github.com/stfno7/reponew-FRONT_TT_2C2024"
       }
     ]
     },
     contact: { /** CONTACT.JSX */
      title: "Contacto",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submitButton: "Enviar Mensaje"
      },
      footer: { /** FOOTER.JSX */
       copyright: "© 2026 Stéfano Parrachini."
      }       
  },
/**************************************************************************************************************************************************************** */
  // INGLÉS
  en: {
    about: { /** ABOUT.JSX */
      title: "About",
      p1: "Frontend React Developer focused on building web applications using React, JavaScript, and CSS. I have worked on personal and academic projects that include forms, state management, API consumption, responsive design, and the development of reusable components.",
      p2: "I am a responsible and committed person, goal-oriented, and I value teamwork, clear communication, and organization as key elements for building functional digital products."
    },
    header: { /** HEADER.JSX */
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact Me"
    },
    hero: { /** HERO.JSX */
      subtitle: "Frontend React developer",
      subtitle2: 'Based in Argentina 📍',
      btnContact: "Contact Me",
      btnProjects: "Projects",
      btnCV: "Download CV"
    },
    skills: { /** SKILLS.JSX */
      title: "Skills",
      skillLists: [
        { title: "Frontend", skills: ["React", "JavaScript", "HTML5", "CSS", "Tailwind CSS"] },
        { title: "Backend & Databases", skills: ["Firebase", "PHP", "SQL"] },
        { title: "Tools", skills: ["Git, GitHub", "Figma / Canva", "Adobe Photoshop", "Wordpress", "Excel"] }
      ]
    },
    projects: { /** PROJECTS.JSX */
    title: "Projects",
    projectList: [
    {
      tags: ["JavaScript", "Firebase", "Tailwind CSS"],
      imgSrc: "img/proyecto-feedback/feedbackindex.png",
      title: "Anonymous feedback application",
      description: "Application to upload feedback without registration and feedback control with administrator role (route /login.html)",
      demoUrl: "https://anonymous-feedback-af7e8.web.app",
      codeUrl: "https://github.com/stfno7/feedly-anonymous-feedback"
    },
    {
      tags: ["PHP", "SQL"],
      imgSrc: "img/proyecto-transporte/preview.png",
      title: "CRUD Travel System",
      description: "CRUD for loading drivers, transports and trips, using PHP and SQL",
      codeUrl: "https://github.com/stfno7/php-proyecto-transportes"
    },
    {
      tags: ["PHP", "SQL"],
      imgSrc: "img/proyecto-campus/preview.png",
      title: "Virtual Campus template",
      description: "Educational campus template. Implements CRUD functionality and password reset via token",
      codeUrl: "https://github.com/stfno7/campus"
    },
    {
      tags: ["Wordpress", "SEO Tools", "SSL"],
      imgSrc: "img/proyecto-cdt/preview.png",
      title: "Club de Tuercas",
      description: "CMS Website built using Wordpress with Hosting and Domain configuration",
      demoUrl: "https://clubdetuercas.com.ar/",
      codeUrl: null
    },
    {
      tags: ["HTML", "CSS", "JavaScript"],
      imgSrc: "img/proyecto-ases/preview.png",
      title: "Gym Coach Website",
      description: "Website design for a gym coach. JavaScript and Form validation using FormSpree",
      demoUrl: "https://larrondopersonalizados.netlify.app/",
      codeUrl: "https://github.com/stfno7/reponew-FRONT_TT_2C2024"
    }
    ]
    },
    contact: { /** CONTACT.JSX */
     title: "Let's keep in touch",
     nameLabel: "Name",
     emailLabel: "Email",
     messageLabel: "Message",
     submitButton: "Submit"
     },
     footer: { /** FOOTER.JSX */
      copyright: "© 2026 Stéfano Parrachini."
     },   
  }
};

export default translations;