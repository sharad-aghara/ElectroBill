import { prisma } from "../prisma/client.js";
import type { CreateBillInput } from "../validators/bill.validator.js";

function computeTotals(items: CreateBillInput["items"]) {
    let subtotal = 0;
    let totalGstAmount = 0;

    const normalized = items.map((it) => {
        const extrasTotal = (it.extras || []).reduce((s, e) => s + e.price, 0);
        const lineBase = (it.price || 0) * (it.quantity || 1) + extrasTotal;
        const gstPercent = it.gstPercentage ?? 0;
        const gstAmount = (lineBase * gstPercent) / 100;
        subtotal += lineBase;
        totalGstAmount += gstAmount;

        return {
            ...it,
            extras: it.extras ?? [],
            lineBase,
            gstAmount,
        };
    });

    const total = subtotal + totalGstAmount;

    return {
        items: normalized,
        subtotal: Number(subtotal.toFixed(2)),
        gstAmount: Number(totalGstAmount.toFixed(2)),
        total: Number(total.toFixed(2)),
    };
}

async function generateBillNumber() {
    const count = await prisma.bill.count();
    return `BILL-${String(count + 1).padStart(6, "0")}`;
}

async function createBill(input: CreateBillInput) {
    const date = input.date ? new Date(input.date) : new Date();

    const totals = computeTotals(input.items);

    const billNumber = input.billNumber ?? (await generateBillNumber());

    const created = await prisma.bill.create({
        data: {
            billNumber,
            date,
            items: totals.items,
            subtotal: totals.subtotal,
            gstPercentage:
                input.items.length > 0
                    ? (input.items[0]?.gstPercentage ?? 0)
                    : 0, // optional: store a representative GST %
            gstAmount: totals.gstAmount,
            total: totals.total,
        },
    });

    return created;
}

async function listBills({ skip = 0, take = 100 } = {}) {
    return prisma.bill.findMany({
        orderBy: { date: "desc" },
        skip,
        take,
    });
}

async function getBill(id: string) {
    return prisma.bill.findUnique({ where: { id } });
}

async function deleteBill(id: string) {
    return prisma.bill.delete({ where: { id } });
}

export const BillService = {
    createBill,
    listBills,
    getBill,
    deleteBill,
};
