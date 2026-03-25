"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Calendar, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Modal from "../components/createEvent";
import { useDispatch } from "react-redux";
import { setModal } from "@/app/redux/modalSlice";
// import { prisma } from "@/lib/db"; // Commented for dev

export default function AdminDashboard() {
  const dispatch = useDispatch();
  return (
    <div className="bg-(--surface) text-(--on-surface)">
      <main className=" min-h-screen">
        {/* <!-- Page Content --> */}
        <div className="p-4 md:p-8 space-y-8">
          {/* <!-- Header Section with Actions --> */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-extrabold headline-font tracking-tight text-(--on-surface)">
                Dashboard
              </h2>
              <p className="text-(--on-surface-variant) font-medium">
                Welcome back. Here's what's happening today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="px-8 py-6 bg-(--secondary-container) text-(--on-secondary-container) rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Download Reports
              </Button>
              <Button
                className="px-8 py-6 bg-(--primary) text-(--on-primary) rounded-full font-bold text-sm flex items-center gap-2 hover:bg-(--primary-dim) active:scale-95 transition-all shadow-md"
                onClick={() => dispatch(setModal("createEvent"))}
              >
                <span className="material-symbols-outlined text-lg">add</span>
                Create new event
              </Button>
            </div>
          </div>
          {/* <!-- Bento Grid Summary Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Card 1 --> */}
            <Card className="bg-(--surface-container-lowest) p-6 rounded-xl border border-(--outline-variant)/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-(--primary-container)/20 rounded-full blur-2xl group-hover:bg-(--primary-container)/40 transition-colors"></div>
              <div className="relative flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-(--primary-container) rounded-xl flex items-center justify-center text-(--on-primary-container) mb-4">
                  <span className="material-symbols-outlined">
                    event_available
                  </span>
                </div>
                <div>
                  <p className="text-(--on-surface-variant) text-xs font-bold uppercase tracking-wider">
                    Total events created
                  </p>
                  <h3 className="text-4xl font-extrabold headline-font text-(--on-surface) mt-1">
                    24
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-2 text-(--primary) text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  <span>+12% from last month</span>
                </div>
              </div>
            </Card>
            {/* <!-- Card 2 --> */}
            <Card className="bg-(--surface-container-lowest) p-6 rounded-xl border border-(--outline-variant)/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-(--tertiary-container)/20 rounded-full blur-2xl group-hover:bg-(--tertiary-container)/40 transition-colors"></div>
              <div className="relative flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-(--tertiary-container) rounded-xl flex items-center justify-center text-(--on-tertiary-container) mb-4">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <p className="text-(--on-surface-variant) text-xs font-bold uppercase tracking-wider">
                    Today's attendance
                  </p>
                  <h3 className="text-4xl font-extrabold headline-font text-(--on-surface) mt-1">
                    156
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-2 text-(--tertiary) text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>Updated 2 mins ago</span>
                </div>
              </div>
            </Card>
            {/* <!-- Card 3 --> */}
            <Card className="bg-(--surface-container-lowest) p-6 rounded-xl border border-(--outline-variant)/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-(--secondary-container)/20 rounded-full blur-2xl group-hover:bg-(--secondary-container)/40 transition-colors"></div>
              <div className="relative flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-(--secondary-container) rounded-xl flex items-center justify-center text-(--on-secondary-container) mb-4">
                  <span className="material-symbols-outlined">
                    qr_code_scanner
                  </span>
                </div>
                <div>
                  <p className="text-(--on-surface-variant) text-xs font-bold uppercase tracking-wider">
                    Active Scanners
                  </p>
                  <h3 className="text-4xl font-extrabold headline-font text-(--on-surface) mt-1">
                    08
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-2 text-(--secondary) text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">
                    bolt
                  </span>
                  <span>All systems operational</span>
                </div>
              </div>
            </Card>
          </div>
          {/* <!-- Dashboard Content Layout --> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* <!-- Recent Activity Table --> */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-end mb-2 px-2">
                <h3 className="text-xl font-extrabold headline-font text-(--on-surface)">
                  Recent check-ins
                </h3>
                <a
                  className="text-(--primary) font-bold text-sm hover:underline"
                  href="#"
                >
                  View all
                </a>
              </div>
              <div className="bg-(--surface-container-lowest) rounded-2xl overflow-hidden border border-(--outline-variant)/5 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-(--surface-container-low)/50">
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-(--on-surface-variant)">
                        Attendee Name
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-(--on-surface-variant)">
                        Department
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-(--on-surface-variant)">
                        Time checked in
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-(--on-surface-variant)">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-(surface-container)">
                    <tr className="hover:bg-(--surface-container)/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-(--primary-container) text-(--on-primary-container) flex items-center justify-center font-bold text-xs">
                            JD
                          </div>
                          <span className="font-bold text-sm">Jane Doe</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">Choir</td>
                      <td className="px-6 py-4 text-sm font-medium text-(--on-surface-variant)">
                        7:45 AM
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-(--primary-container)/30 text-(--on-primary-container) text-[10px] font-extrabold rounded-full uppercase">
                          On Time
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-(--surface-container)/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-(--tertiary-container) text-(--on-tertiary-container) flex items-center justify-center font-bold text-xs">
                            MS
                          </div>
                          <span className="font-bold text-sm">
                            Marcus Smith
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        Ushering
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-(--on-surface-variant)">
                        7:52 AM
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-(--primary-container)/30 text-(--on-primary-container) text-[10px] font-extrabold rounded-full uppercase">
                          On Time
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-(--surface-container)/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-(--secondary-container) text-(--on-secondary-container) flex items-center justify-center font-bold text-xs">
                            AL
                          </div>
                          <span className="font-bold text-sm">
                            Amara Lawson
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        Security
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-(--on-surface-variant)">
                        8:05 AM
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-(--surface-container) text-(--on-surface-variant) text-[10px] font-extrabold rounded-full uppercase">
                          Late
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-(-surface-container)/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-(--primary-container) text-(--on-primary-container) flex items-center justify-center font-bold text-xs">
                            RK
                          </div>
                          <span className="font-bold text-sm">Robert King</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">Choir</td>
                      <td className="px-6 py-4 text-sm font-medium text-(--on-surface-variant)">
                        8:12 AM
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-(--surface-container) text-(--on-surface-variant) text-[10px] font-extrabold rounded-full uppercase">
                          Late
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!-- Right Sidebar / Quick Actions & Stats --> */}
            <div className="space-y-6">
              <div className="bg-(--primary) p-6 rounded-2xl text-(--on-primary) shadow-lg relative overflow-hidden group">
                <div className="absolute right-[-10%] bottom-[-10%] opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[120px]">
                    qr_code_2
                  </span>
                </div>
                <div className="relative">
                  <h4 className="text-lg font-bold headline-font mb-2">
                    Ready to scan?
                  </h4>
                  <p className="text-sm opacity-90 mb-6">
                    Open the universal scanner for any active event entry point.
                  </p>
                  <button className="w-full bg-white text-(--primary) py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-(--on-primary-container) hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      center_focus_weak
                    </span>
                    Launch QR Scanner
                  </button>
                </div>
              </div>
              <div className="bg-(--surface-container-low) p-6 rounded-2xl border border-(--outline-variant)/10">
                <h4 className="text-sm font-bold headline-font text-(--on-surface) mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-(--primary) text-lg">
                    calendar_month
                  </span>
                  Upcoming Events
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-(--surface-container-lowest) flex flex-col items-center justify-center border border-(--outline-variant)/20 shrink-0">
                      <span className="text-[10px] font-bold uppercase text-(--primary)">
                        Oct
                      </span>
                      <span className="text-sm font-extrabold leading-none">
                        24
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight group-hover:text-(--primary) transition-colors">
                        Mid-Week Service
                      </p>
                      <p className="text-[11px] text-(--on-surface-variant) mt-0.5">
                        06:00 PM • Main Hall
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-(--surface-container-lowest) flex flex-col items-center justify-center border border-(--outline-variant)/20 shrink-0">
                      <span className="text-[10px] font-bold uppercase text-(--primary)">
                        Oct
                      </span>
                      <span className="text-sm font-extrabold leading-none">
                        27
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight group-hover:text-(--primary) transition-colors">
                        Sunday Morning Glory
                      </p>
                      <p className="text-[11px] text-(--on-surface-variant) mt-0.5">
                        08:00 AM • Sanctuary
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 text-xs font-extrabold text-(--primary) border border-(--primary)/20 rounded-lg hover:bg-(--primary)/5 transition-colors uppercase tracking-widest">
                  View Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal />
    </div>
  );
}
