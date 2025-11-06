import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

export const validate =
    (schema: ZodType<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success)
            return res.status(400).json({ error: result.error.format() });

        req.body = result.data;
        next();
    };
