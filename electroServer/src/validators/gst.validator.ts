import { z } from "zod";

export const createGSTSchema = z.object({
    name: z.string().min(3),
    percentage: z.float64(),
    active: z.boolean(),
});

export const updateGSTSchema = z.object({
    name: z.string().min(3).optional(),
    percentage: z.float64().optional(),
    active: z.boolean(),
});
