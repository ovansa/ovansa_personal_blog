import './globals.css';

import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import NavBar from '@/components/NavBar';
import SiteConfig from '@/config/site';
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='scroll-p-20 scroll-smooth'
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
