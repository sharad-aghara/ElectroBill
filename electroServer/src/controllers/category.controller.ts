import type { NextFunction, Request, Response } from "express";
import categoryService from "../services/category.service.js";

const list = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await categoryService.list();
        res.json(items);
    } catch (err) {
        next(err);
    }
};

const create = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const created = await categoryService.create(req.body);
        res.status(201).json(created);
    } catch(err) {
        next(err);
    }
}

const update = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const created = await categoryService.update(req.body);
        res.status(201).json(created);
    } catch(err) {
        next(err);
    }
}

const remove = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const created = await categoryService.remove(req.body);
        res.status(201).json(created);
    } catch(err) {
        next(err);
    }
}

export default { list, create, update, remove };
