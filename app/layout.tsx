import React, { ReactNode } from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";
import ContextProvider from "@context/testContext";

interface RootLayoutProps {
  children: any;
}

export const metadata = {
  title: "Group Admin Companion",
  description: "Manage your facebook groups and automate various tasks.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app w-screen">
            <ContextProvider>
              <NavBar />
              {children}
            </ContextProvider>
          </main>
        </body>
      </html>
    </>
  );
}
