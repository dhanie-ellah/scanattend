"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, User } from "lucide-react";
// import { validateQR } from "@/lib/qr";

interface Props {
  params: { eventId: string };
}

export default function EventQRPage({ params }: Props) {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState("");

  const handleManual = () => {
    window.location.href = `/checkin/form?e=${params.eventId}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Event Check-in</CardTitle>
          <p className="text-muted-foreground">Event ID: {params.eventId}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button
              onClick={() =>
                (window.location.href = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=/e/${params.eventId}&choe=UTF-8`)
              }
              className="w-full h-20 flex items-center gap-3 text-lg"
              // target="_blank"
            >
              <Camera className="h-6 w-6" />
              Open QR Scanner
            </Button>
            <div className="text-center space-y-2 py-4">
              <div className="h-px bg-muted mx-8" />
              <span className="px-4 bg-background text-muted-foreground text-sm">
                OR
              </span>
              <div className="h-px bg-muted mx-8" />
            </div>
            <Button
              onClick={handleManual}
              className="w-full h-20 flex items-center gap-3 text-lg bg-secondary hover:bg-secondary/80"
            >
              <User className="h-6 w-6" />
              Manual Entry
            </Button>
          </div>
          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-center">
              {error}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
