import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const raleway = localFont({
  src: "../fonts/Raleway-Regular.ttf",
  variable: "--font-raleway-local",
  weight: "400",
  style: "normal",
  display: "swap",
});

const bebasNeue = localFont({
  src: "../fonts/BebasNeue-Bold.ttf",
  variable: "--font-bebas-local",
  weight: "700",
  style: "normal",
  display: "swap",
});

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
      <body className={`${raleway.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
