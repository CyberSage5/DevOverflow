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
          <Badge variant="default" className="bg-green-500 w-2 h-2 rounded-full p-0" />
          Operational
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
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                Operational
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
            <p className="text-sm text-muted-foreground">No incidents reported in the last 90 days.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
