import DashboardLayout from "@/components/DashboardLayout";
import { teamData } from "@/lib/data";

export default function TeamPage() {
  return (
    <DashboardLayout breadcrumb="Team">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Team</h1>
        <div>
          {teamData.map((member) => (
            <div key={member.id} className="p-1">
              {member.name}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
