import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camila — Artista Visual | Visual Artist",
  description: "Portafolio artístico de Camila. Exploración visual de la luz, el color y la textura a través de medios tradicionales y digitales.",
  keywords: ["arte visual", "artista colombiana", "pintura al oleo", "arte digital", "exposición de arte", "visual artist", "oil painting", "digital art"],
  authors: [{ name: "Camila" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="antialiased selection:bg-[#F2A7C3]/30 selection:text-[#3D52A0]">
        <LanguageProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
