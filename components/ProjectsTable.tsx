"use client";
import { useState } from "react";
import { projectsData } from "@/lib/data";
import InviteModal from "./InviteModal";

const statusColors: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  Review: "bg-yellow-100 text-yellow-700",
  Planning: "bg-gray-100 text-gray-600",
  Completed: "bg-green-100 text-green-700",
};

export default function ProjectsTable() {
  const [projects, setProjects] = useState(projectsData);
  const [modalOpen, setModalOpen] = useState(false);

  function deleteProject(id: number) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">Recent Projects</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
        >
          Invite Member
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
              <th className="px-5 py-3 font-medium">Project</th>
              <th className="px-5 py-3 font-medium">Owner</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Progress</th>
              <th className="px-5 py-3 font-medium">Due Date</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">{p.name}</td>
                <td className="px-5 py-3 text-gray-600 whitespace-nowrap">{p.owner}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                    <span className="text-gray-600 whitespace-nowrap">{p.progress}%</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-600 whitespace-nowrap">{p.dueDate}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <button className="text-xs text-blue-600 hover:underline whitespace-nowrap">Edit</button>
                    <button
                      onClick={() => deleteProject(p.id)}
                      className="text-xs text-red-500 hover:underline whitespace-nowrap"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InviteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
