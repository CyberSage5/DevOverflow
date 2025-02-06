
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Tags() {
  const tags = [
    { 
      name: "javascript", 
      count: 2345678, 
      description: "For questions about programming in ECMAScript (JavaScript/JS) and its different implementations (excluding ActionScript)." 
    },
    { 
      name: "python", 
      count: 1890432, 
      description: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use." 
    },
    { 
      name: "react", 
      count: 987654, 
      description: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components." 
    },
    { 
      name: "node.js", 
      count: 789012, 
      description: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library." 
    },
    { 
      name: "typescript", 
      count: 654321, 
      description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional types to JavaScript." 
    },
    { 
      name: "docker", 
      count: 543210, 
      description: "Docker is an open platform for developing, shipping, and running applications in containers." 
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">Tags</h1>
            <p className="text-muted-foreground mt-2">A tag is a keyword or label that categorizes your question with other, similar questions.</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Filter by tag name" className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {tags.map((tag) => (
            <div key={tag.name} className="border rounded-lg p-6 space-y-3">
              <Button variant="secondary" className="text-lg">
                {tag.name}
              </Button>
              <p className="text-sm text-muted-foreground">
                {tag.count.toLocaleString()} questions
              </p>
              <p className="text-sm">
                {tag.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
