import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const dashboard = sqliteTable("dashboard", {
  path: text().primaryKey(),
  secret: text().notNull()
})

export const images = sqliteTable("images", {
  path: text().primaryKey(),
  description: text(),
  author: text(),
})