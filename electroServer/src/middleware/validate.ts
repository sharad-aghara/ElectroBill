import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod/v3";

export const validate =
    (schema: ZodSchema<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success)
            return res.status(400).json({ error: result.error.format() });

        req.body = result.data;
        next();
    };
