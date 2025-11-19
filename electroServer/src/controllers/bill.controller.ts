import type { NextFunction, Request, Response } from "express";
import { BillService } from "../services/bill.service.js";

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const created = await BillService.createBill(req.body);
        return res.status(201).json(created);
    } catch (err) {
        next(err);
    }
};

export const list = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { skip, take } = _req.query;
        const bills = await BillService.listBills({
            skip: Number(skip) || 0,
            take: Math.min(1000, Number(take) || 100),
        });
        return res.json(bills);
    } catch (err) {
        next(err);
    }
};

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id as string;
        const bill = await BillService.getBill(id);
        if (!bill) return res.status(404).json({ error: "Not found" });
        return res.json(bill);
    } catch (err) {
        next(err);
    }
};

export const remove = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id: string = req.params.id as string;
        await BillService.deleteBill(id);
        return res.json({ success: true });
    } catch (err) {
        next(err);
    }
};

export default { create, list, get, remove };
