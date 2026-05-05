import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ModeToggle } from './ThemeToggle';
import React from 'react';
import { buttonVariants } from './ui/button';

const NavBar = () => {
  return (
    <nav className='h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-50'>
      <div className='max-w-[1400px] mx-auto w-full flex items-center justify-between'>
        <div className='text-lg font-bold md:text-xl'>
          <Link href={'/'}>Ovansa</Link>
        </div>

        {/* Desktop Nav */}
        <ul className='hidden md:flex w-full justify-end space-x-6 items-center font-medium'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          {/* <li>
            <Link href='/consulting'>Consulting</Link>
          </li> */}
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/resume'>Resume</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className='flex gap-2 items-center md:hidden'>
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className='size-6' />
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-64 p-6'
            >
              <SheetHeader>
                <div className='text-lg font-semibold'>Menu</div>
              </SheetHeader>
              <nav className='mt-6 flex flex-col space-y-4 text-base font-medium'>
                <Link
                  href='/'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Home
                </Link>
                <Link
                  href='/blog'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Blog
                </Link>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  About
                </Link>
                <Link
                  href='/resume'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Resume
                </Link>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </Link>
              </nav>
              <div className='mt-8 flex flex-col space-y-3'>
                <Link
                  className={buttonVariants({ variant: 'default' })}
                  href='/contact'
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
