import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Kumar S | Operations Manager & AI-Enabled Operations Transformation",
  description:
    "Executive Resume & Portfolio of Krishna Kumar S — Operations Manager with 19+ years of experience in BPO, virtual assistant operations, global client delivery, and Claude Skills AI process transformation.",
  keywords: [
    "Krishna Kumar S",
    "Operations Manager",
    "AI Operations Transformation",
    "Claude Skills",
    "BPO Operations",
    "Virtual Assistant Operations",
    "Workforce Management",
    "Prompt Engineering",
    "GetFriday",
    "Bengaluru",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-gray-100 antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
