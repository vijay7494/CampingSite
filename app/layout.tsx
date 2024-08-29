import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          <main className="overflow-hidden relative">
          {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
