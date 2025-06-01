import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <div className="flex-col">
                        <header className="flex gap-2 p-2">
                            <div className="flex items-center h-8 gap-2">
                                <SidebarTrigger />
                                <Separator orientation="vertical" />
                            </div>
                        </header>
                        <Separator />
                        <div className="p-2">
                            {children}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
