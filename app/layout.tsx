import React, { ReactNode } from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Group Admin Companion",
  description: "Manage your facebook groups and automate various tasks.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app w-screen">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
