import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex gap-2 p-2">
                        <div className="flex items-center h-8">
                            <SidebarTrigger />
                        </div>
                    </header>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
