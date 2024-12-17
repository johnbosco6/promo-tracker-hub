import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

export const PricingCard = ({ title, price, features, isPopular, onSelect }: PricingCardProps) => {
  return (
    <Card className={`w-full max-w-sm transition-all duration-200 ${isPopular ? 'scale-105 border-primary' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
          {isPopular && (
            <span className="ml-2 inline-block bg-accent text-white text-xs px-2 py-1 rounded-full">
              Popularne
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Darmowy" && <span className="text-sm text-gray-500">/PLN</span>}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onSelect}
          className={`w-full ${isPopular ? 'bg-primary hover:bg-primary/90' : ''}`}
        >
          Wybierz plan
        </Button>
      </CardFooter>
    </Card>
  );
};