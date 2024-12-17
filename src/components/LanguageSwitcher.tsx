import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50"
    >
      {i18n.language === 'en' ? 'PL' : 'EN'}
    </Button>
  );
};