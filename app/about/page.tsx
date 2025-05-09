// app/about/page.tsx

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Me - Muhammed Ibrahim | Software Test Engineer',
  description:
    'Learn about Muhammed Ibrahim, a Software Test Engineer with 7+ years of experience dedicated to elevating software quality through strategic testing and automation.',
  keywords: [
    'software test engineer',
    'quality assurance',
    'API testing',
    'test automation',
    'Muhammed Ibrahim',
    'Ovansa',
  ],
  openGraph: {
    title: 'About Me - Muhammed Ibrahim | Software Test Engineer',
    description:
      'Get to know the person behind the tests - my journey, philosophy, and approach to quality software engineering.',
    url: '/about',
    type: 'profile',
    images: [
      {
        url: '/images/about-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammed Ibrahim - Software Test Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Me - Muhammed Ibrahim | Software Test Engineer',
    description:
      'Get to know the person behind the tests - my journey, philosophy, and approach to quality software engineering.',
    images: ['/images/about-cover.jpg'],
  },
};

const CheckIcon = () => (
  <FaCheckCircle
    className='text-green-500 flex-shrink-0 mt-1 mr-2'
    size={18}
  />
);

export default function About() {
  return (
    <main className='bg-background text-foreground'>
      <MaxWidthWrapper className='py-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <section className='mb-16'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row gap-8 items-start'>
              <div className='flex-1'>
                <h1 className='text-4xl font-bold tracking-tight mb-6'>
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400'>
                    The Person Behind the Tests
                  </span>
                </h1>
                <p className='text-xl mb-6'>
                  I&apos;m <strong>Muhammed Ibrahim</strong>, but you might know
                  me as <strong>Ovansa</strong>.
                </p>
                <p className='text-lg text-muted-foreground mb-6'>
                  For over 7 years, I&apos;ve been on a mission to transform how
                  teams approach software testing. I believe quality isn&apos;t
                  just about catching bugs; it&apos;s about building processes
                  that prevent them from happening in the first place.
                </p>
                <div className='bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-6'>
                  <p className='italic text-blue-800 dark:text-blue-200'>
                    &quot;Quality is never an accident; it is always the result
                    of intelligent effort.&quot;
                  </p>
                  <p className='text-right text-sm text-blue-600 dark:text-blue-300 mt-2'>
                    — John Ruskin
                  </p>
                </div>
              </div>

              <div className='w-full md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 rounded-lg shadow-lg p-6'>
                <div className='text-center mb-4'>
                  <div className='inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500'>
                    <div className='bg-white dark:bg-gray-900 rounded-full p-1'>
                      <div className='h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold'>
                        MI
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-700 dark:text-gray-300'>
                      Location:
                    </span>
                    <span className='font-medium'>Lagos, Nigeria</span>
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-700 dark:text-gray-300'>
                      Experience:
                    </span>
                    <span className='font-medium'>7+ Years</span>
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-700 dark:text-gray-300'>
                      Specialty:
                    </span>
                    <span className='font-medium'>Software Testing</span>
                    {/* <span className='font-medium'>
                      API Testing & Automation
                    </span> */}
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-700 dark:text-gray-300'>
                      Focus:
                    </span>
                    <span className='font-medium'>
                      Quality-First Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Testing Philosophy */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 pb-2 border-b border-border'>
            My Testing Philosophy
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
              <p className='text-lg mb-6'>
                After years of watching teams struggle with testing bottlenecks
                and quality issues, I&apos;ve developed a philosophy that turns
                traditional QA on its head:
              </p>

              <div className='space-y-4'>
                <div className='flex'>
                  <CheckIcon />
                  <div>
                    <h3 className='font-bold text-lg'>
                      Test Early, Test Often
                    </h3>
                    <p className='text-muted-foreground'>
                      Quality doesn&apos;t begin when development ends. The best
                      teams integrate testing from day one, catching issues
                      before they become embedded in the codebase.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <CheckIcon />
                  <div>
                    <h3 className='font-bold text-lg'>
                      Automation Is An Investment
                    </h3>
                    <p className='text-muted-foreground'>
                      Well-designed test automation isn&apos;t just about saving
                      time today; it&apos;s about creating capacity for
                      innovation tomorrow.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <CheckIcon />
                  <div>
                    <h3 className='font-bold text-lg'>Balance is Everything</h3>
                    <p className='text-muted-foreground'>
                      Not everything needs 100% test coverage. I believe in
                      applying the right testing strategy for each component
                      based on risk, complexity, and user impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-4 text-blue-600 dark:text-blue-400'>
                Why I Do What I Do
              </h3>
              <p className='mb-4'>
                I still remember the moment that defined my career: watching
                users struggle with a banking app my team had built, not because
                of missing features, but because of reliability issues we could
                have caught.
              </p>
              <p className='mb-4'>
                That day, I realized quality isn&apos;t just a technical
                concern; it&apos;s about people&apos;s trust in the technology
                they depend on.
              </p>
              <p>
                Today, whether I&apos;m automating payment API tests at
                Interswitch or mentoring junior QAs, my mission remains the
                same: to build software that works reliably when it matters
                most.
              </p>
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 pb-2 border-b border-border'>
            My Career Journey
          </h2>

          <div className='space-y-12'>
            {/* Timeline */}
            <div className='relative'>
              {/* Line */}
              <div className='absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400'></div>

              {/* Items */}
              <div className='space-y-12'>
                {/* Interswitch */}
                <div className='relative pl-14'>
                  <div className='absolute left-0 top-1 h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center'>
                    <span className='text-white font-bold'>1</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>
                      QA Engineer at Interswitch
                    </h3>
                    <p className='text-muted-foreground mb-2'>
                      Sep 2024 – Present
                    </p>
                    <p className='mb-4'>
                      Leading API testing automation initiatives for
                      Africa&apos;s largest payment infrastructure company.
                      Here, my work directly impacts millions of daily financial
                      transactions across the continent.
                    </p>
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>
                      Key Achievement:
                    </p>
                    <p className='italic'>
                      Reduced regression testing time by 200% while increasing
                      test coverage through Postman automation in Bitbucket
                      pipelines.
                    </p>
                  </div>
                </div>

                {/* Red Acre */}
                <div className='relative pl-14'>
                  <div className='absolute left-0 top-1 h-10 w-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center'>
                    <span className='text-white font-bold'>2</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Senior SDET at Red Acre Ltd.
                    </h3>
                    <p className='text-muted-foreground mb-2'>
                      Jan 2023 – May 2024
                    </p>
                    <p className='mb-4'>
                      Established end-to-end testing standards for NestJS
                      microservices while mentoring junior team members on
                      modern testing approaches.
                    </p>
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>
                      Key Achievement:
                    </p>
                    <p className='italic'>
                      Created a comprehensive testing framework that became the
                      standard across multiple product teams.
                    </p>
                  </div>
                </div>

                {/* Accelerator App */}
                <div className='relative pl-14'>
                  <div className='absolute left-0 top-1 h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center'>
                    <span className='text-white font-bold'>3</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Software Test Engineer at Accelerator App
                    </h3>
                    <p className='text-muted-foreground mb-2'>
                      Apr 2021 – Jan 2023
                    </p>
                    <p className='mb-4'>
                      Doubled integration test coverage for Node.js and GraphQL
                      projects while implementing performance testing to
                      optimize server resources.
                    </p>
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>
                      Key Achievement:
                    </p>
                    <p className='italic'>
                      Built end-to-end Cypress tests that became critical
                      quality gates in the CI/CD pipeline.
                    </p>
                  </div>
                </div>

                {/* Softcom */}
                <div className='relative pl-14'>
                  <div className='absolute left-0 top-1 h-10 w-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center'>
                    <span className='text-white font-bold'>4</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Software Test Analyst at Softcom Ltd.
                    </h3>
                    <p className='text-muted-foreground mb-2'>
                      Mar 2018 – Apr 2021
                    </p>
                    <p className='mb-4'>
                      My foundation in testing began here, working on the Eyowo
                      payment app and UseForms data collection platform used by
                      major organizations across Nigeria.
                    </p>
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>
                      Key Achievement:
                    </p>
                    <p className='italic'>
                      Received Software Tester of the Year and CEO&apos;s
                      Outstanding Performance Award in 2019.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 pb-2 border-b border-border'>
            Technical Expertise
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* API Testing */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500'>
              <h3 className='text-xl font-bold mb-4 text-blue-600 dark:text-blue-400'>
                API Testing Excellence
              </h3>
              <p className='text-muted-foreground mb-4'>
                My primary specialty and passion. I transform manual API testing
                into automated, repeatable processes.
              </p>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-blue-500 mr-2'></span>
                  <span>Postman Advanced Scripting</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-blue-500 mr-2'></span>
                  <span>Jest for API Integration</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-blue-500 mr-2'></span>
                  <span>RestAssured Framework</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-blue-500 mr-2'></span>
                  <span>GraphQL Testing</span>
                </div>
              </div>
            </div>

            {/* Automation Frameworks */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-green-500'>
              <h3 className='text-xl font-bold mb-4 text-green-600 dark:text-green-400'>
                End-to-End Testing
              </h3>
              <p className='text-muted-foreground mb-4'>
                Building maintainable automated test suites that validate
                complete user journeys.
              </p>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-green-500 mr-2'></span>
                  <span>Cypress Test Architecture</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-green-500 mr-2'></span>
                  <span>Playwright Multi-browser</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-green-500 mr-2'></span>
                  <span>CI/CD Pipeline Integration</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-green-500 mr-2'></span>
                  <span>Page Object Modeling</span>
                </div>
              </div>
            </div>

            {/* Performance & Other */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-purple-500'>
              <h3 className='text-xl font-bold mb-4 text-purple-600 dark:text-purple-400'>
                Performance & Security
              </h3>
              <p className='text-muted-foreground mb-4'>
                Ensuring applications perform under load and remain secure
                against threats.
              </p>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-purple-500 mr-2'></span>
                  <span>k6 Load Testing</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-purple-500 mr-2'></span>
                  <span>JMeter Performance Tests</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-purple-500 mr-2'></span>
                  <span>API Security Testing</span>
                </div>
                <div className='flex items-center'>
                  <span className='h-2 w-2 rounded-full bg-purple-500 mr-2'></span>
                  <span>OWASP Testing Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 pb-2 border-b border-border'>
            Education & Professional Development
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Formal Education</h3>
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
                <h4 className='font-bold'>BSc Computer Science</h4>
                <p className='text-muted-foreground'>University of Ilorin</p>
                <p className='text-sm text-muted-foreground mt-2'>
                  Nov 2010 – Jul 2014
                </p>
                <p className='mt-4'>
                  My computer science foundation gave me the theoretical
                  understanding that has proven invaluable throughout my career
                  in software testing and quality assurance.
                </p>
              </div>
            </div>

            <div>
              <h3 className='text-xl font-bold mb-4'>
                Certifications & Continuous Learning
              </h3>
              <div className='space-y-4'>
                <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start'>
                  <div className='mr-4 text-blue-500 dark:text-blue-400 text-2xl'>
                    🏆
                  </div>
                  <div>
                    <h4 className='font-bold'>
                      AWS Certified Cloud Practitioner
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Amazon Web Services
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start'>
                  <div className='mr-4 text-blue-500 dark:text-blue-400 text-2xl'>
                    🏆
                  </div>
                  <div>
                    <h4 className='font-bold'>
                      Black Box Software Testing (Bug Advocacy)
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Association for Software Testing
                    </p>
                  </div>
                </div>

                <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start'>
                  <div className='mr-4 text-blue-500 dark:text-blue-400 text-2xl'>
                    🏆
                  </div>
                  <div>
                    <h4 className='font-bold'>
                      Rapid Software Testing Applied
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Satisfice Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Testing / Personal */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 pb-2 border-b border-border'>
            Beyond Testing
          </h2>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
            <p className='text-lg mb-6'>
              When I&apos;m not finding bugs or automating tests, you might find
              me:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex flex-col items-center text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                <div className='text-3xl mb-2'>📚</div>
                <h3 className='font-bold mb-2'>Continuous Learner</h3>
                <p className='text-sm text-muted-foreground'>
                  Always exploring new testing tools and methodologies to stay
                  ahead of industry trends
                </p>
              </div>

              <div className='flex flex-col items-center text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                <div className='text-3xl mb-2'>💻</div>
                <h3 className='font-bold mb-2'>Tech Community Contributor</h3>
                <p className='text-sm text-muted-foreground'>
                  Sharing testing insights through articles and community
                  discussions
                </p>
              </div>

              <div className='flex flex-col items-center text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                <div className='text-3xl mb-2'>👨‍👩‍👧‍👦</div>
                <h3 className='font-bold mb-2'>Mentor</h3>
                <p className='text-sm text-muted-foreground'>
                  Helping the next generation of testers develop their skills
                  and careers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className='mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-center text-white'>
            <h3 className='text-2xl font-bold mb-4'>Let&apos;s Talk Quality</h3>
            <p className='text-lg mb-6 max-w-2xl mx-auto'>
              Whether you need help with your testing strategy, automation
              framework, or just want to chat about quality assurance best
              practices, I&apos;m here to help.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='/contact'
                className='px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors'
              >
                Contact Me
              </Link>
              <Link
                href='/blog'
                className='px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors'
              >
                Read My Articles
              </Link>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
