import { Button } from "@/components/ui/button";
import { QrCode, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col">
      <header className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <QrCode className="h-10 w-10 text-indigo-600" />
          <h1 className="text-3xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            ScanAttend
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              QR Code Attendance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Streamline event check-ins with scannable QR codes. Real-time
              tracking, easy admin dashboard, and Excel exports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl">
              <QrCode className="h-12 w-12 text-indigo-600" />
              <h3 className="text-xl font-semibold">Fast Check-in</h3>
              <p className="text-gray-600">Scan QR for instant attendance.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl">
              <ShieldCheck className="h-12 w-12 text-green-600" />
              <h3 className="text-xl font-semibold">Admin Dashboard</h3>
              <p className="text-gray-600">Manage events and view reports.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Export Data</h3>
              <p className="text-gray-600">
                Download Excel attendance reports.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkin/splash">
              <Button size="lg" className="group">
                Check In{" "}
                <QrCode className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button variant="outline" size="lg" className="group">
                Admin Login{" "}
                <ShieldCheck className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200/50 px-6 py-8 mt-auto">
        <p className="text-center text-sm text-gray-500">
          © 2024 ScanAttend. Built with Next.js + MongoDB.
        </p>
      </footer>
    </div>
  );
}
