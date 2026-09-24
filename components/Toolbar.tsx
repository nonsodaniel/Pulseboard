import { Download, SlidersHorizontal, Calendar } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 flex-shrink-0">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filter
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
          <Calendar className="w-3.5 h-3.5" />
          Date range
        </button>
      </div>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
        <Download className="w-3.5 h-3.5" />
        Export
      </button>
    </div>
  );
}
