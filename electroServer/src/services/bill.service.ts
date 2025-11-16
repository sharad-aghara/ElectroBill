import type { Bill } from "@prisma/client";
import { prisma } from "../prisma/client.js";
import type { JsonArray } from "@prisma/client/runtime/client";

const list = (
    fromDt: Date,
    toDt: Date
) : Promise<Bill[]> => {
    return prisma.bill.findMany({
        where: { date: { 
            gte: fromDt,
            lte: toDt
        }}
    })
}

const create = (data: {
    billNumber: string;
    date: Date;
    items: JsonArray;
    subtotal: number;
    gstPercentage: number;
    gstAmount: number;
    total: number;
}): Promise<Bill> => {
    return prisma.bill.create({ data });
};

export default { list, create }