"use client";

import Sidebar from "./components/sidebar";
import Navbar from "./components/nav";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import ModalProvider from "./components/modalProvider";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const exclude = ["/admin/login"];

  const isExcluded = exclude.includes(pathname);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        {isExcluded ? (
          <main>{children}</main>
        ) : (
          <div>
            <Sidebar />
            <div className="md:ml-64">
              <Navbar />
              <section className="mb-10 md:mb-0">{children}</section>
              <ModalProvider/>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
