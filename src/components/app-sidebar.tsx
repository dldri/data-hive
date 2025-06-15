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
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { ChartNoAxesCombined, DatabaseZap, FileChartColumn, FileStack, Layers, LayoutDashboard, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { NavUser } from "./nav-user"
import * as React from "react"

const navData = {
    navMain: [
        {
            title: "Refurbishment Services",
            items: [
                {
                    title: "Dashboard",
                    url: "/dashboard",
                    icon: LayoutDashboard,
                },
                {
                    title: "Projects",
                    url: "/projects",
                    icon: FileStack,
                },
                {
                    title: "Customers",
                    url: "#",
                    icon: Users,
                },
                {
                    title: "Reports",
                    url: "#",
                    icon: FileChartColumn,
                },
                {
                    title: "Financials",
                    url: "#",
                    icon: ChartNoAxesCombined,
                },
                {
                    title: "Calendar",
                    url: "#",
                    icon: FileStack,
                },
            ],
        },
        {
            title: "MDR",
            items: [
                {
                    title: "MDR Register",
                    url: "/mdr",
                    icon: Layers,
                },
            ],
        },
    ],
}


export async function AppSidebar() {
    const supabase = await createClient()

    const { data: supabaseData, error } = await supabase.auth.getUser()
    if (error || !supabaseData?.user) {
        redirect('/auth/login')
    }
    const userData = supabaseData.user.user_metadata

    return (
        <Sidebar collapsible="icon" /*{...props}*/>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <span className="flex align-middle">
                                <DatabaseZap />
                                <span>PROK | Data Hive</span>
                            </span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator className="mx-0" />
            <SidebarContent>
                {}
                {navData.navMain.map((item) => (
                    <React.Fragment key={item.title}>
                        < SidebarGroup key={item.title} >
                            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild >
                                                <span>
                                                    {item.icon && <item.icon />}
                                                    <a href={item.url}>{item.title}</a>
                                                </span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarSeparator className="mx-0" />
                    </React.Fragment>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userData} />
            </SidebarFooter>

        </Sidebar>
    )
}
