import type { NextFunction, Request, Response } from "express";
import billService from "../services/bill.service.js";

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const list = await billService.list;
        return res.status(201).json(list);
    } catch (error) {
        next(error);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await billService.create(req.body);
        return res.status(201).json(created);
    } catch (error) {
        next(error);
    }
};

export default { list, create }