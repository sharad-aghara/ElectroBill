import type { BusinessInfo } from "@prisma/client";
import { prisma } from "../prisma/client.js";
import { response } from "express";


const list = async () => {
    const existing = await prisma.businessInfo.findFirst();
    if (existing) {
        return prisma.businessInfo.findFirst();
    } else {
        return response.status(204);
    }
};

const update = async (
    data: Omit<BusinessInfo, "id">
): Promise<BusinessInfo> => {
    const existing = await prisma.businessInfo.findFirst();
    if (existing) {
        return prisma.businessInfo.update({
            where: { id: existing.id },
            data: data,
        });
    }

    return prisma.businessInfo.create({ data });
};

const remove = async (id: string): Promise<BusinessInfo> => {
    return prisma.businessInfo.delete({
        where: { id },
    });
};

export default { update, list, remove };
