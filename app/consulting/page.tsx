import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react';

import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';
import SiteConfig from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Software Testing Consulting Services | Muhammed Ibrahim (Ovansa)',
  description:
    'Software testing advisory for API testing, test automation, CI feedback, and pragmatic testing process improvement by Muhammed Ibrahim.',
  keywords:
    'test automation consulting, API testing strategy, testing process improvement, software testing consultant, test architecture design, Muhammed Ibrahim, Ovansa',
  alternates: {
    canonical: `${SiteConfig.siteUrl}/consulting`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SiteConfig.siteUrl}/consulting`,
    title: 'Software Testing Consulting Services | Muhammed Ibrahim (Ovansa)',
    description:
      'Software testing advisory for API testing, automation strategy, CI feedback, and practical testing process improvement.',
    siteName: 'Muhammed Ibrahim - Software Test Engineer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Testing Consulting Services | Muhammed Ibrahim (Ovansa)',
    description:
      'Software testing advisory for API testing, automation strategy, CI feedback, and practical testing process improvement.',
    creator: '@ovansa',
  },
};

export default function Consulting() {
  return (
    <main className='bg-background text-foreground'>
      {/* Hero Section */}
      <section className='pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div>
                <span className='inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-4'>
                  Software Testing Advisory
                </span>
                <h1 className='text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4'>
                  Strengthen Your{' '}
                  <span className='text-blue-600 dark:text-blue-400'>
                    Testing System
                  </span>
                </h1>
                <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300'>
                  Practical guidance for API-heavy teams that need reliable
                  automation, faster CI feedback, and testing practices that
                  engineers can maintain.
                </p>
              </div>
              <div className='flex flex-wrap gap-4'>
                <Link
                  href='#services'
                  className={buttonVariants({ size: 'lg' }) + ' inline-block'}
                >
                  Review Scope
                </Link>
                <Link
                  href='/contact'
                  className={
                    buttonVariants({ variant: 'outline', size: 'lg' }) +
                    ' inline-block'
                  }
                >
                  Share Context
                </Link>
              </div>
            </div>
            <div className='relative h-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
              <div className='absolute inset-0 flex flex-col items-center justify-center p-6'>
                <div className='text-center space-y-6'>
                  <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
                    Common Testing Bottlenecks
                  </h2>
                  <ul className='space-y-3 text-left'>
                    <li className='flex items-start'>
                      <CheckCircle
                        size={20}
                        className='text-green-500 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Production defects from weak API coverage
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle
                        size={20}
                        className='text-green-500 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Slow or flaky regression suites
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle
                        size={20}
                        className='text-green-500 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-700 dark:text-gray-300'>
                        Automation that is hard to maintain
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle
                        size={20}
                        className='text-green-500 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-700 dark:text-gray-300'>
                        CI pipelines that do not give useful feedback
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Experience Section */}
      <section className='py-16'>
        <MaxWidthWrapper>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Experience-Backed Advisory
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              My work is grounded in shipped products across fintech, SaaS,
              backend services, and payment systems. The focus is practical:
              reduce release risk, improve feedback loops, and make test suites
              useful to engineering teams.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4'>
                <Users className='h-6 w-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Team Assessment</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Reviewed test coverage, delivery flow, and team practices to
                identify gaps that materially affect release confidence.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4'>
                <Lightbulb className='h-6 w-6 text-green-600 dark:text-green-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>
                Strategic Implementation
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Implemented test automation strategies that reduced regression
                testing time by 200% while increasing reliability.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4'>
                <Target className='h-6 w-6 text-purple-600 dark:text-purple-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Process Optimization</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Optimized test processes and CI/CD integration for faster
                feedback cycles and more confident releases.
              </p>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-gray-800/50 p-6 rounded-lg'>
            <blockquote className='text-lg italic text-gray-700 dark:text-gray-300 text-center'>
              &quot;Good testing work turns unclear risk into specific, testable
              decisions the team can act on.&quot;
            </blockquote>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Services Section */}
      <section id='services' className='py-16 bg-gray-50 dark:bg-gray-900'>
        <MaxWidthWrapper>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Advisory Areas
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Focused engagements for teams that want stronger API coverage,
              clearer automation strategy, and better release feedback.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Test Automation Strategy */}
            <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>
                Test Automation Strategy
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                Successful test automation requires more than tool selection.
                The work starts with clarifying risk, scope, ownership, timing,
                and the feedback your team actually needs.
              </p>

              <div className='space-y-4 mb-6'>
                <div className='border-l-4 border-blue-500 pl-4 py-1'>
                  <h4 className='font-bold text-blue-700 dark:text-blue-400'>
                    Why
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Define clear objectives for your automation investment. What
                    specific benefits are you looking to achieve?
                  </p>
                </div>

                <div className='border-l-4 border-green-500 pl-4 py-1'>
                  <h4 className='font-bold text-green-700 dark:text-green-400'>
                    What
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Identify which testing tasks are worth automating and which
                    are better left manual. Focus on high-ROI areas.
                  </p>
                </div>

                <div className='border-l-4 border-purple-500 pl-4 py-1'>
                  <h4 className='font-bold text-purple-700 dark:text-purple-400'>
                    When
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Determine optimal timing for writing, running, and
                    maintaining test code. Move testing as close to development
                    as possible.
                  </p>
                </div>

                <div className='border-l-4 border-yellow-500 pl-4 py-1'>
                  <h4 className='font-bold text-yellow-700 dark:text-yellow-400'>
                    Where
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Identify which components, systems, and layers are best
                    suited for automation. Improve testability where needed.
                  </p>
                </div>

                <div className='border-l-4 border-red-500 pl-4 py-1'>
                  <h4 className='font-bold text-red-700 dark:text-red-400'>
                    Who
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Determine the right people for test automation tasks. Assess
                    skill gaps and develop training plans.
                  </p>
                </div>

                <div className='border-l-4 border-indigo-500 pl-4 py-1'>
                  <h4 className='font-bold text-indigo-700 dark:text-indigo-400'>
                    How
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Select appropriate tools and frameworks. Establish processes
                    for running tests and reporting results.
                  </p>
                </div>
              </div>

              <Link
                href='/contact'
                className='inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline'
              >
                <span>Discuss strategy scope</span>
                <ArrowRight size={16} className='ml-1' />
              </Link>
            </div>

            {/* API Testing Optimization */}
            <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>
                API Testing Optimization
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                Design and improve maintainable API test suites that catch
                meaningful regressions early and fit naturally into your CI/CD
                pipeline.
              </p>

              <ul className='space-y-3 mb-6'>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Test Architecture Design:</strong> Create scalable
                    test architecture that grows with your API.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Tool Selection:</strong> Choose the right tools
                    (Postman, Jest, RestAssured, etc.) for your system and team.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>CI/CD Integration:</strong> Seamlessly integrate API
                    tests into your delivery pipeline with useful reporting.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Performance Testing:</strong> Set up effective
                    performance tests using tools like k6.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Test Data Management:</strong> Establish efficient
                    test data strategies for your API tests.
                  </span>
                </li>
              </ul>

              <Link
                href='/contact'
                className='inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline'
              >
                <span>Improve your API testing</span>
                <ArrowRight size={16} className='ml-1' />
              </Link>
            </div>

            {/* Team Coaching */}
            <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>Team Coaching</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                Build team capability through focused coaching on API testing,
                automation design, debugging, and maintainable test ownership.
              </p>

              <ul className='space-y-3 mb-6'>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Skill Assessment:</strong> Identify strengths and
                    improvement areas in your testing team.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Targeted Training:</strong> Workshops focused on
                    your team&apos;s systems and testing risks.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Hands-on Practice:</strong> Real-world exercises to
                    reinforce learning.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Mentorship:</strong> Practical support for junior
                    SDETs and software testers.
                  </span>
                </li>
              </ul>

              <Link
                href='/contact'
                className='inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline'
              >
                <span>Discuss team coaching</span>
                <ArrowRight size={16} className='ml-1' />
              </Link>
            </div>

            {/* Testing Process Audit */}
            <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>Testing Process Audit</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                Review your current testing process to identify gaps,
                duplicated effort, weak feedback loops, and automation that no
                longer earns its maintenance cost.
              </p>

              <ul className='space-y-3 mb-6'>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Process Analysis:</strong> Review existing test
                    processes and practices.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Gap Identification:</strong> Pinpoint missing or
                    inefficient testing activities.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Improvement Roadmap:</strong> Prioritized
                    recommendations for improving testing feedback.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Check
                    size={20}
                    className='text-green-500 mt-1 mr-2 flex-shrink-0'
                  />
                  <span className='text-gray-700 dark:text-gray-300'>
                    <strong>Metrics Evaluation:</strong> Assess your testing
                    metrics and measurement approach.
                  </span>
                </li>
              </ul>

              <Link
                href='/contact'
                className='inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline'
              >
                <span>Discuss an audit</span>
                <ArrowRight size={16} className='ml-1' />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Process Section */}
      <section className='py-16'>
        <MaxWidthWrapper>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Engagement Process
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              A structured path from current-state review to practical
              recommendations and implementation support.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center'>
              <div className='h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                  1
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Discovery</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Understand the product, risk profile, release process, and
                current testing approach.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center'>
              <div className='h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                  2
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Assessment</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Analyze test coverage, tools, CI feedback, data setup, and team
                ownership.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center'>
              <div className='h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                  3
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Implementation</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Implement the highest-value changes with the team, keeping
                maintainability in view.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center'>
              <div className='h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                  4
                </span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Follow-up</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Handover, review adoption, and adjust based on real delivery
                feedback.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FAQ Section */}
      <section className='py-16'>
        <MaxWidthWrapper>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Engagement Questions
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Practical details for software testing advisory work.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>
                How long does a typical consulting engagement last?
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                It depends on scope. A focused assessment can take a few days;
                implementation support or team coaching may run over several
                weeks. The timeline should match the risk and delivery goals.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>
                Do you work with remote teams?
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Yes. I work well with distributed teams when access, ownership,
                meeting rhythm, and written handoffs are clear.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>
                What industries have you worked with?
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Fintech, payments, SaaS, data collection, and backend product
                teams. The principles stay consistent, but the risk model changes
                by domain.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>
                Can you help with specific testing tools?
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Yes. I work with Postman, Jest, Cypress, Playwright, RestAssured,
                k6, and related CI tooling. The tool choice should follow the
                risk, team skill, and maintenance model.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <MaxWidthWrapper>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Make product risk visible early enough to guide decisions.
            </h2>
            <p className='text-lg mb-8 text-blue-100'>
              Share the product context, current test stack, stakeholders, and
              highest-risk flows. I&apos;ll respond with a practical next step.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className={
                  buttonVariants({ variant: 'secondary', size: 'lg' }) +
                  ' inline-block'
                }
              >
                Share Project Context
              </Link>
              <Link
                href='#'
                // onClick={(e) => {
                //   e.preventDefault();
                //   window.location.href = 'mailto:aminmuhammad18@gmail.com';
                // }}
                className={
                  buttonVariants({ variant: 'outline', size: 'lg' }) +
                  ' inline-block bg-transparent border-white text-white hover:bg-white/10'
                }
              >
                Email Directly
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Book a Call Section */}
      <section className='py-16'>
        <MaxWidthWrapper>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Engagement Options
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Choose the format that matches the work: scoping, strategy,
              implementation support, or team coaching.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4'>
                <Calendar className='h-6 w-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Discovery Call</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                A focused call to understand the product, release risks, and
                current testing bottlenecks.
              </p>
              <Link
                href='https://calendly.com/muhammed-ibrahim/discovery'
                target='_blank'
                rel='noopener noreferrer'
                className={
                  buttonVariants({ variant: 'default', size: 'sm' }) + ' w-full'
                }
              >
                Schedule Scope Call
              </Link>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4'>
                <Target className='h-6 w-6 text-green-600 dark:text-green-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Strategy Session</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                A deeper review of your testing approach with actionable
                recommendations.
              </p>
              <Link
                href='https://calendly.com/muhammed-ibrahim/strategy-session'
                target='_blank'
                rel='noopener noreferrer'
                className={
                  buttonVariants({ variant: 'default', size: 'sm' }) + ' w-full'
                }
              >
                Book Strategy Session
              </Link>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4'>
                <Users className='h-6 w-6 text-purple-600 dark:text-purple-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Team Workshop</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                Focused workshop sessions based on your team&apos;s systems,
                workflows, and test ownership gaps.
              </p>
              <Link
                href='/contact'
                className={
                  buttonVariants({ variant: 'default', size: 'sm' }) + ' w-full'
                }
              >
                Discuss Workshop
              </Link>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              For custom advisory or implementation support, send the product
              context and the testing problems worth solving.
            </p>
            <Link
              href='/contact'
              className={
                buttonVariants({ variant: 'outline' }) + ' inline-block'
              }
            >
              Share Context
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer/Newsletter Section */}
      <section className='py-12 bg-gray-50 dark:bg-gray-900'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Testing Notes and Practical Lessons
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                Occasional writing on API testing, automation strategy, and
                software testing practice.
              </p>
              <form className='space-y-4'>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
                    required
                  />
                  <button
                    type='submit'
                    className={
                      buttonVariants({ variant: 'default' }) +
                      ' whitespace-nowrap'
                    }
                  >
                    Subscribe
                  </button>
                </div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
            <div className='space-y-4'>
              <h3 className='text-xl font-bold'>Connect With Me</h3>
              <div className='flex space-x-4'>
                <Link
                  href='https://twitter.com/ovansa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white'
                  aria-label='Twitter'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </Link>
                <Link
                  href='https://linkedin.com/in/muhammed-ibrahim'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center text-white'
                  aria-label='LinkedIn'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </Link>
                <Link
                  href='https://github.com/ovansa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='h-10 w-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white'
                  aria-label='GitHub'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <p className='text-gray-600 dark:text-gray-400'>
                  Email: aminmuhammad18@gmail.com
                </p>
                <p className='text-gray-600 dark:text-gray-400'>
                  Based in Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
            <p className='text-center text-gray-500 dark:text-gray-400'>
              &copy; {new Date().getFullYear()} Muhammed Ibrahim. All rights
              reserved.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
