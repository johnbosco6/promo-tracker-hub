import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { FeatureSection } from "@/components/FeatureSection";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handlePlanSelect = () => {
    toast({
      title: t("toast.coming"),
      description: t("toast.registration"),
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up opacity-90">
            {t("hero.subtitle")}
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handlePlanSelect}
            className="animate-fade-up bg-white text-primary hover:bg-gray-100"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("pricing.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title={t("pricing.start")}
              price={t("pricing.free")}
              features={[
                `100 ${t("pricing.features.notifications")}`,
                t("pricing.features.basic"),
                t("pricing.features.email"),
              ]}
              onSelect={handlePlanSelect}
            />
            <PricingCard
              title={t("pricing.pro")}
              price="150"
              features={[
                t("pricing.features.unlimited"),
                t("pricing.features.advanced"),
                t("pricing.features.priority"),
                t("pricing.features.conversion"),
              ]}
              isPopular
              onSelect={handlePlanSelect}
            />
            <PricingCard
              title={t("pricing.payg")}
              price="0.10"
              features={[
                t("pricing.features.pay"),
                t("pricing.features.basic"),
                t("pricing.features.email"),
                t("pricing.features.no"),
              ]}
              onSelect={handlePlanSelect}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Promocje App. {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;