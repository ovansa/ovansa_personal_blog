import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-8 pb-5 text-center text-sm text-gray-500 dark:text-gray-400'>
      {/* <div className='space-x-4'>
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
      </div> */}
      <p className='mt-4'>&copy; {new Date().getFullYear()} Ovansa</p>
    </footer>
  );
};

export default Footer;
