import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encuesta Universitaria | Webapp de Encuestas",
  description:
    "Aplica encuestas personalizadas y obtén resultados inmediatos. Herramienta para universidades y reportes educativos.",
  keywords: [
    "encuesta",
    "universidad",
    "webapp",
    "resultados",
    "educación",
    "reportes",
    "evaluación",
    "formulario",
    "Next.js",
    "Tailwind",
  ],
  openGraph: {
    title: "Encuesta Universitaria | Webapp de Encuestas",
    description:
      "Aplica encuestas personalizadas y obtén resultados inmediatos. Herramienta para universidades y reportes educativos.",
    url: "https://tu-dominio.com/", // Cambia por el dominio real si lo tienes
    siteName: "Encuesta Universitaria",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
