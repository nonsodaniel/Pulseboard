"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "@/lib/data";

export default function RevenueChart() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Revenue &amp; Users</h2>
          <p className="text-sm text-gray-500">Jan – Aug 2024</p>
        </div>
        <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last 8 months</option>
          <option>Last 6 months</option>
          <option>Last 3 months</option>
        </select>
      </div>
      <div className="w-full" style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
