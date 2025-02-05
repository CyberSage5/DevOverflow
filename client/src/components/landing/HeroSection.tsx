import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";

export function HeroSection() {
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
        The Open-Source Alternative to Stack Overflow
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
      >
        Join our thriving developer community. Ask questions, share knowledge, and grow together.
      </motion.p>

      <div className="flex gap-4">
        <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </motion.section>
  );
}
