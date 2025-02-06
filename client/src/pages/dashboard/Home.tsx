
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, ArrowUp, ArrowDown, Eye, MessageSquare } from "lucide-react";

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
      timestamp: "2h ago",
      bounty: 100
    },
    // ... more questions
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Top Questions</h1>
            <p className="text-muted-foreground mt-1">Recent questions from the community</p>
          </div>
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
            <div key={question.id} className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                  <span className="text-lg font-semibold">{question.votes}</span>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ArrowDown className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold hover:text-primary cursor-pointer">
                        {question.title}
                      </h2>
                      <p className="text-muted-foreground">{question.content}</p>
                      <div className="flex gap-2">
                        {question.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="hover:bg-primary/10 cursor-pointer">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {question.answers} answers
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {question.views} views
                      </div>
                      {question.bounty && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          +{question.bounty} bounty
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      asked {question.timestamp} by {question.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
