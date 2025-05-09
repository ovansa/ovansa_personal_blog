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
        <section
          className='pt-15 pb-16 px-4 md:px-14'
          id='hero'
        >
          <MaxWidthWrapper>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
              <div className='space-y-6'>
                <span className='inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full'>
                  Software Tester
                </span>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight'>
                  Elevate Your Software Quality{' '}
                  <span className='text-blue-600 dark:text-blue-400'>
                    Testing Strategy
                  </span>
                </h1>
                <p className='text-lg md:text-xl'>
                  I&apos;m <strong>Muhammed Ibrahim (Ovansa)</strong>, a
                  Software Tester with over 7 years&apos; experience. I help
                  teams build reliable APIs, automate testing processes, and
                  implement quality-driven development practices that save time
                  and reduce bugs.
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
                    Building Quality Into Every Line
                  </span>
                  <div className='space-y-2 text-left w-full max-w-max'>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Turning manual test checklists into automated pipelines
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Backend testing that catches issues before users do
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Mentoring teams to build quality-first cultures
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckIcon />
                      <span className='text-gray-700 dark:text-gray-300'>
                        7+ years transforming testing practices
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
        {/* Expertise Section */}
        <section
          className='py-8 sm:py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
          id='expertise'
        >
          <MaxWidthWrapper>
            <div className='text-center mb-8 sm:mb-12 md:mb-16 px-4'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6'>
                Technical Expertise
              </h2>
              <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto'>
                With extensive experience across multiple industries, I deliver
                high-quality software through specialized skills and proven
                methodologies.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6'>
              {/* API Testing */}
              <div className='bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500'>
                <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-blue-600 dark:text-blue-400'
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
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center'>
                  API Testing & Automation
                </h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-5 text-center'>
                  Efficient test data generation for reliable API test suites.
                </p>
                <ul className='text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>
                      Scalable API test collections with CI using Postman,
                      Cypress, and RestAssured
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Efficient test data generation via scripts</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>
                      CI-integrated quality gates for consistent test automation
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>
                      Performance testing and optimization with k6 and JMeter
                    </span>
                  </li>
                </ul>
              </div>

              {/* Backend Development */}
              <div className='bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-pink-500'>
                <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-pink-600 dark:text-pink-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                    />
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center'>
                  Testable Backend Development
                </h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-5 text-center'>
                  Architecting backend services with testing in mind from day
                  one across multiple languages and frameworks.
                </p>
                <ul className='text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-pink-500 dark:text-pink-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>
                      Build Testable APIs in Node.js, Spring Boot, and Go
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-500 dark:text-pink-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Quality-first monoliths and microservices</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-500 dark:text-pink-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Structured test layers isolating business logic</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-500 dark:text-pink-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>PostgreSQL, MongoDB, and Supabase expertise</span>
                  </li>
                </ul>
              </div>

              {/* End-to-End Quality Assurance */}
              <div className='bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-500'>
                <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-green-600 dark:text-green-400'
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
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center'>
                  End-to-End Quality Assurance
                </h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-5 text-center'>
                  Creating automated user journeys that validate real-world
                  scenarios across your entire application stack.
                </p>
                <ul className='text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Cypress for critical business workflows</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Cross-platform testing with Playwright</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Automated regression in CI/CD pipelines</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Future-proof tests that evolve with your app</span>
                  </li>
                </ul>
              </div>

              {/* Testing Strategy */}
              <div className='bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-purple-500'>
                <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-purple-600 dark:text-purple-400'
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
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center'>
                  Testing Strategy & Leadership
                </h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-5 text-center'>
                  Finding the right balance between speed and thoroughness with
                  practical, proven testing approaches.
                </p>
                <ul className='text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-purple-500 dark:text-purple-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Risk-based testing frameworks</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-500 dark:text-purple-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Streamlined processes to eliminate bottlenecks</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-500 dark:text-purple-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>Junior QA mentorship for technical growth</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-500 dark:text-purple-400 mr-2 mt-1 flex-shrink-0'>
                      →
                    </span>
                    <span>BBST principles applied to complex projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Services */}
        <section
          className='py-10'
          id='services'
        >
          <MaxWidthWrapper>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                How I Can Help You
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                I offer specialized services to help teams deliver higher
                quality software and improve their testing practices.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
              {/* API Development */}
              <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-2xl font-bold mb-4'>API Development</h3>
                <p className='text-gray-600 dark:text-gray-400 mb-6'>
                  Need custom API solutions for your business or project? I
                  build:
                </p>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      RESTful APIs with secure authentication and authorization
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Performance-optimized data endpoints and services
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Integration solutions with third-party services and
                      systems
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle
                      size={20}
                      className='text-green-500 mt-1 mr-2 flex-shrink-0'
                    />
                    <span>
                      Well-documented APIs with comprehensive testing coverage
                    </span>
                  </li>
                </ul>
                {/* <Link
                  href='/api-development'
                  className={
                    buttonVariants({ variant: 'default' }) +
                    ' inline-block w-full md:w-auto'
                  }
                >
                  Learn more about API development
                </Link> */}
              </div>

              {/* Technical Mentoring */}
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
                    <span>Test automation architecture and best practices</span>
                  </li>
                </ul>
                {/* <Link
                  href='/tutoring'
                  className={
                    buttonVariants({ variant: 'default' }) +
                    ' inline-block w-full md:w-auto'
                  }
                >
                  Learn more about mentoring
                </Link> */}
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Newsletter */}
        {/* Enable this once setup */}
        {/* <Newsletter /> */}

        {/* CTA Section */}
        <section className='py-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
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
