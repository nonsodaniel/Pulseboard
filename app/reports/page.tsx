import DashboardLayout from "@/components/DashboardLayout";
import { reportsData } from "@/lib/data";
import { FileText, Download } from "lucide-react";

const typeColors: Record<string, string> = {
  Financial: "bg-green-100 text-green-700",
  Analytics: "bg-blue-100 text-blue-700",
  Operations: "bg-purple-100 text-purple-700",
  HR: "bg-orange-100 text-orange-700",
  Security: "bg-red-100 text-red-700",
};

export default function ReportsPage() {
  return (
    <DashboardLayout breadcrumb="Reports">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Reports</h1>

        <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
          {reportsData.map((report) => (
            <div key={report.id} className="flex items-center gap-4 px-5 py-4">
              <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{report.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{report.date}</p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${typeColors[report.type]}`}
              >
                {report.type}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                  report.status === "Ready"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {report.status}
              </span>
              <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex-shrink-0">
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
