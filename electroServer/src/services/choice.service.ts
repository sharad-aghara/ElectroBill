import type { Choice } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<Choice[]> => {
    return prisma.choice.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    name: string;
    price: number;
    active: boolean;
}): Promise<Choice> => {
    return prisma.choice.create({ data });
};

const update = async (
    id: string,
    data: Partial<Pick<Choice, "name" | "price" | "active">>
): Promise<Choice> => {
    return prisma.choice.update({
        where: { id },
        data,
    });
};

const remove = async (id: string): Promise<Choice> => {
    return prisma.choice.delete({
        where: { id, },
    });
};

export default { list, create, update, remove };
