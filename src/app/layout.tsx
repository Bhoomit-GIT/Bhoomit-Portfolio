import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhoomit Rachchawar | Python Developer",
  description:
    "Python Developer with expertise in Django, REST API development, and scalable web applications. Passionate about building real-time systems and clean code.",
  keywords: ["Python Developer", "Django", "REST API", "Bhoomit Rachchawar", "Backend Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
