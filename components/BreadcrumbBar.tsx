import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbBarProps {
  page: string;
}

export default function BreadcrumbBar({ page }: BreadcrumbBarProps) {
  return (
    <div className="hidden md:flex items-center gap-1.5 px-6 py-2.5 bg-white border-b border-gray-100 flex-shrink-0 text-sm">
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
      <span className="text-gray-900 font-medium">{page}</span>
    </div>
  );
}
