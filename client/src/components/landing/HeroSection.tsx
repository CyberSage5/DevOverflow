import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-background to-muted"
    >
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
      >
        {t('hero.title')}
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
      >
        {t('hero.subtitle')}
      </motion.p>

      <div className="flex gap-4">
        <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
          {t('hero.getStarted')}
        </Button>
        <Button size="lg" variant="outline">
          {t('hero.learnMore')}
        </Button>
      </div>
    </motion.section>
  );
}