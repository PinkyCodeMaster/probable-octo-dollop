import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  senderId: uuid('sender_id').notNull(), // references user table
  receiverId: uuid('receiver_id').notNull(), // references user table
  content: text('content').notNull(),
  sentAt: timestamp('sent_at').defaultNow(),
  readAt: timestamp('read_at'),
}); 