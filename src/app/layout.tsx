import type { Metadata } from "next";
import { Lexend } from 'next/font/google';
import "./globals.css";

const lexend = Lexend({
  subsets: ['latin'],
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Mangos",
  description: "App for managing the organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={lexend.className}>
        {children}
      </body>
    </html>
  );
}
