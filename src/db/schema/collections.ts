import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const collections = pgTable('collections', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(), // references user table
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const collectionProducts = pgTable('collection_products', {
  id: uuid('id').primaryKey().defaultRandom(),
  collectionId: uuid('collection_id').notNull().references(() => collections.id),
  productId: uuid('product_id').notNull(),
  addedAt: timestamp('added_at').defaultNow(),
}); 