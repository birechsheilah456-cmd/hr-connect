import { UserPlus, Briefcase, FileText, BarChart3 } from "lucide-react";

const actions = [
  { label: "Add Employee", icon: UserPlus },
  { label: "Post Job", icon: Briefcase },
  { label: "Run Payroll", icon: FileText },
  { label: "Reports", icon: BarChart3 },
];

export default function QuickActions() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 py-6 text-sm font-medium hover:bg-slate-50"
          >
            <Icon className="h-5 w-5 text-slate-700" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}