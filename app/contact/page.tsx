import React from 'react';
import { Metadata } from 'next';
import SiteConfig from '@/config/site';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Muhammed Ibrahim | Software Test Engineer',
  description:
    'Get in touch for software testing consulting, automation strategies, and quality assurance expertise.',
  keywords:
    'contact software test engineer, hire testing consultant, QA engineer contact, test automation expert',
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
