import { type Category } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<Category[]> => {
    return prisma.Category.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    name: string;
    active?: boolean;
}): Promise<Category> => {
    return prisma.Category.create({ data });
};

const update = async (data: {
    id: string;
    name: string;
    active: boolean;
}): Promise<Category> => {
    return prisma.update({
        where: {
            id: data.id,
        },
        data: {
            ...data,
        },
    });
};

const remove = async (data: { id: string }): Promise<Category> => {
    return prisma.delete({
        where: {
            id: data.id,
        },
    });
};

export default { list, create, update, remove };
