import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/ui/Navbar';
import LoginModal from '@/components/auth/LoginModal';
import Notification from '@/components/auth/Notification';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Codenime',
  description: 'Website Anime Indonesia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-primary text-text-primary font-inter`}>
        <SessionProvider>
          <Toaster
            position="top-center"
            toastOptions={
              {
                /* ... style toast ... */
              }
            }
          />
          <Notification />
          <LoginModal />
          <Navbar />

          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
