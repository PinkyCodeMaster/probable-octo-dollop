import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const testimonials = pgTable('testimonials', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(), // references user table
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
}); 