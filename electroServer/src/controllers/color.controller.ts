import type { NextFunction, Request, Response } from "express";
import colorService from "../services/color.service.js";

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await colorService.list();
        return res.json(items);
    } catch (error) {
        next(error);
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await colorService.create(req.body);
        return res.status(201).json(created);
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        const payload = req.body;

        const updated = await colorService.update(id, payload);
        return res.status(201).json(updated);
    } catch (error) {
        next(error);
    }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;

        const removed = await colorService.remove(id);
        return res.status(201).json(removed);
    } catch (error) {
        next(error);
    }
};

export default { list, create, update, remove };
