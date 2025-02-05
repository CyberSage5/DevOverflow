import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      hero: {
        title: "The Open-Source Alternative to Stack Overflow",
        subtitle: "Join our thriving developer community. Ask questions, share knowledge, and grow together.",
        getStarted: "Get Started",
        learnMore: "Learn More"
      },
      features: {
        title: "Why Dev Overflow?",
        ai: {
          title: "AI-Powered Answers",
          description: "Get instant suggestions and answers powered by advanced AI"
        },
        discussions: {
          title: "Live Discussions",
          description: "Real-time chat for immediate help from the community"
        },
        bounty: {
          title: "Bounty System",
          description: "Offer rewards for faster, high-quality answers"
        },
        search: {
          title: "Instant Search",
          description: "Find solutions quickly with our powerful search"
        }
      },
      nav: {
        login: "Log In",
        signup: "Sign Up"
      },
      search: {
        placeholder: "Search questions..."
      }
    }
  },
  es: {
    translation: {
      hero: {
        title: "La Alternativa de Código Abierto a Stack Overflow",
        subtitle: "Únete a nuestra próspera comunidad de desarrolladores. Haz preguntas, comparte conocimientos y crece junto a nosotros.",
        getStarted: "Comenzar",
        learnMore: "Saber Más"
      },
      features: {
        title: "¿Por qué Dev Overflow?",
        ai: {
          title: "Respuestas con IA",
          description: "Obtén sugerencias y respuestas instantáneas impulsadas por IA avanzada"
        },
        discussions: {
          title: "Discusiones en Vivo",
          description: "Chat en tiempo real para ayuda inmediata de la comunidad"
        },
        bounty: {
          title: "Sistema de Recompensas",
          description: "Ofrece recompensas por respuestas más rápidas y de calidad"
        },
        search: {
          title: "Búsqueda Instantánea",
          description: "Encuentra soluciones rápidamente con nuestra potente búsqueda"
        }
      },
      nav: {
        login: "Iniciar Sesión",
        signup: "Registrarse"
      },
      search: {
        placeholder: "Buscar preguntas..."
      }
    }
  },
  fr: {
    translation: {
      hero: {
        title: "L'Alternative Open Source à Stack Overflow",
        subtitle: "Rejoignez notre communauté de développeurs dynamique. Posez des questions, partagez vos connaissances et évoluez ensemble.",
        getStarted: "Commencer",
        learnMore: "En Savoir Plus"
      },
      features: {
        title: "Pourquoi Dev Overflow ?",
        ai: {
          title: "Réponses IA",
          description: "Obtenez des suggestions et des réponses instantanées alimentées par l'IA avancée"
        },
        discussions: {
          title: "Discussions en Direct",
          description: "Chat en temps réel pour une aide immédiate de la communauté"
        },
        bounty: {
          title: "Système de Primes",
          description: "Offrez des récompenses pour des réponses plus rapides et de qualité"
        },
        search: {
          title: "Recherche Instantanée",
          description: "Trouvez des solutions rapidement avec notre puissante recherche"
        }
      },
      nav: {
        login: "Connexion",
        signup: "S'inscrire"
      },
      search: {
        placeholder: "Rechercher des questions..."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
