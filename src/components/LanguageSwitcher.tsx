import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white"
    >
      {i18n.language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};

export default LanguageSwitcher;