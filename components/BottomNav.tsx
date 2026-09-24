"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart2,
  FolderOpen,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/", icon: LayoutDashboard },
  { href: "/analytics", icon: BarChart2 },
  { href: "/projects", icon: FolderOpen },
  { href: "/team", icon: Users },
  { href: "/settings", icon: Settings },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around h-14 z-40">
      {navItems.map(({ href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-colors
              ${active ? "text-blue-600" : "text-gray-400"}`}
          >
            {active && (
              <div className="w-5 h-0.5 rounded-full bg-blue-600 mb-1" />
            )}
            <Icon className="w-5 h-5" />
          </Link>
        );
      })}
    </nav>
  );
}
