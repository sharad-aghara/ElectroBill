import apiRequest from "@/api";
import { useEffect, useState, type FC, type ReactNode } from "react";
import { DataContext } from "./DataContext";
import type {
    Bill,
    BusinessInfo,
    Category,
    Choice,
    Color,
    Extra,
    GST,
    Product,
} from "./types";

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
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

    //#region Load and Save to localStorage
    /*
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
    */
    //#endregion

    //#region Load from development database file through api
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await apiRequest<Category[]>("/categories", {
                    method: "GET",
                });
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };

        fetchCategories();
    }, []);
    //#endregion

    //#region Save to localStorage on data change
    /*
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
    */
    //#endregion

    //#region CRUD Operations - local state management
    /*
    // category CRUD - local storage
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
    */

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
    //#endregion

    //#region CRUD Operations - to be implemented with API calls

    // category CRUD
    // category CRUD - development database file through api
    const addCategory = async (category: Omit<Category, "id">) => {
        try {
            const newCategory = await apiRequest<Category>("/categories", {
                method: "POST",
                body: JSON.stringify(category),
            });
            setCategories([...categories, newCategory]);
        } catch (error) {
            console.error("Failed to add category:", error);
        }
    };

    const updateCategory = async (
        id: string,
        category: Omit<Category, "id">
    ) => {
        try {
            const updateData = await apiRequest<Category>("/categories/" + id, {
                method: "PUT",
                body: JSON.stringify(category),
            });

            setCategories((prev) =>
                prev.map((c) => (c.id === id ? updateData : c))
            );
        } catch (error) {
            console.error("Failed to update category:", error);
        }
    };

    const deleteCategory = async (id: string) => {
        try {
            apiRequest<void>("/categories/" + id, {
                method: "DELETE",
            });

            setCategories((prev) => prev.filter((c) => c.id !== id));
        } catch (error) {
            console.error("Failed to delete category:", error);
        }
    };

    //#endregion

    //#region Return Provider
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
        // #endregion
    );
};
