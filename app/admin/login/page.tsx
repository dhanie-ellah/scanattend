"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

    // Demo login: email "admin@scanattend.com" / password "admin"
  //   if (email === "admin@scanattend.com" && password === "admin") {
  //     document.cookie = "admin-token=valid; path=/; max-age=86400";
  //     router.push("/admin/dashboard");
  //   } else {
  //     setError("Invalid credentials");
  //   }
  //   setLoading(false);
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4 bg-background font-body text-on-surface flex-col kinetic-bg">
      {/* <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="h-10 w-10 text-indigo-600" />
          </div>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>
            Sign in to access event dashboard and attendance reports.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="admin@scanattend.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Demo: admin@scanattend.com / admin
          </div>
        </CardContent>
      </Card> */}

      {/* <!-- TopNavBar Suppression: Admin Login is Transactional/Focused --> */}
      <main className="grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-5">
          {/* <!-- Branding Header --> */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-(--primary-container) rounded-xl mb-4">
              <span
                className="material-symbols-outlined text-(--primary) text-3xl"
                data-icon=""
              >
                qr_code
              </span>
            </div>
            <h1 className="font-headline font-extrabold text-3xl text-(--primary) tracking-tight">
              ScanAttend
            </h1>
            <p className="font-label text-(--on-surface-variant) mt-2 text-sm uppercase tracking-widest">
              Attendance Portal
            </p>
          </div>
          {/* <!-- Login Card --> */}
          <div className="bg-(--surface-container-lowest) rounded-xl p-8 md:p-10 shadow-[0_24px_48px_-12px_rgba(42,52,53,0.06)] border border-(--outline-variant)/10 relative overflow-hidden">
            {/* <!-- Asymmetric Design Element --> */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="font-headline font-bold text-2xl text-(--on-surface)">
                  Admin Login
                </h2>
                <p className="text-(--on-surface-variant) text-sm mt-1">
                  Secure access to your organization dashboard.
                </p>
              </div>
              <form className="space-y-6">
                {/* <!-- Email Field --> */}
                <div className="space-y-2">
                  <label
                    className="font-label font-bold text-xs uppercase tracking-wider text-(--on-surface-variant) px-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span
                        className="material-symbols-outlined text-(--outline) text-lg group-focus-within:text-(--primary) transition-colors"
                        data-icon="mail"
                      >
                        mail
                      </span>
                    </div>
                    <input
                      className="w-full pl-11 pr-4 py-4 bg-(--surface-container) border-none rounded-xl focus:ring-2 focus:ring-(--primary)/20 focus:bg-(--surface-container-lowest) text-(--on-surface) placeholder:text-(--outline)/60 transition-all duration-200 outline-none border border-transparent focus:border-(--primary)/30"
                      id="email"
                      name="email"
                      placeholder="admin@organization.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                {/* <!-- Password Field --> */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label
                      className="font-label font-bold text-xs uppercase tracking-wider text-(--on-surface-variant)"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <a
                      className="text-xs font-bold text-(--primary) hover:text-(--primary-dim) transition-colors"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span
                        className="material-symbols-outlined text-(--outline) text-lg group-focus-within:text-(--primary) transition-colors"
                        data-icon="lock"
                      >
                        lock
                      </span>
                    </div>
                    <input
                      className="w-full pl-11 pr-12 py-4 bg-(--surface-container) border-none rounded-xl focus:ring-2 focus:ring-(-primary)/20 focus:bg-(--surface-container-lowest) text-(--on-surface) placeholder:text-(--outline)/60 transition-all duration-200 outline-none border border-transparent focus:border-(--primary)/30"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type="password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-(--outline) hover:text-(--on-surface) transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-lg"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
                {/* <!-- Login Button --> */}
                <button
                  className="w-full py-4 bg-(--primary) hover:bg-(--primary-dim) text-(--on-primary) font-headline font-bold rounded-full shadow-lg shadow-(--primary)/10 transition-all duration-300 transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Sign In to Dashboard</span>
                  <span
                    className="material-symbols-outlined text-xl"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </button>
              </form>
            </div>
          </div>
          {/* <!-- Additional Help Link --> */}
          <p className="text-center text-(--on-surface-variant) text-sm">
            Need help with your account?{" "}
            <a className="text-(--primary) font-bold hover:underline" href="#">
              Contact Support
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
