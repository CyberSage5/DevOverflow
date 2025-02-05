import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  // Set up authentication routes
  setupAuth(app);

  // Additional routes will be added here
  // prefix all routes with /api

  const httpServer = createServer(app);
  return httpServer;
}