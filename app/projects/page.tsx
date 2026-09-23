import DashboardLayout from "@/components/DashboardLayout";
import ProjectsTable from "@/components/ProjectsTable";

export default function ProjectsPage() {
  return (
    <DashboardLayout breadcrumb="Projects">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-900">Projects</h1>
        <ProjectsTable />
      </div>
    </DashboardLayout>
  );
}
