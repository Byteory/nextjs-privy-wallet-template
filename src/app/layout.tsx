import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrivyProvider } from '@/providers/PrivyProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3 Starter Template',
  description: 'A modern Web3 starter template with Next.js and Privy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <PrivyProvider>
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
} 