import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Tags, 
  PlusCircle, 
  MessageSquare, 
  Trophy,
  User,
  FileQuestion
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { 
    label: "Home",
    icon: Home,
    href: "/dashboard"
  },
  {
    label: "Tags",
    icon: Tags,
    href: "/dashboard/tags"
  },
  {
    label: "My Questions",
    icon: FileQuestion,
    href: "/dashboard/my-questions"
  },
  {
    label: "Discussions",
    icon: MessageSquare,
    href: "/dashboard/discussions"
  },
  {
    label: "Bounty Board",
    icon: Trophy,
    href: "/dashboard/bounties"
  },
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile"
  }
];

export function LeftSidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 p-4 flex flex-col gap-2 sticky top-16 h-[calc(100vh-4rem)]">
      <Button 
        className="w-full mb-4 gap-2" 
        asChild
      >
        <Link href="/dashboard/ask">
          <PlusCircle className="w-4 h-4" />
          Ask a Question
        </Link>
      </Button>

      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
