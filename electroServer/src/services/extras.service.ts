import type { Extra } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<Extra[]> => {
    return prisma.extra.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    name: string;
    price: number;
    active: boolean;
}): Promise<Extra> => {
    return prisma.extra.create({ data });
};

const update = async (
    id: string,
    data: Partial<Pick<Extra, "name" | "price" | "active">>
): Promise<Extra> => {
    return prisma.extra.update({
        where: { id },
        data,
    });
};

const remove = async (id: string): Promise<Extra> => {
    return prisma.extra.delete({
        where: { id },
    });
};

export default { list, create, update, remove };
