import { Question } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, ThumbsUp } from "lucide-react";

type QuestionCardProps = {
  question: Question;
};

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Link href={`/dashboard/questions/${question.id}`}>
      <Card className="cursor-pointer hover:border-primary/50 transition-colors">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            {question.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{question.preview}</p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {question.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                {question.upvotes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {question.answers}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
