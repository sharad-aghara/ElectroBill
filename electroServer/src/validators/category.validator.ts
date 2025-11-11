import { z } from "zod";

export const createCategorySchema = z.object({
    name: z.string().min(3),
    active: z.boolean().optional(),
});

export const updateCategorySchema = z.object({
    name: z.string().min(3).optional(),
    active: z.boolean().optional(),
});
