
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search } from "lucide-react";

export default function DashboardHome() {
  const questions = [
    {
      id: 1,
      title: "How to handle authentication in Next.js 14 with Server Actions?",
      content: "I'm building a Next.js 14 app and trying to implement authentication using the new Server Actions. What's the best approach?",
      tags: ["next.js", "authentication", "react"],
      votes: 42,
      answers: 5,
      views: 1200,
      author: "nextdev",
      timestamp: "2h ago"
    },
    {
      id: 2,
      title: "Understanding TypeScript Generic Constraints in React Components",
      content: "I'm struggling with implementing generic constraints in my React components. Specifically when using with custom hooks...",
      tags: ["typescript", "react", "generics"],
      votes: 38,
      answers: 3,
      views: 950,
      author: "tsexpert",
      timestamp: "4h ago"
    },
    {
      id: 3,
      title: "Best practices for handling large-scale state management in 2024",
      content: "With all the new options available (Zustand, Jotai, TanStack), what's the current best practice for state management?",
      tags: ["react", "state-management", "javascript"],
      votes: 56,
      answers: 8,
      views: 2300,
      author: "statepro",
      timestamp: "6h ago"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Top Questions</h1>
          <Button>Ask Question</Button>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search questions..." className="pl-10" />
          </div>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="active">Most Active</SelectItem>
              <SelectItem value="votes">Highest Votes</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question.id} className="border rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold hover:text-blue-600 cursor-pointer">
                    {question.title}
                  </h2>
                  <p className="text-muted-foreground">{question.content}</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-lg font-medium">{question.votes} votes</div>
                  <div className="text-sm text-muted-foreground">{question.answers} answers</div>
                  <div className="text-sm text-muted-foreground">{question.views} views</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {question.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  asked {question.timestamp} by {question.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
