"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart2,
  FolderOpen,
  Users,
  FileText,
  Settings,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Analytics", href: "/analytics", icon: BarChart2 },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Team", href: "/team", icon: Users },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-full flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200 gap-2">
        <Zap className="w-5 h-5 text-blue-600" />
        <span className="font-semibold text-gray-900 text-lg">PulseBoard</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md mb-1 text-sm font-medium transition-colors
                ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
            N
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Nonso Daniel</p>
            <p className="text-xs text-gray-500 truncate">nonso@company.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
