import { SidebarTrigger } from "../../components/ui/sidebar";

export const AppNavbar = () => {
    return (
        <nav className="fixed h-16 bg-gray-800 top-0 left-0 right-0 flex items-center px-4 shadow-md z-10">
            <div className="flex items-center gap-4 w-full">
                <div className="h-full flex items-center">
                    <SidebarTrigger className="bg-gray-300" />
                </div>
                <div>
                    <h3 className="text-white">
                        <span>ElectroBill</span>
                    </h3>
                </div>
            </div>
        </nav>
    );
};
