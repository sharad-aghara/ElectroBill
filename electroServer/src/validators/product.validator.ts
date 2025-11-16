import { z } from "zod";

export const createProuctSchema = z.object({
    categoryId: z.string(),
    name: z.string().min(3),
    price: z.number(),
    active: z.boolean(),
});

export const updateProductSchema = z.object({
    categoryId: z.string().optional(),
    name: z.string().min(3).optional(),
    active: z.boolean().optional(),
});
