import React from 'react';
import { Metadata } from 'next';
import SiteConfig from '@/config/site';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Muhammed Ibrahim',
  description:
    'Contact Muhammed Ibrahim about QA engineering roles, API automation, backend testing, or a testing project.',
  keywords:
    'software test engineer contact, software testing advisory, API testing specialist, test automation consultant',
  alternates: {
    canonical: `${SiteConfig.siteUrl}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${SiteConfig.siteUrl}/contact`,
    title: 'Contact Muhammed Ibrahim | Senior QA Engineer',
    description: 'Contact Muhammed Ibrahim about QA engineering roles, quality strategy, testing, or a consulting project.',
    images: [SiteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Muhammed Ibrahim | Senior QA Engineer',
    description: 'Contact Muhammed Ibrahim about QA engineering roles, quality strategy, testing, or a consulting project.',
    images: [SiteConfig.ogImage],
  },
};

const Contact = () => {
  return (
    <main className='bg-background text-foreground'>
      <ContactForm />
    </main>
  );
};

export default Contact;
