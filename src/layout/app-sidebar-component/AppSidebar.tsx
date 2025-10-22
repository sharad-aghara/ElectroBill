import { House, icons, Plus } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "../../components/ui/sidebar";

// interface LayoutProps {
//     children?: React.ReactNode;
// }

const items = [
    {
        title: "Home",
        url: "/",
        icon: House,
    },
    {
        title: "New",
        url: "/",
        icon: Plus,
    },
    {
        title: "Orders",
        url: "/",
        icon: icons.ReceiptIndianRupee,
    },
];

export const AppSidebar = () => {
    return (
        <Sidebar className="top-16" collapsible="icon">
            <SidebarContent className="">
                <SidebarGroup>
                    {/* This can be used to lable sections */}
                    {/* <SidebarGroupLabel>Applications</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};
