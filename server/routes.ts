import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { onboardingSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  // Set up authentication routes
  setupAuth(app);

  // Onboarding route
  app.post("/api/onboarding", async (req, res, next) => {
    try {
      if (!req.isAuthenticated()) {
        return res.sendStatus(401);
      }

      const data = onboardingSchema.parse(req.body);
      const updatedUser = await storage.updateUser(req.user.id, {
        ...data,
        onboardingCompleted: true,
      });

      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}