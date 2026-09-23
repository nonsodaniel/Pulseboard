"use client";
import DashboardLayout from "@/components/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout breadcrumb="Settings">
      <div className="min-w-[700px]">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Settings</h1>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Profile Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                defaultValue="Nonso"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                defaultValue="Daniel"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                defaultValue="nonso@company.com"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                defaultValue="Acme Corp"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-6 (Central Time)</option>
                <option>UTC-7 (Mountain Time)</option>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+1 (CET)</option>
              </select>
            </div>
          </div>

          <h2 className="text-base font-semibold text-gray-900 mt-6 mb-4">Notification Preferences</h2>
          <div className="space-y-3">
            {[
              "Email notifications",
              "Project updates",
              "Team mentions",
              "Weekly digest",
            ].map((label) => (
              <label key={label} className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
