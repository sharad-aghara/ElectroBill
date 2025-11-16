import type { Color } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<Color[]> => {
    return await prisma.color.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    name: string;
    price: number;
    active: boolean;
}): Promise<Color> => {
    return await prisma.color.create({ data });
};

const update = async (
    id: string,
    data: Partial<Pick<Color, "name" | "price" | "active">>
): Promise<Color> => {
    return prisma.color.update({
        where: { id },
        data,
    });
};

const remove = async (id: string): Promise<Color> => {
    return prisma.color.delete({
        where: { id },
    });
};

export default { list, create, update, remove };