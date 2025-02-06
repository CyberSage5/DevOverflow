
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex gap-6">
          <div className="w-48">
            <Avatar className="w-48 h-48">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-2">John Doe</h1>
            <p className="text-muted-foreground mb-4">Member since Jan 2024</p>
            
            <div className="grid grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-semibold">123</div>
                  <div className="text-sm text-muted-foreground">Reputation</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-semibold">45</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-semibold">67</div>
                  <div className="text-sm text-muted-foreground">Answers</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-semibold">12</div>
                  <div className="text-sm text-muted-foreground">Badges</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Tabs defaultValue="answers">
          <TabsList>
            <TabsTrigger value="answers">Answers</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="bounties">Bounties</TabsTrigger>
          </TabsList>
          {/* Add content for each tab */}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
