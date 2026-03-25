"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { QrCode } from "lucide-react";
import CheckinForm from "../form/page";

export default function CheckinSplash() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="md:hidden min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 bg-(--surface) font-body text-(--on-surface) antialiased selection:bg-(--primary-container)">
        <main className="flex flex-col items-center justify-center min-h-screen px-8 relative overflow-hidden">
          {/* <!-- Subtle background layer for tonal depth --> */}
          <div className="absolute inset-0 bg-linear-to-b from-surface to-surface-container-low z-0"></div>
          {/* <!-- Content Container --> */}
          <div className="z-10 w-full max-w-xs flex flex-col items-center">
            {/* <!-- Branding Anchor --> */}
            <div className="mb-12 flex flex-col items-center space-y-6">
              {/* <!-- Logo Placeholder using the 'qr_code_scanner' from JSON instructions --> */}
              <div className="w-20 h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-[0_4px_24px_rgba(42,52,53,0.04)]">
                <span
                  className="material-symbols-outlined text-4xl text-(--primary)"
                  data-icon="qr_code_scanner"
                >
                  qr_code_scanner
                </span>
              </div>
              <div className="text-center">
                {/* <!-- App Name: Using Exact JSON Label and Headline Typography --> */}
                <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-(--on-surface) mb-2">
                  ScanAttend
                </h1>
                {/* <!-- Subtitle: Editorial contrast with Manrope body font --> */}
                <p className="font-body text-(--on-surface-variant) text-sm font-medium tracking-wide">
                  Preparing your check-in...
                </p>
              </div>
            </div>
            {/* <!-- Kinetic Loading Indicator --> */}
            <div className="w-48 space-y-4">
              <div className="loading-bar-stream"></div>
              <p className="text-[10px] text-center font-label uppercase tracking-[0.2em] text-outline opacity-60">
                Syncing environment
              </p>
            </div>
            {/* <!-- Redirect Hint (Transactional UX Priority) --> */}
            <div className="mt-16 text-center">
              <p className="text-xs text-(--on-surface-variant)/70 italic">
                You will be redirected to the attendance form automatically.
              </p>
            </div>
          </div>
          {/* <!-- Footer / Organization Branding (Fixed Bottom Anchor) --> */}
          <footer className="absolute bottom-12 w-full text-center px-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-px w-8 bg-(--outline-variant) opacity-30 mb-2"></div>
              <p className="text-[11px] font-label text-(--on-surface-variant) tracking-wider">
                Powered by{" "}
                <span className="font-bold text-(--on-surface)">
                  Organization Name
                </span>
              </p>
            </div>
          </footer>
        </main>
        {/* <!-- Visual Polish: Content layer mask --> */}
        <div className="fixed inset-0 pointer-events-none border-[1.5rem] border-surface z-50 mix-blend-overlay opacity-20 hidden md:block"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
            <QrCode className="h-10 w-10 text-indigo-600" />
          </div>
          <CardTitle>Scan Your QR Code</CardTitle>
          <CardDescription>
            Use your phone camera to scan the event QR code, or enter details
            manually.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full h-14 text-lg">
            <Link href="/e/sample-event">Scan QR Code</Link>
          </Button>
          <Button variant="outline" className="w-full h-14 text-lg">
            <Link href="/checkin/form">Manual Entry</Link>
          </Button>
        </CardContent>
      </Card> */}
      <CheckinForm/>
    </div>
  );
}
