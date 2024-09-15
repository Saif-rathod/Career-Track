import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// Import Inter font
const inter = Inter({ subsets: ['latin'] });

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <UserProvider>
      <body className={inter.className}> {/* Inter font is now defined */}
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
      </UserProvider>
    </html>
  );
}