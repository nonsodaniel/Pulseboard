interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
}

export default function KpiCard({ title, value }: KpiCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}
