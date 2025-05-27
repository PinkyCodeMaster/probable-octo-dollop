import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@/db/schema';
import postgres from "postgres";

// if env is development, logger true, else false
const logger = process.env.NODE_ENV === "development" ? true : false;

export const connection = postgres(process.env.DATABASE_URL!);

export const db = drizzle(connection, { schema, logger: logger, });

export type db = typeof db;

export default db;