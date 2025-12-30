import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feeble",
  description: "Created by Op Pautu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-general-sans antialiased`}>{children}</body>
    </html>
  );
}
