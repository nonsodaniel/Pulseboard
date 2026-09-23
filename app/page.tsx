import DashboardLayout from "@/components/DashboardLayout";
import KpiCard from "@/components/KpiCard";
import RevenueChart from "@/components/RevenueChart";
import ProjectsTable from "@/components/ProjectsTable";
import ActivityTable from "@/components/ActivityTable";
import { kpiData } from "@/lib/data";

export default function DashboardPage() {
  return (
    <DashboardLayout breadcrumb="Dashboard">
      <div className="space-y-6">
        {/* Title row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Nonso</p>
          </div>
          <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4">
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* Chart */}
        <RevenueChart />

        {/* Table + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProjectsTable />
          </div>
          <div>
            <ActivityTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
