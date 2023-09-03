import "@styles/globals.css";
import NavBar from "@components/NavBar";

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
      <NavBar />
      {children}
    </>
  );
}
