import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UVTU",
  description: "Smart home riešenia",
  icons: {
    icon: "/assets/logo/logo.svg",
    shortcut: "/assets/logo/logo.svg",
    apple: "/assets/logo/logo.svg",
  },
  openGraph: {
    title: "UVTU",
    description: "Smart home riešenia",
    url: "https://uvtu-is.netlify.app/",
    siteName: "UVTU",
    images: [
      {
        url: "https://uvtu-is.netlify.app/assets/logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UVTU - Smart home riešenia",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UVTU",
    description: "UVTU - Smart home riešenia",
    images: ["https://uvtu-is.netlify.app/assets/logo/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
