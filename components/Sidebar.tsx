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
  X,
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

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-30 flex flex-col transition-transform duration-300
          ${open ? "translate-x-full" : "-translate-x-full"}
          md:translate-x-0 md:static md:z-auto`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900 text-lg">PulseBoard</span>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded text-gray-500 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
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
    </>
  );
}
