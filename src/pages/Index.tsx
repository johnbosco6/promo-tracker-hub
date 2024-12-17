import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/FeatureSection";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up opacity-90">
            {t("hero.subtitle")}
          </p>
          <Link to="/auth">
            <Button 
              size="lg" 
              variant="secondary"
              className="animate-fade-up bg-white text-[#2563eb] hover:bg-gray-100"
            >
              {t("hero.cta")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Kacz. {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;