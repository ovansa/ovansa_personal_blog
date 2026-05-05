// app/about/page.tsx

import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About - Muhammed Ibrahim | Software Test Engineer',
  description:
    'How Muhammed Ibrahim thinks about API testing, test automation, CI feedback, and practical software testing.',
  keywords: [
    'software test engineer',
    'software testing',
    'API testing',
    'test automation',
    'Muhammed Ibrahim',
    'Ovansa',
  ],
  openGraph: {
    title: 'About - Muhammed Ibrahim | Software Test Engineer',
    description:
      "A concise view of Muhammed Ibrahim's software testing principles and working style.",
    url: '/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Muhammed Ibrahim | Software Test Engineer',
    description:
      "A concise view of Muhammed Ibrahim's software testing principles and working style.",
  },
};

const principles = [
  {
    title: 'Test the risk, not just the requirement',
    body: 'Requirements describe intent. Testing has to expose where the product can fail users, data, revenue, operations, or trust.',
  },
  {
    title: 'Automation must earn its maintenance cost',
    body: 'A test suite is only valuable when it gives reliable feedback and stays understandable to the team that owns it.',
  },
  {
    title: 'CI feedback should be fast and actionable',
    body: 'A failing pipeline should help engineers decide what to inspect next, not leave them guessing through noisy reports.',
  },
  {
    title: 'Testing should improve engineering decisions',
    body: 'Good testing brings product risk into design, implementation, review, and release conversations early enough to matter.',
  },
];

const workingStyle = [
  'Clarify product risk before choosing tools or coverage targets.',
  'Map tests to business-critical API flows and user journeys.',
  'Write automation that engineers can read, debug, and maintain.',
  'Use reviews, pairing, and examples to raise team testing judgment.',
];

const range = [
  'Payment APIs and financial transaction flows',
  'SaaS products and backend services',
  'Postman, Jest, Cypress, Playwright, RestAssured, k6, and JMeter',
  'CI/CD test gates with Bitbucket Pipelines and GitHub Actions',
  'MongoDB, PostgreSQL, Redis, GraphQL, REST, and SOAP contexts',
];

export default function About() {
  return (
    <main className='bg-background text-foreground'>
      <MaxWidthWrapper className='px-4 py-16 sm:px-6 lg:px-8'>
        <section className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase text-muted-foreground'>
            About
          </p>
          <h1 className='mt-3 text-4xl font-bold tracking-normal sm:text-5xl'>
            I treat software reliability as engineering judgment, not a final
            checklist.
          </h1>
          <div className='mt-6 space-y-5 text-lg leading-8 text-muted-foreground'>
            <p>
              I&apos;m <strong>Muhammed Ibrahim</strong>, also known as{' '}
              <strong>Ovansa</strong>. I&apos;ve spent 7+ years working across
              payments, SaaS products, backend APIs, and automation-heavy teams.
            </p>
            <p>
              My best work sits where testing and engineering meet: finding the
              highest-risk flows, designing tests that give useful feedback,
              improving CI confidence, and helping teams make better release
              decisions.
            </p>
          </div>
        </section>

        <section className='mt-16'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase text-muted-foreground'>
              Principles
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-normal'>
              How I Think About Testing
            </h2>
          </div>
          <div className='mt-8 grid gap-4 md:grid-cols-2'>
            {principles.map((principle) => (
              <article
                key={principle.title}
                className='rounded-md border bg-card p-6'
              >
                <h3 className='text-lg font-bold'>{principle.title}</h3>
                <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className='mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
          <div>
            <p className='text-sm font-semibold uppercase text-muted-foreground'>
              Team Practice
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-normal'>
              How I Work With Teams
            </h2>
            <p className='mt-4 text-muted-foreground'>
              The goal is not to create a testing island. The goal is to make
              product risk visible enough that engineers, product managers, and
              testers can make better tradeoffs together.
            </p>
          </div>
          <ul className='space-y-3'>
            {workingStyle.map((item) => (
              <li
                key={item}
                className='rounded-md border bg-card p-4 text-sm text-muted-foreground'
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className='mt-16 rounded-md border bg-muted/30 p-6 sm:p-8'>
          <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
            <div>
              <p className='text-sm font-semibold uppercase text-muted-foreground'>
                Professional Range
              </p>
              <h2 className='mt-3 text-3xl font-bold tracking-normal'>
                Where my experience is strongest.
              </h2>
            </div>
            <div className='flex flex-wrap gap-3'>
              {range.map((item) => (
                <span
                  key={item}
                  className='rounded-md border bg-background px-3 py-2 text-sm font-medium'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className='mt-16 flex flex-wrap gap-3'>
          <Link
            href='/resume'
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            View Resume
          </Link>
          <Link
            href='/contact'
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            Share Project Context
          </Link>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
