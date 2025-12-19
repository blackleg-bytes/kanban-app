import type React from "react"
import DashboardNavbar from "@/components/dashboard-navbar"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar />
        {/* Main content area with left margin on desktop to avoid sidebar overlap */}
        <main className="flex-1 md:ml-64 w-full">{children}</main>
      </div>
    </div>
  )
}
