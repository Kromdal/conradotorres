import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { EasterEgg } from "@/components/interactive";

export const metadata: Metadata = {
  title: 'Conrado Torres | Frontend Developer & Product Designer',
  description: "I build high-performance web applications, bridging the gap between product design and clean code. Specialized in React, TypeScript, and AI-powered development tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <EasterEgg />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
