import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerChildren, hoverScale } from "@/lib/animations";

const TRENDING_QUESTIONS = [
  {
    id: 1,
    title: "How to implement authentication in Next.js 13?",
    preview: "I'm trying to add authentication to my Next.js application...",
    upvotes: 42,
    answers: 5,
    tags: ["next.js", "auth", "react"],
    authorName: "Sarah Dev"
  },
  {
    id: 2,
    title: "Best practices for React Query v5",
    preview: "What are the recommended patterns for using React Query v5...",
    upvotes: 38,
    answers: 3,
    tags: ["react-query", "react", "typescript"],
    authorName: "Mike Turner"
  },
  {
    id: 3,
    title: "Understanding TypeScript Generic Constraints",
    preview: "I need help understanding how to properly use generic constraints...",
    upvotes: 35,
    answers: 7,
    tags: ["typescript", "generics"],
    authorName: "Alex Chen"
  }
];

export function TrendingQuestions() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Trending Questions</h2>

        <div className="grid gap-4">
          {TRENDING_QUESTIONS.map((question) => (
            <motion.div
              key={question.id}
              variants={fadeIn}
              whileHover={hoverScale}
              className="cursor-pointer"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {question.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{question.preview}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {question.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{question.upvotes} upvotes</span>
                      <span>{question.answers} answers</span>
                      <span>by {question.authorName}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}