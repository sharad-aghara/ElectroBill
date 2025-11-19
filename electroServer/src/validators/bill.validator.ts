// src/validators/bill.validator.ts
import { z } from "zod";

export const BillItemSchema = z.object({
    productId: z.string().optional(), // optional if you store name only
    name: z.string(),
    quantity: z.number().min(1),
    price: z.number().min(0),
    gstPercentage: z.number().min(0).max(100).optional().default(0),
    extras: z
        .array(
            z.object({
                name: z.string(),
                price: z.number().min(0),
            })
        )
        .optional()
        .default([]),
});

// request body for creating bill
export const CreateBillSchema = z.object({
    date: z.string().optional(), // ISO string or omitted -> server uses now
    items: z.array(BillItemSchema).nonempty(),
    // optional override fields (we'll compute totals server-side)
    billNumber: z.string().optional(),
});

export type CreateBillInput = z.infer<typeof CreateBillSchema>;
