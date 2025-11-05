// prisma.config.ts
import dotenv from "dotenv";
import path from "path";
import { defineConfig, env } from "prisma/config";

dotenv.config({ path: path.resolve(process.cwd(), "prisma", ".env") });

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: { path: "prisma/migrations" },
    engine: "classic",
    datasource: { url: env("DATABASE_URL") },
});
