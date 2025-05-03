import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import MaxWidthWrapper from './MaxWidthWrapper';

function Achievements() {
  return (
    <div>
      {/* Achievements Section */}
      <section className='py-16 bg-blue-50 dark:bg-gray-800/50'>
        <MaxWidthWrapper>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Achievements & Certifications
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Recognition and qualifications that demonstrate my commitment to
              quality and continuous learning.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow text-center'>
              <div className='h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-full w-full'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </div>
              <h3 className='font-bold'>
                CEO&apos;s Outstanding Performance Award
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Softcom Ltd., 2019
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow text-center'>
              <div className='h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-full w-full'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                  />
                </svg>
              </div>
              <h3 className='font-bold'>Software Tester of the Year</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Softcom Ltd., 2019
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow text-center'>
              <div className='h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-full w-full'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                  />
                </svg>
              </div>
              <h3 className='font-bold'>AWS Certified Cloud Practitioner</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Amazon Web Services
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow text-center'>
              <div className='h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-full w-full'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h3 className='font-bold'>Black Box Software Testing</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Association for Software Testing
              </p>
            </div>
          </div>

          <div className='mt-10 text-center'>
            <Link
              href='/about#certifications'
              className={
                buttonVariants({ variant: 'outline' }) + ' inline-block'
              }
            >
              View all certifications
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

export default Achievements;
