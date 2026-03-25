"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SectionType {
  key: number;
  section: string;
  icon: string;
  route: string;
}

const section: SectionType[] = [
  {
    key: 0,
    section: "Dashboard",
    icon: "dashboard",
    route: "/admin/dashboard",
  },
  {
    key: 1,
    section: "Events",
    icon: "calendar_today",
    route: "/admin/events",
  },
  {
    key: 2,
    section: "Attendance",
    icon: "fact_check",
    route: "/admin/attendance/{id}",
  },
  {
    key: 3,
    section: "Reports",
    icon: "description",
    route: "/admin/reports",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div>
      <aside className="h-screen w-64 fixed left-0 top-0 border-r bg-[#f6fafa] flex-col p-4 gap-2 z-50 hidden md:flex">
        <div className="mb-8 px-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-(--primary) flex items-center justify-center text-(--on-primary) shadow-sm">
            <span className="material-symbols-outlined">qr_code_2</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-(--primary) tracking-tight headline-font">
              ScanAttend
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-(--on-surface-variant) font-bold">
              Admin Portal
            </p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {section.map((section, index) => (
            <Link
              className={`flex items-center gap-3 px-4 py-3 text-(--primary) rounded-lg font-bold   transition-transform duration-150 ${pathname === section.route ? "bg-white active:scale-95 shadow-sm" : "bg-transparent shadow-none"}`}
              href={section.route}
              key={index}
            >
              <span className="material-symbols-outlined">{section.icon}</span>
              <span className=" text-sm font-medium">{section.section}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-4 border-t border-(--outline-variant)/10 flex flex-col gap-1">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-[#2a3435] hover:bg-[#e1eaea] transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-plus-jakarta text-sm font-medium">
              Settings
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-[#2a3435] hover:bg-[#e1eaea] transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-plus-jakarta text-sm font-medium">
              Logout
            </span>
          </Link>
        </div>
      </aside>
      {/* Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-(--surface)/80 backdrop-blur-xl flex justify-around items-center py-3 px-6 z-50 border-t border-(--outline-variant)/10">
        {section.map((section, index) => (
          <Link
            href={section.route}
            className={`flex flex-col items-center gap-1 ${pathname === section.route ? "text-(--primary)" : "text-(--on-surface-variant)"}`}
            key={index}
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              {section.icon}
            </span>
            <span className="text-[10px] font-bold">{section.section}</span>
          </Link>
        ))}
        <Link
          href="#"
          className={`flex flex-col items-center gap-1 ${pathname === "/admin/profile" ? "text-(--primary)" : "text-(--on-surface-variant)"}`}
        >
          <span
            className="material-symbols-outlined"
            data-icon="account_circle"
          >
            account_circle
          </span>
          <span className="text-[10px] font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
