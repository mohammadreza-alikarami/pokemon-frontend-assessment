import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Pokédex - Discover the World of Pokémon',
  description:
    'Explore and discover Pokémon with their abilities, stats, and detailed information. A beautiful, modern Pokédex built with Next.js.',
  keywords: 'Pokemon, Pokedex, abilities, stats, search, filter',
  authors: [{ name: 'Pokédex Team' }],
  creator: 'Pokédex App',
  publisher: 'Pokédex Team',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pokédex - Discover the World of Pokémon',
    description:
      'Explore and discover Pokémon with their abilities, stats, and detailed information.',
    siteName: 'Pokédex',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokédex - Discover the World of Pokémon',
    description:
      'Explore and discover Pokémon with their abilities, stats, and detailed information.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
