import { ReactNode } from "react";
import { LeftSidebar } from "./LeftSidebar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <LeftSidebar />
      <main className="flex-1 min-h-screen border-l">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
