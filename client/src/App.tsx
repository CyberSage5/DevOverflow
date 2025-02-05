import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Home from "@/pages/Home";
import Documentation from "@/pages/Documentation";
import Changelog from "@/pages/Changelog";
import Auth from "@/pages/Auth";
import Onboarding from "@/pages/Onboarding";
import DashboardHome from "@/pages/dashboard/Home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/docs" component={Documentation} />
      <Route path="/changelog" component={Changelog} />
      <Route path="/auth" component={Auth} />
      <Route path="/onboarding" component={Onboarding} />
      <ProtectedRoute path="/dashboard" component={DashboardHome} />
      <ProtectedRoute path="/dashboard/tags" component={DashboardHome} />
      <ProtectedRoute path="/dashboard/my-questions" component={DashboardHome} />
      <ProtectedRoute path="/dashboard/discussions" component={DashboardHome} />
      <ProtectedRoute path="/dashboard/bounties" component={DashboardHome} />
      <ProtectedRoute path="/dashboard/profile" component={DashboardHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Router />
          <Footer />
        </div>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;