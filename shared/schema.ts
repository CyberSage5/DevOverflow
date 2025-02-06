import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  location: text("location"),
  interests: text("interests").array(),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  reputation: integer("reputation").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  isAdmin: boolean("is_admin").default(false),
  // for gamification
  badges: text("badges").array().default([]),
  questionCount: integer("question_count").default(0),
  answerCount: integer("answer_count").default(0),
  acceptedAnswerCount: integer("accepted_answer_count").default(0)
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  reputation: true,
  createdAt: true,
  onboardingCompleted: true,
  isAdmin: true,
  badges: true,
  questionCount: true,
  answerCount: true,
  acceptedAnswerCount: true
});

export const onboardingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  location: z.string().min(1, "Location is required"),
  interests: z.array(z.string()).min(1, "Select at least 1 interest").max(7, "You can select up to 7 interests"),
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Onboarding = z.infer<typeof onboardingSchema>;

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  preview: text("preview").notNull(),
  upvotes: integer("upvotes").default(0),
  answers: integer("answers").default(0),
  authorId: integer("author_id").notNull().references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  tags: text("tags").array().notNull(),
  bountyAmount: integer("bounty_amount").default(0),
  bountyExpiresAt: timestamp("bounty_expires_at"),
  viewCount: integer("view_count").default(0),
  hasAcceptedAnswer: boolean("has_accepted_answer").default(false),
  images: text("images").array(),
  lastActivityAt: timestamp("last_activity_at").defaultNow()
});

export const votes = pgTable("votes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionId: integer("question_id").references(() => questions.id),
  answerId: integer("answer_id").references(() => answers.id),
  value: integer("value").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  authorId: integer("author_id").notNull().references(() => users.id),
  questionId: integer("question_id").references(() => questions.id),
  answerId: integer("answer_id").references(() => answers.id),
  createdAt: timestamp("created_at").defaultNow()
});

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  usageCount: integer("usage_count").default(0)
});

export const tagFollows = pgTable("tag_follows", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  tagId: integer("tag_id").notNull().references(() => tags.id),
  createdAt: timestamp("created_at").defaultNow()
});

export const savedQuestions = pgTable("saved_questions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionId: integer("question_id").notNull().references(() => questions.id),
  createdAt: timestamp("created_at").defaultNow()
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

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;

export type Answer = typeof answers.$inferSelect;
export type InsertAnswer = z.infer<typeof insertAnswerSchema>;