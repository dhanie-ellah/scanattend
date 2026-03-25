import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
// import dbConnect from "@/lib/db";
import { ReduxProvider } from "./redux/provider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScanAttend - QR Attendance System",
  description:
    "Fast QR code attendance tracking for events with admin dashboard and Excel export.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // await dbConnect(); // Comment out until Mongo running

  return (
    <html lang="en" className={`${plusJakarta.className} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <ReduxProvider>
        <body className="min-h-screen bg-background font-sans antialiased">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
          />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
