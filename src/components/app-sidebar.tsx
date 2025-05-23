import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard } from "lucide-react"

const data = {
    navMain: [
        {
            title: "Refurbishment Services",
            url: "#",
            items: [
                {
                    title: "Dashboard",
                    url: "#",
                    icon: LayoutDashboard,
                },
            ],
        },
    ],
}

export function AppSidebar() {
    return (
        <Sidebar /*{...props}*/>
            <SidebarHeader className="inline-flex">
                PROK | Data Hive
            </SidebarHeader>
            <SidebarContent>
                {}
                {data.navMain.map((item) => (
                    < SidebarGroup key={item.title} >
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild >
                                            <a href={item.url}>{item.title}</a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
