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
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { NavUser } from "./nav-user"

const navData = {
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

export async function AppSidebar() {
    const supabase = await createClient()

    const { data: supabaseData, error } = await supabase.auth.getUser()
    if (error || !supabaseData?.user) {
        redirect('/auth/login')
    }
    const userData = supabaseData.user.user_metadata

    return (
        <Sidebar collapsible="icon" /*{...props}*/>
            <SidebarHeader className="inline-flex">
                <span>PROK | Data Hive</span>
            </SidebarHeader>
            <SidebarContent>
                {}
                {navData.navMain.map((item) => (
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
            <SidebarFooter>
                <NavUser user={userData} />
            </SidebarFooter>

        </Sidebar>
    )
}
