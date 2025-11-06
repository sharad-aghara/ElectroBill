// // prevents multiple clients being created during hot reload / reimport, which can exhaust DB connections.

import { PrismaClient } from "@prisma/client";

declare global {
    // avoid creating multiple clients in dev with HMR
    // eslint-disable-next-line no-var
    var __prisma: PrismaClient;
}

export const prisma =
    global.__prisma ??
    new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["query", "info"] : [],
    });

if (process.env.NODE_ENV === "development") global.__prisma = prisma;
