import { Bell, BarChart, Zap } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Powiadomienia",
    description: "Docieraj do klientów z promocjami w czasie rzeczywistym",
  },
  {
    icon: BarChart,
    title: "Analityka",
    description: "Śledź skuteczność swoich kampanii promocyjnych",
  },
  {
    icon: Zap,
    title: "Szybkie wdrożenie",
    description: "Zacznij wysyłać powiadomienia w kilka minut",
  },
];

export const FeatureSection = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego warto nas wybrać?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};