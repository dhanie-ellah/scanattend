"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Mail } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

export default function CheckinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams.get("e") || "sample-event";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In real: POST to /api/attendance
      // await fetch('/api/attendance', { method: 'POST', body: JSON.stringify({ eventId, name, email }) });

      router.push(
        `/checkin/success?e=${eventId}&name=${encodeURIComponent(name)}`,
      );
    } catch (err) {
      setError("Check-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="md:hidden min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-green-100 bg-background text-(--on-surface) flex-col">
        <header className="bg-[#f6fafa] flex items-center justify-between px-6 py-4 w-full docked full-width top-0 z-50">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#006a6e]"
              data-icon="qr_code_scanner"
            >
              qr_code_scanner
            </span>
            <span className=" text-2xl font-bold tracking-tight text-[#006a6e]">
              ScanAttend
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-(--surface-container-high) flex items-center justify-center">
            <span
              className="material-symbols-outlined text-(--primary)"
              data-icon="person"
            >
              person
            </span>
          </div>
        </header>
        <main className="grow px-6 pt-8 pb-32">
          {/* <!-- Editorial Header Section --> */}
          <section className="mb-10 ml-4 mr-8">
            <div className="inline-block px-3 py-1 bg-(--secondary-container) text-(--on-secondary-container) rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Check-in Active
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-(-on-surface) mb-2 leading-tight">
              Workers Sunday Attendance
            </h1>
            <p className="text-(--on-surface-variant) font-medium text-lg mb-1">
              October 24, 2026
            </p>
            <p className="text-(--primary) font-semibold tracking-wide uppercase text-xs">
              Complete check-in below
            </p>
          </section>
          {/* <!-- The Form Container using Tonal Layering --> */}
          <div className="bg-(--surface-container-low) rounded-4xl p-6 shadow-sm border border-(--outline-variant)/10">
            <form className="space-y-6">
              {/* <!-- Full Name Input --> */}
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-widest text-(--on-surface-variant) ml-2"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    className="w-full h-16 px-6 rounded-xl bg-(--surface-container) border-none focus:bg-(--surface-container-lowest) focus:ring-2 focus:ring-(--primary)/30 transition-all duration-200 placeholder:text-(--outline) text-(--on-surface) font-medium text-lg"
                    id="fullname"
                    placeholder="Enter your full name"
                    type="text"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--outline-variant)">
                    <span
                      className="material-symbols-outlined"
                      data-icon="badge"
                    >
                      badge
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Department Dropdown --> */}
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-widest text-(--on-surface-variant) ml-2"
                  htmlFor="department"
                >
                  Department
                </label>
                <div className="relative">
                  <select
                    className="w-full h-16 px-6 rounded-xl bg-(--surface-container) border-none focus:bg-(--surface-container-lowest) focus:ring-2 focus:ring-(--primary)/30 transition-all duration-200 text-(--on-surface) font-medium text-lg appearance-none"
                    id="department"
                  >
                    <option value="">Select Department</option>
                    <option value="ushers">Ushers &amp; Greeters</option>
                    <option value="media">Media &amp; Tech</option>
                    <option value="choir">Choir &amp; Worship</option>
                    <option value="security">Safety &amp; Security</option>
                    <option value="logistics">Logistics</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--outline-variant) pointer-events-none">
                    <span
                      className="material-symbols-outlined"
                      data-icon="unfold_more"
                    >
                      unfold_more
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Submit Button --> */}
              <div className="pt-4">
                <button
                  className="w-full h-16 bg-(--primary) text-(--on-primary) rounded-full font-bold text-lg shadow-lg shadow-(--primary)/20 active:scale-95 transition-all duration-150 flex items-center justify-center gap-3"
                  type="submit"
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="check_circle"
                    // style={{font-variation-settings: 'FILL' 1}}
                  >
                    check_circle
                  </span>
                  Submit Attendance
                </button>
              </div>
              {/* <!-- Automated Note --> */}
              <div className="flex items-center justify-center gap-2 py-2">
                <span
                  className="material-symbols-outlined text-primary text-sm"
                  data-icon="schedule"
                >
                  schedule
                </span>
                <p className="text-[13px] text-(--on-secondary-fixed-variant) font-medium italic">
                  Arrival time will be recorded automatically
                </p>
              </div>
            </form>
          </div>
          {/* <!-- Asymmetric Visual Anchor --> */}
          {/* <div className="mt-12 flex justify-end opacity-20">
          <div className="w-32 h-32 rounded-full bg-(--primary-fixed) blur-3xl"></div>
        </div> */}
        </main>
        {/* <!-- Footer Branding --> */}
        <footer className="pb-24 pt-4 text-center">
          <p className="text-on-surface-variant font-semibold tracking-tighter text-sm">
            Powered by{" "}
            <span className="text-primary font-extrabold tracking-normal">
              Organization Name
            </span>
          </p>
        </footer>
      </div>
      <div className=" hidden md:flex items-center justify-center min-h-screen">
        Oops, Can only be viewed on mobile.
      </div>
    </div>
  );
}
