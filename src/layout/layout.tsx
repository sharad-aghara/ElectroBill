import { SidebarProvider } from "../components/ui/sidebar";
import { AppNavbar } from "./app-navbar-component/AppNavbar";
import { AppSidebar } from "./app-sidebar-component/AppSidebar";

export const Layout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <AppNavbar />
        </SidebarProvider>
    );
};
