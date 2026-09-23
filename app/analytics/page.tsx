import DashboardLayout from "@/components/DashboardLayout";
import RevenueChart from "@/components/RevenueChart";

export default function AnalyticsPage() {
  return (
    <DashboardLayout breadcrumb="Analytics">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Analytics</h1>
        <RevenueChart />
      </div>
    </DashboardLayout>
  );
}
