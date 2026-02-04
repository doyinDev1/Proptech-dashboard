import type { Metadata } from "next";
import { euclidCircularB } from "@/styles";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "PropTech Dashboard",
  description: "PropTech Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclidCircularB.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};