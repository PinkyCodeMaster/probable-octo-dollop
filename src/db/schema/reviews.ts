import { pgTable, uuid, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  reviewerId: uuid('reviewer_id').notNull(), // references user table
  sellerId: uuid('seller_id').notNull(), // references user table
  rating: integer('rating').notNull(),
  comment: text('comment'),
  createdAt: timestamp('created_at').defaultNow(),
}); 