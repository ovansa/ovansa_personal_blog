import {
  FaCheckCircle,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import HomePageSchema, { WebsiteSchema } from '@/components/HomePageSchema';

import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';
import SiteConfig from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export const runtime = 'edge';

export const metadata: Metadata = {
  title:
    'Muhammed Ibrahim (Ovansa) | Software Test Engineer & API Automation Expert',
  description:
    'Muhammed Ibrahim (Ovansa) - Software Test Engineer with 6+ years of experience in API testing, test automation, and QA best practices. Specializing in high-quality software delivery, CI/CD integration, and quality assurance mentorship.',
  keywords:
    'Software Test Engineer, QA Engineer, API Testing, Test Automation, Postman, Jest, Cypress, CI/CD, Quality Assurance, Muhammed Ibrahim, Ovansa',
  alternates: {
    canonical: SiteConfig.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SiteConfig.siteUrl,
    title:
      'Muhammed Ibrahim (Ovansa) | Software Test Engineer & API Automation Expert',
    description:
      'Learn API testing, test automation and QA best practices from Muhammed Ibrahim (Ovansa), a Software Test Engineer with 6+ years of experience in building high-quality software.',
    siteName: 'Muhammed Ibrahim - Software Test Engineer',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Muhammed Ibrahim (Ovansa) | Software Test Engineer & API Automation Expert',
    description:
      'Learn API testing, test automation and QA best practices from Muhammed Ibrahim (Ovansa), a Software Test Engineer with 6+ years of experience in building high-quality software.',
    creator: '@ovansa',
  },
};

const CheckIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='text-green-500'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <WebsiteSchema />
      <main className='bg-background text-foreground'>
        {/* Hero */}
        <section className='pt-20 pb-16 px-4 md:px-14' id='hero'>
          <MaxWidthWrapper>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
              <div className='space-y-6'>
                <span className='inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full'>
                  Software Test Engineer
                </span>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight'>
                  Elevate Your Software Quality{' '}
                  <span className='text-blue-600 dark:text-blue-400'>
                    Testing Strategy
                  </span>
                </h1>
                <p className='text-lg md:text-xl'>
                  I&apos;m <strong>Muhammed Ibrahim (Ovansa)</strong>, a
                  Software Test Engineer with over 6 years&apos; experience. I
                  help teams build reliable APIs, automate testing processes,
                  and implement quality-driven development practices that save
                  time and reduce bugs.
                </p>
                <div className='flex flex-wrap gap-4'>
                  <Link
                    href='/about'
                    className={buttonVariants({ size: 'lg' }) + ' inline-block'}
                  >
                    Learn more about me
                  </Link>
                  <Link
                    href='#expertise'
                    className={
                      buttonVariants({ variant: 'outline', size: 'lg' }) +
                      ' inline-block'
                    }
                  >
                    Explore my expertise
                  </Link>
                </div>
                <div className='flex space-x-4 pt-2'>
                  <a
                    href='https://github.com/ovansa'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Profile'
                    className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href='https://linkedin.com/in/ovansa'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn Profile'
                    className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href='mailto:aminmuhammad18@gmail.com'
                    aria-label='Email Contact'
                    className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>

              <div className='relative w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 rounded-lg shadow-lg overflow-hidden'>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center'>
                  <span className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>
                    Test Early. Ship Confidently.
                  </span>
                  <div className='space-y-2 text-left w-full max-w-xs'>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        API Automation Expert
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        CI/CD Integration Specialist
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Award-winning QA Engineer
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        AWS Certified Cloud Practitioner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Expertise Section */}
        <section className='py-16 bg-gray-50 dark:bg-gray-900' id='expertise'>
          <MaxWidthWrapper>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                My Technical Expertise
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                With experience across multiple industries and projects,
                I&apos;ve developed specialized skills to help teams deliver
                high-quality software.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* API Testing */}
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <div className='h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-blue-600 dark:text-blue-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  API Testing & Automation
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Expert in REST, GraphQL API testing using Postman, Jest, and
                  custom frameworks. Increased test coverage by over 100% in
                  previous roles.
                </p>
                <ul className='text-sm text-gray-700 dark:text-gray-300 space-y-1'>
                  <li>• Postman API automation</li>
                  <li>• Jest for Node.js/GraphQL testing</li>
                  <li>• API test architecture design</li>
                  <li>• Performance testing with k6</li>
                </ul>
              </div>

              {/* Test Automation */}
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <div className='h-14 w-14 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-green-600 dark:text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  End-to-End Test Automation
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Specialist in creating robust end-to-end test suites that
                  catch real-world issues before they reach production.
                </p>
                <ul className='text-sm text-gray-700 dark:text-gray-300 space-y-1'>
                  <li>• Cypress for critical user journeys</li>
                  <li>• Playwright for cross-browser testing</li>
                  <li>• CI/CD pipeline integration</li>
                  <li>• Regression test automation</li>
                </ul>
              </div>

              {/* Testing Strategy */}
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <div className='h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-purple-600 dark:text-purple-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Testing Strategy & Mentorship
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Help teams implement efficient testing strategies that balance
                  coverage, speed, and maintenance needs.
                </p>
                <ul className='text-sm text-gray-700 dark:text-gray-300 space-y-1'>
                  <li>• Risk-based testing approaches</li>
                  <li>• Testing process optimization</li>
                  <li>• Junior QA & SDET mentoring</li>
                  <li>• Black Box Software Testing certified</li>
                </ul>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Services */}
        <section className='py-16' id='services'>
          <MaxWidthWrapper>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                How I Can Help You
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                I offer specialized services to help teams improve their testing
                practices and deliver higher quality software.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
              {/* Consulting */}
              <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-2xl font-bold mb-4'>
                  Testing Consultation
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-6'>
                  Need expert eyes on your testing strategy or automation setup?
                  I&apos;ll help you:
                </p>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Design scalable test architectures that grow with your
                      product
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Optimize test suites to reduce flakiness and maintenance
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>Implement CI/CD-friendly automation strategies</span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Embed quality practices into your development workflow
                    </span>
                  </li>
                </ul>
                <Link
                  href='/consulting'
                  className={
                    buttonVariants({ variant: 'default' }) +
                    ' inline-block w-full md:w-auto'
                  }
                >
                  Learn more about consulting
                </Link>
              </div>

              {/* Tutoring */}
              <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-2xl font-bold mb-4'>Technical Mentoring</h3>
                <p className='text-gray-600 dark:text-gray-400 mb-6'>
                  Looking to level up your testing skills? I offer personalized
                  coaching on:
                </p>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      API testing and automation frameworks (Postman, Jest,
                      etc.)
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      End-to-end testing strategies with Cypress and Playwright
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Debugging techniques for test failures and issues
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>QA interview preparation and career advancement</span>
                  </li>
                </ul>
                <Link
                  href='/tutoring'
                  className={
                    buttonVariants({ variant: 'default' }) +
                    ' inline-block w-full md:w-auto'
                  }
                >
                  Learn more about mentoring
                </Link>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

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

        {/* CTA Section */}
        <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
          <MaxWidthWrapper>
            <div className='text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Ready to improve your testing strategy?
              </h2>
              <p className='text-lg mb-8 text-blue-100'>
                Let&apos;s work together to build more reliable software with
                efficient, effective testing.
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                <Link
                  href='/contact'
                  className={
                    buttonVariants({ variant: 'secondary', size: 'lg' }) +
                    ' inline-block'
                  }
                >
                  Get in touch
                </Link>
                <Link
                  href='/blog'
                  className={
                    buttonVariants({ variant: 'outline', size: 'lg' }) +
                    ' inline-block bg-transparent border-white text-white hover:bg-white/10'
                  }
                >
                  Read my articles
                </Link>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>
    </>
  );
}
