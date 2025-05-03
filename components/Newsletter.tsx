import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

function Newsletter() {
  return (
    <div>
      {/* Newsletter */}
      <section className='py-16'>
        <MaxWidthWrapper>
          <div className='mx-auto max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl md:text-3xl font-bold mb-2'>
                Get Testing Insights
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Subscribe to receive practical testing tips, tutorial updates,
                and advanced QA strategies — delivered straight to your inbox.
              </p>
            </div>
            <form className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='text'
                  placeholder='Your name'
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition'
                  required
                />
                <input
                  type='email'
                  placeholder='Your email address'
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition'
                  required
                />
              </div>
              <button
                type='submit'
                className={buttonVariants({ variant: 'default' }) + ' w-full'}
              >
                Subscribe to Newsletter
              </button>
              <p className='text-xs text-gray-500 dark:text-gray-400 text-center mt-2'>
                I respect your privacy. Unsubscribe anytime. Read my{' '}
                <Link
                  href='/privacy-policy'
                  className='underline hover:text-blue-600 dark:hover:text-blue-400'
                >
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

export default Newsletter;
