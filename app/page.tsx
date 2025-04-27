import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';

export const runtime = 'edge';

export default function Home() {
  return (
    <main className='bg-background text-foreground'>
      {/* Hero */}
      <section className='pt-20 px-14'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='space-y-6'>
              <h1 className='text-5xl font-extrabold leading-tight xl:text-6xl rotate-1'>
                Teaching testers to use tools that improve testing,
                <br />
                and promoting a test-driven mindset to developers.
              </h1>
              <p className='text-lg md:text-xl'>
                I’m <strong>Muhammed Ibrahim</strong>, a Software Test Engineer
                with 6+ years’ experience. Here you’ll find hands-on tutorials,
                best practices, and real-world lessons to help you build
                high-quality APIs, infrastructure, and UIs with confidence.
              </p>
              <Link
                href='/about'
                className={
                  buttonVariants({ variant: 'outline' }) +
                  ' inline-block rotate-1'
                }
              >
                Learn more
              </Link>
            </div>
            <div className='relative w-full h-64 bg-gray-100 dark:bg-gray-800 -rotate-1 rounded-lg flex items-center justify-center'>
              {/* Placeholder for illustration */}
              <span className='text-gray-400 dark:text-gray-600'>
                Your Illustration Here
              </span>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Services */}
      <section className='py-5 px-16'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            {/* Workshops */}
            {/* <div className='flex flex-col md:flex-row items-center gap-6'>
              <div className='rotate-1'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                  Workshops
                </h2>
                <p className='text-lg md:text-xl mb-4'>
                  Hands-on API and test automation workshops using Postman,
                  Cypress, and more. Learn by doing, not just by watching.
                </p>
                <Link
                  href='/workshops'
                  className={
                    buttonVariants({ variant: 'outline' }) +
                    ' inline-block -rotate-1'
                  }
                >
                  Learn more
                </Link>
              </div>
            </div> */}
            {/* Consulting */}
            <div className='flex flex-col md:flex-row-reverse items-center gap-6'>
              <div className='-rotate-1'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                  Consulting
                </h2>
                <p className='text-lg md:text-xl mb-4'>
                  I help teams build robust testing strategies, review
                  automation suites, and embed quality practices into your
                  development cycle.
                </p>
                <Link
                  href='/consulting'
                  className={
                    buttonVariants({ variant: 'outline' }) +
                    ' inline-block rotate-1'
                  }
                >
                  Learn more
                </Link>
              </div>
            </div>
            {/* Tutoring */}
            <div className='flex flex-col md:flex-row items-center gap-6'>
              <div className='rotate-1'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                  Tutoring
                </h2>
                <p className='text-lg md:text-xl mb-4'>
                  One-on-one sessions to deep-dive into test automation,
                  debugging techniques, and interview preparation.
                </p>
                <Link
                  href='/tutoring'
                  className={
                    buttonVariants({ variant: 'outline' }) +
                    ' inline-block -rotate-1'
                  }
                >
                  Learn more
                </Link>
              </div>
            </div>
            {/* Talks */}
            {/* <div className='flex flex-col md:flex-row-reverse items-center gap-6'>
              <div className='-rotate-1'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                  Conference Talks
                </h2>
                <p className='text-lg md:text-xl mb-4'>
                  Keynotes and technical sessions on testing, tooling, and
                  quality culture—delivered worldwide.
                </p>
                <Link
                  href='/speaking'
                  className={
                    buttonVariants({ variant: 'outline' }) +
                    ' inline-block rotate-1'
                  }
                >
                  Learn more
                </Link>
              </div>
            </div> */}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Newsletter */}
      <section className='bg-gray-100 dark:bg-gray-800 py-16'>
        <MaxWidthWrapper>
          <div className='mx-auto max-w-lg text-center space-y-6'>
            <h2 className='text-2xl font-semibold'>Let’s keep in touch</h2>
            <p className='text-gray-600 dark:text-gray-400'>
              I send out practical testing tips and updates on new workshops,
              posts, and talks. Subscribe to get them straight to your inbox—no
              spam, ever.
            </p>
            <form className='space-y-4'>
              <input
                type='email'
                placeholder='Your email address'
                className='w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 transition'
              />
              <button
                type='submit'
                className={
                  buttonVariants({ variant: 'outline' }) + ' inline-block'
                }
              >
                Subscribe
              </button>
            </form>
            <p className='text-xs text-gray-500'>
              Unsubscribe anytime. Read our{' '}
              <Link
                href='/privacy-policy'
                className='underline'
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
