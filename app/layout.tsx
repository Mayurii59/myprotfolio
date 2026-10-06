import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundMesh from "@/components/BackgroundMesh";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mayuripatidar.vercel.app"),
  title: "Mayuri Patidar | AI Enthusiast • Software Developer • UI/UX Designer",
  description:
    "Portfolio of Mayuri Patidar — Computer Science Engineering graduate specializing in AI, software development, web development, and UI/UX design.",
  keywords: [
    "Mayuri Patidar",
    "Mayuri Patidar Portfolio",
    "AI Enthusiast",
    "Software Developer",
    "UI/UX Designer",
    "Medi-Caps University",
    "Horizon17 Technology",
    "Indore Developer",
    "Frontend Developer",
    "MERN Stack",
    "FastAPI",
    "Docker",
    "Generative AI",
    "Agentic AI",
  ],
  authors: [{ name: "Mayuri Patidar", url: "https://github.com/Mayurii59" }],
  creator: "Mayuri Patidar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayuripatidar.vercel.app",
    title: "Mayuri Patidar | AI Enthusiast • Software Developer • UI/UX Designer",
    description:
      "Portfolio of Mayuri Patidar — Computer Science Engineering graduate specializing in AI, software development, web development, and UI/UX design.",
    siteName: "Mayuri Patidar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayuri Patidar | AI Enthusiast • Software Developer • UI/UX Designer",
    description:
      "Portfolio of Mayuri Patidar — Computer Science Engineering graduate specializing in AI, software development, web development, and UI/UX design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-[#f5f5f7] min-h-screen antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative`}
      >
        <CustomCursor />
        <BackgroundMesh />
        {children}
      </body>
    </html>
  );
}
