import type { NextFunction, Request, Response } from "express";
import businessService from "../services/business.service.js";

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const business = await businessService.list();

        if (res.statusCode === 200) {
            console.log('in if', res.statusCode);
            return res.status(201).json(business);
        }
        return res.status(204).json();
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updated = await businessService.update(req.body);
        return res.status(201).json(updated);
    } catch (error) {
        next(error);
    }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;

        const removed = await businessService.remove(id);
        return res.status(201).json(removed);
    } catch (error) {
        next(error);
    }
};

export default { list, update, remove };
