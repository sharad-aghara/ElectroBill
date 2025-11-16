import { z } from 'zod';

export const createChoiceSchema = z.object({
    name: z.string().min(3),
    price: z.float64(),
    active: z.boolean()
});

export const updateChoiceScheme = z.object({
    name: z.string().min(3).optional(),
    price: z.float64().optional(),
    active: z.boolean().optional()
});