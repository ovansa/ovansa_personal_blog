import React from 'react';
import Link from 'next/link';
import SiteConfig from '@/config/site';

const Footer = () => {
  return (
    <footer className='border-t px-4 pb-6 pt-8 text-center text-sm text-gray-500 dark:text-gray-400'>
      <nav aria-label='Footer navigation'>
        <ul className='flex flex-wrap justify-center gap-x-5 gap-y-2'>
          <li><Link href='/about' className='hover:text-foreground hover:underline'>About</Link></li>
          <li><Link href='/resume' className='hover:text-foreground hover:underline'>Resume</Link></li>
          <li><Link href='/blog' className='hover:text-foreground hover:underline'>Articles</Link></li>
          <li><Link href='/contact' className='hover:text-foreground hover:underline'>Contact</Link></li>
          <li><a href={SiteConfig.author.github} rel='me' className='hover:text-foreground hover:underline'>GitHub</a></li>
          <li><a href={SiteConfig.author.linkedin} rel='me' className='hover:text-foreground hover:underline'>LinkedIn</a></li>
        </ul>
      </nav>
      <p className='mt-5 font-semibold text-foreground'>
        &copy; {new Date().getFullYear()} - Ovansa
      </p>
    </footer>
  );
};

export default Footer;
