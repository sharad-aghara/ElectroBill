import type { GST } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<GST[]> => {
    return prisma.gST.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    name: string;
    percentage: number;
    active: boolean;
}): Promise<GST> => {
    return prisma.gST.create({ data });
};

const update = async (
    id: string,
    data: Partial<Pick<GST, "name" | "percentage" | "active">>
): Promise<GST> => {
    return prisma.gST.update({
        where: { id },
        data,
    });
};

const remove = async (id: string): Promise<GST> => {
    return prisma.gST.delete({
        where: { id },
    });
};

export default { list, create, update, remove };
