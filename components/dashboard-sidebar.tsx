"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, LayoutGrid, BarChart3 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

const navItems = [
  { href: "/dashboard", label: "Boards", icon: LayoutGrid },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
];

// ✅ Declare NavLinks outside
export function NavLinks({
  pathname,
  isMobile = false,
  onClose = () => {},
}: {
  pathname: string;
  isMobile?: boolean;
  onClose?: () => void;
}) {
  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") return true;
    if (href !== "/dashboard" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div
      className={
        isMobile ? "flex flex-col gap-1" : "flex flex-col gap-1 sticky top-20"
      }
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={isMobile ? onClose : undefined}
          >
            <Button
              variant={active ? "default" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Icon size={18} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2 font-bold text-lg">
              {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <span>Kanban</span> */}
              <Logo className="text-2xl"/>
            </div>
          </div>
          <div className="p-6">
            <NavLinks
              pathname={pathname}
              isMobile={true}
              onClose={() => setOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r border-border bg-card min-h-screen fixed left-0 top-16 pt-6">
        <div className="px-6">
          <NavLinks pathname={pathname} />
        </div>
      </aside>
    </>
  );
}
