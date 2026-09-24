import DashboardLayout from "@/components/DashboardLayout";
import { teamData } from "@/lib/data";

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  away: "bg-yellow-100 text-yellow-700",
  offline: "bg-gray-100 text-gray-500",
};

export default function TeamPage() {
  return (
    <DashboardLayout breadcrumb="Team">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Team</h1>
            <p className="text-sm text-gray-500">{teamData.length} members</p>
          </div>
          <button className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
            Invite Member
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-lg p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                {member.initial}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 truncate">{member.name}</p>
                <p className="text-xs text-gray-500 truncate">{member.role}</p>
                <p className="text-xs text-gray-400 truncate">{member.email}</p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${statusStyles[member.status]}`}
              >
                {member.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
