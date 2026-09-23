import { activityData } from "@/lib/data";

export default function ActivityTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-50">
        {activityData.map((a) => (
          <div key={a.id} className="px-5 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-semibold flex-shrink-0">
                {a.user[0]}
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-900 truncate">
                  <span className="font-medium">{a.user}</span> {a.action}
                </p>
                <p className="text-xs text-gray-500 truncate">{a.project}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 flex-shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
