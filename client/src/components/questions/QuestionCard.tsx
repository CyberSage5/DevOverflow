
import { Question } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, ThumbsUp, ThumbsDown, Check, Eye } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export function QuestionCard({ question }: { question: Question }) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  
  const voteMutation = useMutation({
    mutationFn: async ({ value }: { value: number }) => {
      const response = await fetch(`/api/questions/${question.id}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
      });
      if (!response.ok) throw new Error('Failed to vote');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['/api/questions']);
    }
  });

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => voteMutation.mutate({ value: 1 })}
              disabled={!user}
            >
              <ThumbsUp className="w-4 h-4" />
            </Button>
            <span>{question.upvotes}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => voteMutation.mutate({ value: -1 })}
              disabled={!user}
            >
              <ThumbsDown className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1">
            <Link href={`/question/${question.id}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                {question.title}
              </h3>
            </Link>
            
            <p className="text-muted-foreground mb-4">{question.preview}</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {question.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {question.viewCount}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {question.answers}
                </span>
                {question.bountyAmount > 0 && (
                  <Badge variant="destructive">
                    +{question.bountyAmount} bounty
                  </Badge>
                )}
                <span>
                  by {question.authorName} • {formatDistanceToNow(new Date(question.createdAt))} ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
