import { z } from 'zod';

export const listBillSchema = z.object({
    fromDt: z.date(),
    toDt: z.date()
})