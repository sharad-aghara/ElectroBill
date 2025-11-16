import { z } from "zod";

export const createExtrasSchema = z.object({
    name: z.string().min(3),
    price: z.float64(),
    active: z.boolean(),
});

export const updateExtrasSchema = z.object({
    name: z.string().optional(),
    price: z.float64().optional(),
    active: z.boolean().optional(),
});
