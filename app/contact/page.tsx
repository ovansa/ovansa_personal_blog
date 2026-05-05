import React from 'react';
import { Metadata } from 'next';
import SiteConfig from '@/config/site';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Muhammed Ibrahim | Software Test Engineer',
  description:
    'Share project context for API testing, test automation, CI test gates, and software testing advisory work.',
  keywords:
    'software test engineer contact, software testing advisory, API testing specialist, test automation consultant',
  alternates: {
    canonical: `${SiteConfig.siteUrl}/contact`,
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
