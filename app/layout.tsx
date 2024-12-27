import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import AuthProvider from '@/components/AuthProvider';
import { AudioPlayerProvider } from '@/contexts/AudioPlayerContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melody Stream',
  description: 'A modern music streaming application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <AudioPlayerProvider>
              <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto pt-16 md:pt-0 pb-32">
                  {children}
                </main>
              </div>
              <Player />
              <Toaster />
            </AudioPlayerProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}