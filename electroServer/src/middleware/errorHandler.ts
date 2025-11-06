import type { NextFunction, Request, Response } from "express";

export default function errorHandler(
    err: any,
    _req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err);

    if (err?.code === "P2002") {
        return res
            .status(400)
            .json({ error: "Unique constraint failed", meta: err.meta });
    }

    if (err?.code === "P2025") {
        return res
            .status(400)
            .json({ error: "Object not found", meta: err.meta });
    }

    res.status(err?.status || 500).json({
        error: err?.message || "Internal Server Error",
    });
}
