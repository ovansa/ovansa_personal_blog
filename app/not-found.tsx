import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className='flex min-h-[60vh] items-center justify-center px-4 py-16 text-center'>
      <div className='max-w-lg'>
        <p className='text-sm font-semibold uppercase text-muted-foreground'>404</p>
        <h1 className='mt-3 text-4xl font-bold'>Page not found</h1>
        <p className='mt-4 leading-7 text-muted-foreground'>
          The page may have moved or the address may be incorrect. You can return
          home or browse the latest software testing articles.
        </p>
        <div className='mt-7 flex flex-wrap justify-center gap-3'>
          <Link href='/' className={buttonVariants()}>Return home</Link>
          <Link href='/blog' className={buttonVariants({ variant: 'outline' })}>Browse articles</Link>
        </div>
      </div>
    </main>
  );
}
