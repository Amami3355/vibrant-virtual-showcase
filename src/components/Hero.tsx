import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-primary to-portfolio-secondary">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 animate-fade-up opacity-90">
          {t('hero.role')}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-up opacity-80">
          {t('hero.description')}
        </p>
      </div>
    </div>
  );
};

export default Hero;