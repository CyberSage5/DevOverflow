import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function StatusButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Badge variant="default" className="bg-yellow-500 w-2 h-2 rounded-full p-0" />
          Partial Outage
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>System Status</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">API</span>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                Partial Outage
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Database</span>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                Operational
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Search</span>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                Operational
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Recent Incidents</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-yellow-500">Authentication Issues</p>
                <p className="text-muted-foreground mt-1">
                  We're experiencing some issues with user registration and authentication.
                  Our team is working on a fix. Last updated: 5 minutes ago.
                </p>
              </div>
              <div>
                <p className="font-medium text-green-500">Database Migration Completed</p>
                <p className="text-muted-foreground mt-1">
                  Successfully completed database schema updates to support new user features.
                  Resolved at: Feb 5, 2024 11:55 PM UTC
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}