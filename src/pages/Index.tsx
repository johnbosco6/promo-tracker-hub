import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { FeatureSection } from "@/components/FeatureSection";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handlePlanSelect = () => {
    toast({
      title: "Już wkrótce!",
      description: "Rejestracja będzie dostępna wkrótce.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Promuj swój biznes skuteczniej
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up opacity-90">
            Docieraj do klientów z promocjami w czasie rzeczywistym
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handlePlanSelect}
            className="animate-fade-up bg-white text-primary hover:bg-gray-100"
          >
            Rozpocznij za darmo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Wybierz odpowiedni plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Start"
              price="Darmowy"
              features={[
                "100 powiadomień",
                "Podstawowe statystyki",
                "Wsparcie email",
              ]}
              onSelect={handlePlanSelect}
            />
            <PricingCard
              title="Pro"
              price="150"
              features={[
                "Nielimitowane powiadomienia",
                "Zaawansowana analityka",
                "Priorytetowe wsparcie",
                "Statystyki konwersji",
              ]}
              isPopular
              onSelect={handlePlanSelect}
            />
            <PricingCard
              title="Pay as you go"
              price="0.10"
              features={[
                "Płać za powiadomienie",
                "Podstawowe statystyki",
                "Wsparcie email",
                "Bez zobowiązań",
              ]}
              onSelect={handlePlanSelect}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Promocje App. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;