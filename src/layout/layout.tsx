import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LayoutGrid, Menu, Package, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const navigation = [
    { id: "billing" as const, lable: "Billing", icon: ShoppingCart },
    { id: "categories" as const, lable: "Categories", icon: LayoutGrid },
    { id: "products" as const, lable: "Products", icon: Package },
];

type Page = "billing" | "categories" | "products";

export const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currenPage, setCurrentPage] = useState<Page>("billing");

    const renderPage = () => {
        switch (currenPage) {
            case "billing":
                return <div>Billing Page</div>;
            case "categories":
                return <div>Categories Page</div>;
            case "products":
                return <div>Products Page</div>;
            default:
                return <div>Default Page - Billing Page</div>;
        }
    };

    return (
        <div className="h-screen flex overflow-hidden bg-background">
            {/* Sidebar - Start */}
            <aside
                className={`${sidebarOpen ? "w-64" : "w-20"}
                    transition-all duration-300 border-r bg-card overflow-hidden`}
            >
                <div className="h-full flex flex-col">
                    <div className="p-5">
                        <h2 className="text-2xl">ElectroBill</h2>
                    </div>

                    {/* <Separator /> */}
                    <hr className="border-border" />

                    <div className="flex-1">
                        <nav className="p-4 space-y-2">
                            {/* Navigation items go here */}
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = currenPage === item.id;
                                return (
                                    // <Button
                                    //     key={item.id}
                                    //     variant={isActive ? "default" : "ghost"}
                                    //     className="w-full flex justify-start gap-3 h-12 align-bottom"
                                    //     onClick={() => setCurrentPage(item.id)}
                                    // >
                                    //     <Icon className="h-5 w-5 " />
                                    //     {item.lable}
                                    // </Button>

                                    <Stack spacing={2} direction="column">
                                        <Button
                                            key={item.id}
                                            variant={
                                                isActive ? "contained" : "text"
                                            }
                                            sx={
                                                isActive
                                                    ? {
                                                          backgroundColor:
                                                              "black",
                                                          color: "white",
                                                          "&:hover": {
                                                              backgroundColor:
                                                                  "#333",
                                                          },
                                                          justifyContent:
                                                              "flex-start",
                                                      }
                                                    : {
                                                          color: "black",
                                                          "&:hover": {
                                                              backgroundColor:
                                                                  "#e0e0e0",
                                                          },
                                                          justifyContent:
                                                              "flex-start",
                                                      }
                                            }
                                            onClick={() =>
                                                setCurrentPage(item.id)
                                            }
                                            className="w-full gap-3 h-12"
                                        >
                                            <Icon className="h-5 w-5" />
                                            {item.lable}
                                        </Button>
                                    </Stack>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>
            {/* Sidebar - End */}

            {/* Main Content - Start */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header with Toggle */}
                <div className="border-b p-4 flex items-center gap-4">
                    <Button
                        variant="text"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="h-10 w-10"
                        sx={{ color: "black" }}
                    >
                        {sidebarOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>

                    <h1 className="text-xl">
                        {navigation.find((nav) => nav.id === currenPage)?.lable}
                    </h1>
                </div>

                {/* Page Content - Start */}
                <div className="flex-1 overflow-hidden">{renderPage()}</div>
                {/* Page Content - End */}
            </main>
            {/* Main Content - End */}
        </div>
    );
};
