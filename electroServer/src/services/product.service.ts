import type { Product } from "@prisma/client";
import { prisma } from "../prisma/client.js";

const list = async (): Promise<Product[]> => {
    return prisma.product.findMany({ orderBy: { name: "asc" } });
};

const create = async (data: {
    categoryId: string;
    name: string;
    price: number;
    active: boolean;
}): Promise<Product> => {
    return prisma.product.create({ data });
};

const update = async (
    id: string,
    data: Partial<Pick<Product, "categoryId" | "name" | "price" | "active">>
): Promise<Product> => {
    return prisma.product.update({
        where: { id },
        data,
    });
};

const remove = async (id: string): Promise<Product> => {
    return prisma.product.delete({
        where: { id },
    });
};

export default { list, create, update, remove };