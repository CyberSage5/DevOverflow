import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";

const CHANGELOGS = [
  {
    version: "1.1.0",
    date: "2024-02-05",
    type: "feature",
    changes: [
      "Added user onboarding flow with profile completion",
      "Implemented light/dark mode theme switching",
      "Added multi-language support (EN, ES, FR)",
      "Created dashboard layout with navigation sidebar",
      "Added questions feed with search and filtering",
      "Enhanced authentication system with improved error handling",
      "Added user reputation system groundwork"
    ]
  },
  {
    version: "1.0.0",
    date: "2024-02-05",
    type: "major",
    changes: [
      "Initial release of Dev Overflow",
      "Basic question and answer functionality",
      "User authentication system",
      "Landing page with trending questions"
    ]
  }
];

export default function Changelog() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold mb-8">Changelog</h1>

      <div className="space-y-6">
        {CHANGELOGS.map((log, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-2xl font-semibold">v{log.version}</h2>
                  <Badge variant="outline" className="text-sm">
                    {log.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{log.date}</span>
                </div>

                <ul className="space-y-2">
                  {log.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="text-muted-foreground">
                      • {change}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}