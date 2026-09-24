"use client";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BottomNav from "./BottomNav";
import Toolbar from "./Toolbar";
import BreadcrumbBar from "./BreadcrumbBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  breadcrumb: string;
}

export default function DashboardLayout({ children, breadcrumb }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <BreadcrumbBar page={breadcrumb} />
        <Toolbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
