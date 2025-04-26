import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='py-8 text-center text-sm text-gray-500 dark:text-gray-400'>
      <div className='space-x-4'>
        <Link
          href='/about'
          className='hover:underline'
        >
          About
        </Link>
        <Link
          href='/blog'
          className='hover:underline'
        >
          Blog
        </Link>
      </div>
      <p className='mt-4'>
        &copy; {new Date().getFullYear()} Muhammed Ibrahim.
      </p>
      <p className='mt-4'>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
