import type { NextFunction, Request, Response } from "express";
import choiceService from "../services/choice.service.js";
import type { Choice } from "@prisma/client";

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = await choiceService.list();
        return res.json(payload);
    } catch (error) {
        next(error);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const choice = await choiceService.create(req.body);
        return res.json(choice);
    } catch (error) {
        next(error);
    }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        const payload: Choice = req.body;
        
        const updated = await choiceService.update(id, payload);
        return res.json(updated);
    } catch (error) {
        next(error);
    }
}

const remove = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;

        const removed = await choiceService.remove(id);
        return res.json(removed);
    } catch (error) {
        next(error);
    }
}

export default { list, create, update, remove }