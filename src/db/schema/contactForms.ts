import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const contactForms = pgTable('contact_forms', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
}); 