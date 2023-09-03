import React from "react";
import "@styles/globals.css";
import ContextProvider from "@context/testContext";
import AuthContext from "@context/authContext";
import ToasterContext from "@context/ToasterContext";

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
            <AuthContext>
              <ToasterContext />
            <ContextProvider>
              {children}
            </ContextProvider>
            </AuthContext>
          </main>
        </body>
      </html>
    </>
  );
}
