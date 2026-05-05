import {
  FaArrowRight,
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
    'Muhammed Ibrahim (Ovansa) | Software Test Engineer & API Automation Specialist',
  description:
    'Muhammed Ibrahim (Ovansa) is a Software Test Engineer with 7+ years of experience in API testing, test automation, CI test gates, performance testing, and testing leadership.',
  keywords:
    'Software Test Engineer, API Testing, Test Automation, Postman, Jest, Cypress, Playwright, k6, CI/CD, Muhammed Ibrahim, Ovansa',
  alternates: {
    canonical: SiteConfig.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SiteConfig.siteUrl,
    title:
      'Muhammed Ibrahim (Ovansa) | Software Test Engineer & API Automation Specialist',
    description:
      'API testing, test automation, CI test gates, and practical testing leadership from a Software Test Engineer with 7+ years of experience.',
    siteName: 'Muhammed Ibrahim - Software Test Engineer',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Muhammed Ibrahim (Ovansa) | Software Test Engineer & API Automation Specialist',
    description:
      'API testing, test automation, CI test gates, and practical testing leadership from a Software Test Engineer with 7+ years of experience.',
    creator: '@ovansa',
  },
};

const outcomes = [
  {
    value: '200%',
    label: 'regression testing time reduction at Interswitch',
  },
  {
    value: '100%+',
    label: 'API integration test coverage increase at Accelerator App',
  },
  {
    value: '500K+',
    label: 'data points supported through UseForms testing work',
  },
  {
    value: '7+',
    label: 'years across payments, SaaS, backend, and test automation',
  },
];

const services = [
  {
    title: 'API Test Automation',
    description:
      'Design reliable Postman, Jest, RestAssured, and contract-style API checks that run in CI and catch regressions before release.',
    bullets: [
      'REST, GraphQL, and SOAP testing strategy',
      'Reusable collections, fixtures, and environment setup',
      'Bitbucket, GitHub Actions, and pipeline test gates',
    ],
  },
  {
    title: 'Backend Software Testing',
    description:
      'Work with engineering teams to make services easier to test, debug, and evolve across Node.js, NestJS, Spring Boot, and Go stacks.',
    bullets: [
      'Testable service boundaries and data setup',
      'Integration, regression, and RBAC test coverage',
      'PostgreSQL, MongoDB, Redis, and API observability context',
    ],
  },
  {
    title: 'E2E & Performance Testing',
    description:
      'Protect critical user journeys and high-risk flows with practical Cypress, Playwright, k6, and JMeter coverage.',
    bullets: [
      'Business-critical workflow automation',
      'Performance smoke checks and bottleneck discovery',
      'Maintainable suites that teams can own after handover',
    ],
  },
];

const proofPoints = [
  'Automated payment endpoint tests in Postman and Bitbucket pipelines for Interswitch.',
  'Defined E2E testing standards for NestJS services at Red Acre Ltd.',
  'Built Cypress test gates and expanded Jest API coverage on Node.js, GraphQL, and MongoDB systems.',
  'Tested payment, mobile, web, USSD, and data collection products used across Nigerian markets.',
];

const experienceSignals = [
  {
    title: 'Payment API automation',
    context: 'Interswitch',
    result:
      'Automated payment endpoint checks with Postman scripts in Bitbucket pipelines, reducing regression testing time by 200%.',
  },
  {
    title: 'Backend API coverage',
    context: 'Accelerator App',
    result:
      'Increased integration test coverage by over 100% across Node.js, GraphQL, and MongoDB services using Jest.',
  },
  {
    title: 'E2E test standards',
    context: 'Red Acre Ltd.',
    result:
      'Defined maintainable end-to-end testing standards for NestJS services, especially around the affiliates feature.',
  },
  {
    title: 'Performance testing',
    context: 'Accelerator App',
    result:
      'Ran k6 performance tests to surface bottlenecks and support stability under changing traffic conditions.',
  },
];

const skills = [
  'Postman',
  'Jest',
  'Cypress',
  'Playwright',
  'RestAssured',
  'k6',
  'JMeter',
  'Node.js',
  'NestJS',
  'GraphQL',
  'MongoDB',
  'PostgreSQL',
  'Bitbucket Pipelines',
  'GitHub Actions',
  'AWS',
];

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <WebsiteSchema />
      <main className='bg-background text-foreground'>
        <section className='border-b bg-muted/30 px-4 py-16 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
              <div className='max-w-3xl'>
                <p className='mb-4 text-sm font-semibold uppercase text-muted-foreground'>
                  Software Test Engineer | API Automation | Testing Strategy
                </p>
                <h1 className='text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
                  Software testing for API-heavy products where reliability
                  cannot be an afterthought.
                </h1>
                <p className='mt-6 text-lg leading-8 text-muted-foreground sm:text-xl'>
                  I&apos;m <strong>Muhammed Ibrahim (Ovansa)</strong>, a
                  Lagos-based Software Test Engineer with 7+ years of experience
                  across payments, SaaS, backend services, and automation. My
                  best work sits where testing meets engineering: API test
                  strategy, CI test gates, backend testability, and pragmatic team
                  mentorship.
                </p>
                <div className='mt-8 flex flex-wrap gap-3'>
                  <Link
                    href='/contact'
                    className={buttonVariants({ size: 'lg' })}
                  >
                    Discuss testing strategy
                  </Link>
                  <Link
                    href='/resume'
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'lg',
                    })}
                  >
                    View resume
                  </Link>
                  <a
                    href='https://github.com/ovansa'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'lg',
                    })}
                  >
                    GitHub <FaArrowRight className='ml-2 size-3' />
                  </a>
                </div>
                <div className='mt-6 flex gap-4 text-muted-foreground'>
                  <a
                    href='https://github.com/ovansa'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Profile'
                    className='transition-colors hover:text-foreground'
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href='https://linkedin.com/in/ovansa'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn Profile'
                    className='transition-colors hover:text-foreground'
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a
                    href='mailto:aminmuhammad18@gmail.com'
                    aria-label='Email Contact'
                    className='transition-colors hover:text-foreground'
                  >
                    <FaEnvelope size={22} />
                  </a>
                </div>
              </div>

              <div className='rounded-md border bg-background p-6 shadow-sm'>
                <p className='text-sm font-semibold uppercase text-muted-foreground'>
                  Specialist Focus
                </p>
                <h2 className='mt-3 text-2xl font-bold'>
                  API-heavy teams benefit most when testing is treated as
                  engineering work, not a release ritual.
                </h2>
                <div className='mt-6 space-y-4'>
                  {proofPoints.map((point) => (
                    <div
                      key={point}
                      className='flex gap-3'
                    >
                      <FaCheckCircle className='mt-1 size-4 flex-none text-emerald-600' />
                      <p className='text-sm leading-6 text-muted-foreground'>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className='px-4 py-10 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className='rounded-md border bg-card p-5'
                >
                  <p className='text-3xl font-bold'>{outcome.value}</p>
                  <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                    {outcome.label}
                  </p>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>

        <section
          className='px-4 py-16 sm:px-6 lg:px-8'
          id='services'
        >
          <MaxWidthWrapper>
            <div className='max-w-2xl'>
              <p className='text-sm font-semibold uppercase text-muted-foreground'>
                What I Can Do
              </p>
              <h2 className='mt-3 text-3xl font-bold tracking-normal sm:text-4xl'>
                Practical software testing for teams that need fewer surprises
                in production.
              </h2>
            </div>

            <div className='mt-10 grid gap-6 lg:grid-cols-3'>
              {services.map((service) => (
                <article
                  key={service.title}
                  className='rounded-md border bg-card p-6'
                >
                  <h3 className='text-xl font-bold'>{service.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                    {service.description}
                  </p>
                  <ul className='mt-5 space-y-3'>
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className='flex gap-3 text-sm text-muted-foreground'
                      >
                        <span
                          className='mt-2 h-1.5 w-1.5 flex-none rounded-full bg-foreground'
                          aria-hidden='true'
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>

        <section className='border-y bg-muted/30 px-4 py-16 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
              <div>
                <p className='text-sm font-semibold uppercase text-muted-foreground'>
                  Experience Signals
                </p>
                <h2 className='mt-3 text-3xl font-bold tracking-normal sm:text-4xl'>
                  Evidence from real products, not portfolio theater.
                </h2>
                <p className='mt-4 text-muted-foreground'>
                  The strongest proof here is shipped work: payment APIs,
                  backend services, CI feedback loops, performance checks, and
                  test practices that engineering teams can keep using.
                </p>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                {experienceSignals.map((signal) => (
                  <article
                    key={signal.title}
                    className='rounded-md border bg-background p-5'
                  >
                    <p className='text-xs font-semibold uppercase text-muted-foreground'>
                      {signal.context}
                    </p>
                    <h3 className='mt-2 text-lg font-bold'>{signal.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                      {signal.result}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className='px-4 py-16 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
              <div>
                <p className='text-sm font-semibold uppercase text-muted-foreground'>
                  Tooling
                </p>
                <h2 className='mt-3 text-3xl font-bold tracking-normal sm:text-4xl'>
                  Comfortable in the testing and backend toolchain.
                </h2>
                <p className='mt-4 text-muted-foreground'>
                  I focus less on tool collecting and more on making tests
                  trustworthy, maintainable, and useful to engineers.
                </p>
              </div>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-md border bg-card px-3 py-2 text-sm font-medium'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className='bg-foreground px-4 py-16 text-background sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center'>
              <div>
                <h2 className='text-3xl font-bold tracking-normal sm:text-4xl'>
                  Testing should move at the pace of product delivery.
                </h2>
                <p className='mt-4 max-w-2xl text-background/75'>
                  I work best with teams that want stronger release confidence:
                  sharper API coverage, faster CI feedback, practical
                  automation, and testing habits that survive after handoff.
                </p>
              </div>
              <div className='flex flex-wrap gap-3'>
                <Link
                  href='/contact'
                  className={buttonVariants({
                    variant: 'secondary',
                    size: 'lg',
                  })}
                >
                  Discuss a project
                </Link>
                <Link
                  href='/blog'
                  className={`${buttonVariants({
                    variant: 'outline',
                    size: 'lg',
                  })} border-background/70 bg-transparent text-background hover:bg-background hover:text-foreground`}
                >
                  Read my writing
                </Link>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>
    </>
  );
}
