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
                Teaching testers to leverage better tools
                <br />
                and inspiring developers to embrace a test-driven mindset.
              </h1>
              <p className='text-lg md:text-xl'>
                I’m <strong>Muhammed Ibrahim (Ovansa)</strong>, a Software Test Engineer
                with over 6 years’ experience. Through tutorials, best practices, and real-world insights,
                I help teams and individuals build high-quality APIs, infrastructure, and user interfaces with confidence.
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
           
            <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800 -rotate-1 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-400">
                 Test Early. Ship Confidently.
                </span>
            </div>

          </div>
        </MaxWidthWrapper>

        {/* Sub-hero punchline */}
        <div className='text-center mt-12'>
          <p className='text-xl font-semibold rotate-1'>
            Better Testing. Better Teams.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className='py-5 px-16'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            {/* Consulting */}
            <div className='flex flex-col md:flex-row-reverse items-center gap-6'>
              <div className='-rotate-1'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                  Consulting
                </h2>
                <p className='text-lg md:text-xl mb-4'>
                  Need a fresh pair of expert eyes on your testing strategy or automation setup?
                  I help teams design scalable test architectures, optimize test suites,
                  and embed quality practices into their development cycles.
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
                  Whether you&apos;re a junior tester or an experienced QA engineer,
                  I offer one-on-one coaching on API testing, automation frameworks,
                  debugging strategies, and interview preparation to help you level up your skills.
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
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Newsletter */}
      <section className='bg-gray-100 dark:bg-gray-800 py-16'>
        <MaxWidthWrapper>
          <div className='mx-auto max-w-lg text-center space-y-6'>
            <h2 className='text-2xl font-semibold'>Stay Connected</h2>
            <p className='text-gray-600 dark:text-gray-400'>
              Get practical testing tips, new tutorials, workshop updates, and testing insights — delivered straight to your inbox. No spam, just valuable content.
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
