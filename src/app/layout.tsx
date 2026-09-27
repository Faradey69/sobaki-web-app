import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siam Pet Club",
  description: "Питомник Siam Pet Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
