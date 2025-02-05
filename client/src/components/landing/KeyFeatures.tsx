import { motion } from "framer-motion";
import { Bot, MessageSquare, Trophy, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";

const FEATURES = [
  {
    icon: Bot,
    title: "AI-Powered Answers",
    description: "Get instant suggestions and answers powered by advanced AI"
  },
  {
    icon: MessageSquare,
    title: "Live Discussions",
    description: "Real-time chat for immediate help from the community"
  },
  {
    icon: Trophy,
    title: "Bounty System",
    description: "Offer rewards for faster, high-quality answers"
  },
  {
    icon: Zap,
    title: "Instant Search",
    description: "Find solutions quickly with our powerful search"
  }
];

export function KeyFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Dev Overflow?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
