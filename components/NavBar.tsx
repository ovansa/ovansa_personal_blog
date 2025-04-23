import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { ModeToggle } from './ThemeToggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const NavBar = () => {
  return (
    <nav className='h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between'>
      <div className='text-lg font-bold md:text-xl'>Ovansa</div>
      <ul className='hidden md:flex w-full justify-end space-x-6 items-center'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li className='buttons px-4 space-x-2'>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={'/login'}
          >
            Login
          </Link>

          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={'/register'}
          >
            Register
          </Link>
        </li>
      </ul>
      <div className='flex gap-2 items-center'>
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className='size-6 md:hidden' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
