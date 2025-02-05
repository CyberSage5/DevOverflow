import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  preview: text("preview").notNull(),
  upvotes: integer("upvotes").default(0),
  answers: integer("answers").default(0),
  tags: text("tags").array().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  authorName: text("author_name").notNull()
});

export const insertQuestionSchema = createInsertSchema(questions).omit({
  id: true,
  upvotes: true,
  answers: true,
  createdAt: true
});

export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type Question = typeof questions.$inferSelect;
