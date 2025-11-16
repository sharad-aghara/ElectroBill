import type { NextFunction, Request, Response } from "express";
import categoryService from "../services/category.service.js";
import type { Category } from "@prisma/client";

const list = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        // console.log("Category controller list initialized");
        const items = await categoryService.list();
        res.json(items);
    } catch (err) {
        // console.log("Category controller err: ", err);
        next(err);
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await categoryService.create(req.body);
        res.status(201).json(created);
    } catch (err) {
        next(err);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        const payload: Category = req.body;

        const updated = await categoryService.update(id, payload);
        res.status(201).json(updated);
    } catch (err) {
        next(err);
    }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        // console.log("id: ", id);

        const removed = await categoryService.remove(id);
        res.status(201).json(removed);
    } catch (err) {
        next(err);
    }
};

export default { list, create, update, remove };
