import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const claims = pgTable('claims', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(), // references user table
  orderId: uuid('order_id').notNull(),
  reason: text('reason').notNull(),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
}); 