import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema, type Onboarding } from "@shared/schema";
import { Redirect, useLocation } from "wouter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const AVAILABLE_TAGS = [
  "JavaScript", "Python", "Java", "C++", "React", "Node.js", "Vue.js",
  "Angular", "TypeScript", "PHP", "Ruby", "Swift", "Kotlin", "Go",
  "Rust", "SQL", "MongoDB", "DevOps", "AWS", "Docker", "Kubernetes",
  "Machine Learning", "Artificial Intelligence", "Data Science", "Blockchain"
];

export default function Onboarding() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<Onboarding>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      location: "",
      interests: [],
    },
  });

  if (!user || user.onboardingCompleted) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (data: Onboarding) => {
    try {
      await apiRequest("POST", "/api/onboarding", data);
      toast({
        title: "Welcome to DevOverflow!",
        description: "Your profile has been set up successfully.",
      });
      setLocation("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const toggleTag = (tag: string) => {
    const currentTags = form.getValues("interests");
    if (currentTags.includes(tag)) {
      form.setValue("interests", currentTags.filter(t => t !== tag));
    } else if (currentTags.length < 7) {
      form.setValue("interests", [...currentTags, tag]);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-muted/50 flex items-center justify-center py-12 px-4"
    >
      <div className="max-w-md w-full space-y-8 bg-background p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-center">Complete Your Profile</h2>
          <p className="text-muted-foreground text-center mt-2">
            Tell us a bit about yourself to get started
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="City, Country" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interests"
              render={() => (
                <FormItem>
                  <FormLabel>Interests (Select up to 7)</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {AVAILABLE_TAGS.map((tag) => {
                      const isSelected = form.watch("interests").includes(tag);
                      return (
                        <Badge
                          key={tag}
                          variant={isSelected ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Continue to Dashboard
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
