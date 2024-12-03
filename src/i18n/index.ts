import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "hero.title": "Mourad Amami",
      "hero.role": "Ingénieur Full Stack",
      "hero.description": "Création d'applications web et mobiles belles et évolutives avec des technologies modernes",
      "projects.title": "Projets Phares",
      "skills.title": "Compétences & Expertise",
      "contact.title": "Contactez-moi",
      "contact.name": "Votre Nom",
      "contact.email": "Votre Email",
      "contact.message": "Votre Message",
      "contact.send": "Envoyer le Message"
    }
  },
  en: {
    translation: {
      "hero.title": "Mourad Amami",
      "hero.role": "Full Stack Engineer",
      "hero.description": "Building beautiful, scalable web and mobile applications with modern technologies",
      "projects.title": "Featured Projects",
      "skills.title": "Skills & Expertise",
      "contact.title": "Get In Touch",
      "contact.name": "Your Name",
      "contact.email": "Your Email",
      "contact.message": "Your Message",
      "contact.send": "Send Message"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;