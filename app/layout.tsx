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
  metadataBase: new URL(SiteConfig.siteUrl),
  title: {
    default: SiteConfig.title,
    template: SiteConfig.titleTemplate,
  },
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: [
    {
      name: SiteConfig.author.name,
      url: SiteConfig.author.url,
    },
  ],
  creator: SiteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SiteConfig.siteUrl,
    title: SiteConfig.title,
    description: SiteConfig.description,
    siteName: SiteConfig.siteName,
    images: [
      {
        url: `${SiteConfig.siteUrl}${SiteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${SiteConfig.author.name} - Software Test Engineer`,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SiteConfig.siteUrl,
  },
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
