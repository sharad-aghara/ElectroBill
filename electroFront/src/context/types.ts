export interface Category {
    id: string;
    name: string;
    active: boolean;
}

export interface Product {
    id: string;
    categoryId: string;
    name: string;
    price: number;
    active: boolean;
}

export interface Choice {
    id: string;
    name: string;
    Price: number;
    active: boolean;
}

export interface Extra {
    id: string;
    name: string;
    price: number;
    active: boolean;
}

export interface Color {
    id: string;
    name: string;
    price: number;
    active: boolean;
}

export interface GST {
    id: string;
    name: string;
    percentage: number;
    active: boolean;
}

export interface BusinessInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    gstNumber: string;
}

export interface BillingItem {
    // id: string;
    productId: string;
    productName: string;
    basePrice: number;
    choiceId?: string;
    choiceName?: string;
    choicePrice?: number;
    extraIds?: string[];
    extraNames?: string[];
    extraPrices?: number[];
    colorId?: string;
    colorName?: string;
    colorPrice?: number;
    quantity: number;
    total: number;
}

export interface Bill {
    id: string;
    billNumber: string;
    date: string;
    items: BillingItem[];
    subtotal: number;
    gstPercentage: number;
    gstAmount: number;
    total: number;
}

export interface DataContextType {
    categories: Category[];
    products: Product[];
    choices: Choice[];
    extras: Extra[];
    colors: Color[];
    gsts: GST[];
    businessInfo: BusinessInfo;
    bills: Bill[];

    // Type Utils (topic name) -> Omit: will create a type by omitting(excluding) 'id' from Category
    addCategory: (category: Omit<Category, "id">) => void;
    updateCategory: (id: string, category: Omit<Category, "id">) => void;
    deleteCategory: (id: string) => void;

    addProduct: (product: Omit<Product, "id">) => void;
    updateProduct: (id: string, product: Omit<Product, "id">) => void;
    deleteProduct: (id: string) => void;

    addChoice: (choice: Omit<Choice, "id">) => void;
    updateChoice: (id: string, choice: Omit<Choice, "id">) => void;
    deleteChoice: (id: string) => void;

    addExtra: (extra: Omit<Extra, "id">) => void;
    updateExtra: (id: string, extra: Omit<Extra, "id">) => void;
    deleteExtra: (id: string) => void;

    addColor: (color: Omit<Color, "id">) => void;
    updateColor: (id: string, color: Omit<Color, "id">) => void;
    deleteColor: (id: string) => void;

    addGST: (gst: Omit<GST, "id">) => void;
    updateGST: (id: string, gst: Omit<GST, "id">) => void;
    deleteGST: (id: string) => void;

    updateBusinessInfo: (info: BusinessInfo) => void;

    addBill: (bill: Omit<Bill, "id">) => void;
}
