import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  reputation: integer("reputation").default(0),
  createdAt: timestamp("created_at").defaultNow()
});

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  preview: text("preview").notNull(),
  upvotes: integer("upvotes").default(0),
  answers: integer("answers").default(0),
  authorId: integer("author_id").notNull().references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  tags: text("tags").array().notNull()
});

export const answers = pgTable("answers", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  upvotes: integer("upvotes").default(0),
  isAccepted: boolean("is_accepted").default(false),
  questionId: integer("question_id").notNull().references(() => questions.id),
  authorId: integer("author_id").notNull().references(() => users.id),
  createdAt: timestamp("created_at").defaultNow()
});

// Define relations
export const questionsRelations = relations(questions, ({ one, many }) => ({
  author: one(users, {
    fields: [questions.authorId],
    references: [users.id]
  }),
  answers: many(answers)
}));

export const answersRelations = relations(answers, ({ one }) => ({
  question: one(questions, {
    fields: [answers.questionId],
    references: [questions.id]
  }),
  author: one(users, {
    fields: [answers.authorId],
    references: [users.id]
  })
}));

export const usersRelations = relations(users, ({ many }) => ({
  questions: many(questions),
  answers: many(answers)
}));

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  reputation: true,
  createdAt: true
});

export const insertQuestionSchema = createInsertSchema(questions).omit({
  id: true,
  upvotes: true,
  answers: true,
  createdAt: true
});

export const insertAnswerSchema = createInsertSchema(answers).omit({
  id: true,
  upvotes: true,
  isAccepted: true,
  createdAt: true
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;

export type Answer = typeof answers.$inferSelect;
export type InsertAnswer = z.infer<typeof insertAnswerSchema>;