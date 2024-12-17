import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero.title": "Promote Your Business More Effectively",
      "hero.subtitle": "Reach customers with real-time promotions",
      "hero.cta": "Start for free",
      "features.title": "Why choose us?",
      "features.notifications": "Notifications",
      "features.notifications.desc": "Reach customers with real-time promotions",
      "features.analytics": "Analytics",
      "features.analytics.desc": "Track your promotional campaign effectiveness",
      "features.quick": "Quick Implementation",
      "features.quick.desc": "Start sending notifications in minutes",
      "pricing.title": "Choose the right plan",
      "pricing.start": "Start",
      "pricing.pro": "Pro",
      "pricing.payg": "Pay as you go",
      "pricing.free": "Free",
      "pricing.select": "Select plan",
      "pricing.features.notifications": "notifications",
      "pricing.features.basic": "Basic statistics",
      "pricing.features.email": "Email support",
      "pricing.features.unlimited": "Unlimited notifications",
      "pricing.features.advanced": "Advanced analytics",
      "pricing.features.priority": "Priority support",
      "pricing.features.conversion": "Conversion statistics",
      "pricing.features.pay": "Pay per notification",
      "pricing.features.no": "No commitments",
      "footer.rights": "All rights reserved.",
      "toast.coming": "Coming soon!",
      "toast.registration": "Registration will be available soon.",
    }
  },
  pl: {
    translation: {
      "hero.title": "Promuj swój biznes skuteczniej",
      "hero.subtitle": "Docieraj do klientów z promocjami w czasie rzeczywistym",
      "hero.cta": "Rozpocznij za darmo",
      "features.title": "Dlaczego warto nas wybrać?",
      "features.notifications": "Powiadomienia",
      "features.notifications.desc": "Docieraj do klientów z promocjami w czasie rzeczywistym",
      "features.analytics": "Analityka",
      "features.analytics.desc": "Śledź skuteczność swoich kampanii promocyjnych",
      "features.quick": "Szybkie wdrożenie",
      "features.quick.desc": "Zacznij wysyłać powiadomienia w kilka minut",
      "pricing.title": "Wybierz odpowiedni plan",
      "pricing.start": "Start",
      "pricing.pro": "Pro",
      "pricing.payg": "Pay as you go",
      "pricing.free": "Darmowy",
      "pricing.select": "Wybierz plan",
      "pricing.features.notifications": "powiadomień",
      "pricing.features.basic": "Podstawowe statystyki",
      "pricing.features.email": "Wsparcie email",
      "pricing.features.unlimited": "Nielimitowane powiadomienia",
      "pricing.features.advanced": "Zaawansowana analityka",
      "pricing.features.priority": "Priorytetowe wsparcie",
      "pricing.features.conversion": "Statystyki konwersji",
      "pricing.features.pay": "Płać za powiadomienie",
      "pricing.features.no": "Bez zobowiązań",
      "footer.rights": "Wszystkie prawa zastrzeżone.",
      "toast.coming": "Już wkrótce!",
      "toast.registration": "Rejestracja będzie dostępna wkrótce.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;