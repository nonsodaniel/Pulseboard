import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
}

export default function KpiCard({ title, value, change, trend, description }: KpiCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      <div className="flex items-center gap-1 mt-2">
        {trend === "up" ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span
          className={`text-sm font-medium ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
        <span className="text-sm text-gray-400">{description}</span>
      </div>
    </div>
  );
}
