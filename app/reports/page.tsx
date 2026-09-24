import DashboardLayout from "@/components/DashboardLayout";
import { reportsData } from "@/lib/data";

export default function ReportsPage() {
  return (
    <DashboardLayout breadcrumb="Reports">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Reports</h1>
        <div>
          {reportsData.map((report) => (
            <div key={report.id} className="p-1">
              {report.title}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
