import React from 'react';
import { cn } from '@/lib/utils';

interface MaxWidthProps {
  className?: string;
  children?: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthProps) => {
  return (
    <div
      className={cn(
        'mx-auto my-12 w-full max-w-[1200px] px-5 sm:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
