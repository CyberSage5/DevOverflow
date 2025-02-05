import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";

const CONTRIBUTORS = [
  {
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86",
    role: "Top Contributor",
    contributions: "1.2k answers"
  },
  // Add 2-3 more contributors
];

export function CommunityHighlights() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Community Leaders</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {CONTRIBUTORS.map((contributor, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={contributor.image} alt={contributor.name} />
                    <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{contributor.name}</h3>
                  <p className="text-primary font-medium">{contributor.role}</p>
                  <p className="text-muted-foreground">{contributor.contributions}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
