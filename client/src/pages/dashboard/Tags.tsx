
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Tags() {
  const tags = [
    { name: "javascript", count: 2345, description: "For questions about JavaScript programming" },
    { name: "python", count: 1890, description: "Python is a multi-paradigm, dynamically typed programming language" },
    { name: "react", count: 1234, description: "React is a JavaScript library for building user interfaces" },
    // Add more tags
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Tags</h1>
          <div className="flex gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Filter by tag name" className="pl-10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {tags.map((tag) => (
            <div key={tag.name} className="border rounded-md p-4">
              <Button variant="secondary" className="mb-2">{tag.name}</Button>
              <p className="text-sm text-muted-foreground mb-2">× {tag.count} questions</p>
              <p className="text-sm">{tag.description}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
