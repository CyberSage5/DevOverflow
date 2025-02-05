import { DashboardLayout } from "@/layouts/DashboardLayout";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Question } from "@shared/schema";

export default function DashboardHome() {
  const { data: questions, isLoading } = useQuery<Question[]>({
    queryKey: ["/api/questions"],
  });

  return (
    <DashboardLayout>
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search questions..."
            className="pl-10"
          />
        </div>

        <div className="flex gap-4">
          <Select defaultValue="latest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="most-answered">Most Answered</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Question Feed */}
      <div className="space-y-4">
        {isLoading ? (
          <div>Loading questions...</div>
        ) : questions?.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </DashboardLayout>
  );
}
