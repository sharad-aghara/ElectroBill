import type { Category } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<Category[]> => {
    return prisma.category.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    name: string;
    active?: boolean;
}): Promise<Category> => {
    return prisma.category.create({ data });
};

const update = async (
    id: string,
    data: Partial<Pick<Category, "name" | "active">>
): Promise<Category> => {
    return prisma.category.update({
        where: {
            id,
        },
        data,
    });
};

const remove = async (
    id: string
): Promise<Category> => {
    return prisma.category.delete({
        where: {
            id,
        },
    });
};

export default { list, create, update, remove };
