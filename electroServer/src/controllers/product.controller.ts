import type { Product } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import productService from "../services/product.service.js";

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await productService.list();
        res.json(items);
    } catch (error) {
        next(error);
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await productService.create(req.body);
        res.json(created);
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        const payload: Product = req.body;

        const updated = await productService.update(id, payload);
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;

        const removed = productService.remove(id);
        res.json(removed);
    } catch (error) {
        next(error);
    }
};

export default {
    list,
    create,
    update,
    remove,
};
