"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckinSuccess() {
  const [name, setName] = useState("");
  const [eventId, setEventId] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const nameParam = searchParams.get("name") || "Attendee";
    const eventParam = searchParams.get("e") || "sample-event";
    setName(decodeURIComponent(nameParam));
    setEventId(eventParam);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-(--surface) font-body text-(--on-surface) flex-col">
      {/* <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Check-in Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-3xl font-bold text-green-600">{name}</p>
          <p className="text-muted-foreground">
            Checked in for <span className="font-semibold">{eventId}</span>
          </p>
          <div className="pt-6">
            <Button className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
            <Button variant="ghost" className="w-full mt-3">
              <Link href="/checkin/splash">Check-in Another</Link>
            </Button>
          </div>
        </CardContent>
      </Card> */}
      {/* <!-- Top Navigation Anchor (Success Page - Focused Journey - No BottomNav) --> */}
      <header className="w-full top-0 px-6 py-4 flex items-center justify-between max-w-xl mx-auto">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[#006a6e]"
            data-icon="close"
          >
            close
          </span>
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold tracking-tight text-[#006a6e]">
          Success
        </h1>
        <div className="w-6"></div>
      </header>
      <main className="flex-1 w-full max-w-md px-8 flex flex-col items-center justify-center kinetic-stream-bg">
        {/* <!-- Animated Visual Feedback Area --> */}
        <div className="relative mb-12">
          {/* <!-- Background Halo --> */}
          <div className="absolute inset-0 bg-(--primary)/5 rounded-full scale-[2.5] blur-3xl"></div>
          {/* <!-- Main Success Portal --> */}
          <div className="relative w-40 h-40 bg-(--surface-container-lowest) rounded-xl flex items-center justify-center shadow-[0_24px_48px_-12px_rgba(0,106,110,0.12)]">
            <div className="w-24 h-24 bg-(--primary) rounded-full flex items-center justify-center">
              <span
                className="material-symbols-outlined text-(--on-primary) text-5xl"
                data-icon="check"
                // style="font-variation-settings: 'FILL' 0, 'wght' 700;"
              >
                check
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Success Messages --> */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-extrabold text-(--on-surface) tracking-tight leading-tight">
              Attendance recorded successfully
            </h2>
            <p className="font-body text-(--on-surface-variant) text-lg">
              You may now proceed inside
            </p>
          </div>
          {/* <!-- Kinetic Data Card --> */}
          <div className="bg-(--surface-container-low) p-6 rounded-xl border border-(--outline-variant)/10">
            <div className="flex flex-col items-center gap-1">
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-(--primary)/60">
                Verification Status
              </span>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-(--primary)"
                  data-icon="schedule"
                  data-weight="fill"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  schedule
                </span>
                <span className="font-headline font-bold text-xl text-(--on-surface)">
                  Checked in at 7:42 AM
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Contextual Action (Secondary Task) --> */}
        <div className="mt-12 w-full">
          <button className="w-full py-4 bg-(--secondary-container) text-(--on-secondary-container) font-headline font-bold rounded-full transition-transform active:scale-95">
            View Today's Schedule
          </button>
        </div>
      </main>
      {/* <!-- Branding Anchor & Footer --> */}
      <footer className="w-full py-10 px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 opacity-40 grayscale">
          <div className="h-px w-8 bg-(--on-surface)"></div>
          <span className="font-label text-[10px] font-bold uppercase tracking-widest text-(--on-surface)">
            Powered by Organization Name
          </span>
          <div className="h-px w-8 bg-(--on-surface)"></div>
        </div>
        {/* <!-- Safety/Help Link --> */}
        <a
          className="font-label text-sm font-semibold text-(--primary) underline underline-offset-4 decoration-(--primary)/20"
          href="#"
        >
          Need assistance?
        </a>
      </footer>
    </div>
  );
}
