import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react";

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

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within DataProvider");
    }
    return context;
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [choices, setChoices] = useState<Choice[]>([]);
    const [extras, setExtras] = useState<Extra[]>([]);
    const [colors, setColors] = useState<Color[]>([]);
    const [gsts, setGSTs] = useState<GST[]>([]);
    const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
        name: "",
        address: "",
        phone: "",
        email: "",
        gstNumber: "",
    });
    const [bills, setBills] = useState<Bill[]>([]);

    // TODO: replace the following with actual implementations
    // load data from localStorage on initial render
    useEffect(() => {
        const loadData = () => {
            const storedCategories = localStorage.getItem("categories");
            const storedProducts = localStorage.getItem("products");
            const storedChoices = localStorage.getItem("choices");
            const storedExtras = localStorage.getItem("extras");
            const storedColors = localStorage.getItem("colors");
            const storedGsts = localStorage.getItem("gsts");
            const storedBusinessInfo = localStorage.getItem("businessInfo");
            const storedBills = localStorage.getItem("bills");

            if (storedCategories) setCategories(JSON.parse(storedCategories));
            if (storedProducts) setProducts(JSON.parse(storedProducts));
            if (storedChoices) setChoices(JSON.parse(storedChoices));
            if (storedExtras) setExtras(JSON.parse(storedExtras));
            if (storedColors) setColors(JSON.parse(storedColors));
            if (storedGsts) setGSTs(JSON.parse(storedGsts));
            if (storedBusinessInfo)
                setBusinessInfo(JSON.parse(storedBusinessInfo));
            if (storedBills) setBills(JSON.parse(storedBills));
        };

        loadData();
    }, []);

    // save to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);
    useEffect(() => {
        localStorage.setItem("choices", JSON.stringify(choices));
    }, [choices]);
    useEffect(() => {
        localStorage.setItem("extras", JSON.stringify(extras));
    }, [extras]);
    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colors));
    }, [colors]);
    useEffect(() => {
        localStorage.setItem("gsts", JSON.stringify(gsts));
    }, [gsts]);
    useEffect(() => {
        localStorage.setItem("businessInfo", JSON.stringify(businessInfo));
    }, [businessInfo]);
    useEffect(() => {
        localStorage.setItem("bills", JSON.stringify(bills));
    }, [bills]);

    // category CRUD
    const addCategory = (category: Omit<Category, "id">) => {
        const newCategory = { ...category, id: Date.now().toString() };
        setCategories([...categories, newCategory]);
    };

    const updateCategory = (id: string, category: Omit<Category, "id">) => {
        setCategories(
            categories.map((c) => (c.id === id ? { ...category, id } : c))
        );
    };

    const deleteCategory = (id: string) => {
        setCategories(categories.filter((c) => c.id !== id));
    };

    // Product CRUD
    const addProduct = (product: Omit<Product, "id">) => {
        const newProduct = { ...product, id: Date.now().toString() };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (id: string, product: Omit<Product, "id">) => {
        setProducts(
            products.map((p) => (p.id === id ? { ...product, id } : p))
        );
    };

    const deleteProduct = (id: string) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    // Choice CRUD
    const addChoice = (choice: Omit<Choice, "id">) => {
        const newChoice = { ...choice, id: Date.now().toString() };
        setChoices([...choices, newChoice]);
    };

    const updateChoice = (id: string, choice: Omit<Choice, "id">) => {
        setChoices(choices.map((c) => (c.id === id ? { ...choice, id } : c)));
    };

    const deleteChoice = (id: string) => {
        setChoices(choices.filter((c) => c.id !== id));
    };

    // Extra CRUD
    const addExtra = (extra: Omit<Extra, "id">) => {
        const newExtra = { ...extra, id: Date.now().toString() };
        setExtras([...extras, newExtra]);
    };

    const updateExtra = (id: string, extra: Omit<Extra, "id">) => {
        setExtras(extras.map((e) => (e.id === id ? { ...extra, id } : e)));
    };

    const deleteExtra = (id: string) => {
        setExtras(extras.filter((e) => e.id !== id));
    };

    // Color CRUD
    const addColor = (color: Omit<Color, "id">) => {
        const newColor = { ...color, id: Date.now().toString() };
        setColors([...colors, newColor]);
    };

    const updateColor = (id: string, color: Omit<Color, "id">) => {
        setColors(colors.map((c) => (c.id === id ? { ...color, id } : c)));
    };

    const deleteColor = (id: string) => {
        setColors(colors.filter((c) => c.id !== id));
    };

    // GST CRUD
    const addGST = (gst: Omit<GST, "id">) => {
        const newGST = { ...gst, id: Date.now().toString() };
        setGSTs([...gsts, newGST]);
    };

    const updateGST = (id: string, gst: Omit<GST, "id">) => {
        setGSTs(gsts.map((g) => (g.id === id ? { ...gst, id } : g)));
    };

    const deleteGST = (id: string) => {
        setGSTs(gsts.filter((g) => g.id !== id));
    };

    // Business Info
    const updateBusinessInfo = (info: BusinessInfo) => {
        setBusinessInfo(info);
    };

    // Bills
    const addBill = (bill: Omit<Bill, "id">) => {
        const newBill = { ...bill, id: Date.now().toString() };
        setBills([...bills, newBill]);
    };

    return (
        <DataContext.Provider
            value={{
                categories,
                products,
                choices,
                extras,
                colors,
                gsts,
                businessInfo,
                bills,
                addCategory,
                updateCategory,
                deleteCategory,
                addProduct,
                updateProduct,
                deleteProduct,
                addChoice,
                updateChoice,
                deleteChoice,
                addExtra,
                updateExtra,
                deleteExtra,
                addColor,
                updateColor,
                deleteColor,
                addGST,
                updateGST,
                deleteGST,
                updateBusinessInfo,
                addBill,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
