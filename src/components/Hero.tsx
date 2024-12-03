import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-primary to-portfolio-secondary">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
        >
          <img 
            src="/profile-photo.png" 
            alt="Mourad Amami"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="text-center md:text-left text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 animate-fade-up opacity-90">
            {t('hero.role')}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 animate-fade-up opacity-80">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;