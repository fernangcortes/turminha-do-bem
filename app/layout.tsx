import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; // Global styles

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-kids",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Turminha do Bem - Podcast Infantil & Diálogo Inclusivo",
  description: "Explore o portal interativo do podcast Turminha do Bem realizado pela UEG UnU Iporá! Converse com os personagens por IA segura, jogue o desafio do ECA, explore os sons de Foley e consulte referências oficiais.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  alternates: {
    canonical: "https://turminhadobem.org",
  },
  openGraph: {
    title: "Turminha do Bem - Podcast Infantil & Diálogo Inclusivo",
    description: "Portal interativo sobre direitos da infância realizada pela UEG UnU Iporá. Diálogos seguros com IA, jogo educativo do ECA de 20 perguntas, acessibilidade auditiva de Foley e links oficiais.",
    url: "https://turminhadobem.org",
    siteName: "Turminha do Bem",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turminha do Bem - Podcast Infantil & Diálogo Inclusivo",
    description: "Portal interativo sobre direitos da infância realizada pela UEG UnU Iporá. Diálogos seguros com IA, jogo educativo do ECA de 20 perguntas, acessibilidade auditiva de Foley e links oficiais.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#F0F9FF] text-[#333]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

