import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import HomePageSchema, { WebsiteSchema } from '@/components/HomePageSchema';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import type { Metadata } from 'next';
import SiteConfig from '@/config/site';
import resume from '@/config/resume.json';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Muhammed Ibrahim (Ovansa) | Senior QA Engineer',
  description: SiteConfig.description,
  alternates: { canonical: SiteConfig.siteUrl },
  openGraph: {
    type: 'website',
    url: SiteConfig.siteUrl,
    title: 'Muhammed Ibrahim (Ovansa) | Senior QA Engineer',
    description: SiteConfig.description,
    siteName: SiteConfig.siteName,
  },
  twitter: {
    card: 'summary',
    title: 'Muhammed Ibrahim (Ovansa) | Senior QA Engineer',
    description: SiteConfig.description,
    creator: '@ovansa',
  },
};

const highlights = [
  'Earlier problem detection and faster stakeholder feedback through payment automation at Interswitch.',
  'Backend testing and mentoring for a NestJS microservices platform at Red Acre.',
  'RBAC implementation and GraphQL authorization testing at Accelerator App.',
];

const experience = [
  {
    company: 'Interswitch',
    title: 'Faster feedback on payment risks',
    description: 'In the test environment, manual payment initiation and database checks took about seven minutes per payment, with regression checks spanning a day or more. I automated card and transfer flows with Playwright, enabling concurrent payment initiation, and used AI to accelerate automation development.',
    contribution: 'Combined payment automation with database assertions for fees, data movement, and settlement records in the test environment. This reduced payment regression test execution time by an estimated 90% versus manual runs, giving developers, product teams, and other stakeholders earlier feedback on payment issues so they could act sooner.',
    href: '/resume#interswitch',
  },
  {
    company: 'Accelerator App',
    title: 'Backend authorization & RBAC',
    description: 'I contributed to role-based access control in Node.js and GraphQL, translating permission rules into backend logic.',
    contribution: 'Built API integration tests for authorization and regression scenarios across GraphQL workflows backed by MongoDB.',
    href: '/resume#accelerator',
  },
  {
    company: 'Red Acre Ltd.',
    title: 'Microservices testing & mentoring',
    description: 'I led backend testing for a NestJS platform, covering service integrations, edge cases, and failure scenarios.',
    contribution: 'Worked with engineers on performance investigations and mentored junior SDETs in troubleshooting and test design.',
    href: '/resume#red-acre',
  },
];

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <WebsiteSchema />
      <main className='bg-background text-foreground'>
        <section className='border-b bg-muted/30 px-4 py-12 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
              <div>
                <p className='mb-4 text-sm font-semibold uppercase text-muted-foreground'>
                  {resume.title} · Product Excellence · Engineering Productivity
                </p>
                <h1 className='text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
                  I test payment systems and make product risk clear.
                </h1>
                <p className='mt-6 max-w-2xl text-lg leading-8 text-muted-foreground'>
                  I&apos;m <strong>Muhammed Ibrahim (Ovansa)</strong>, based in Lagos,
                  Nigeria. I bring 8+ years of experience finding product risks
                  across web, mobile, APIs, backend services, databases, and
                  end-to-end workflows. I combine exploratory testing, test
                  strategy, automation, and failure investigation to help teams
                  make informed release decisions sooner.
                </p>
                <div className='mt-8 flex flex-wrap gap-3'>
                  <a href={resume.downloadPath} download className={buttonVariants({ size: 'lg' })}>Download resume</a>
                  <Link href='#work' className={buttonVariants({ variant: 'outline', size: 'lg' })}>View selected work</Link>
                </div>
                <Link href='/contact' className='mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4'>
                  Contact me about a role <FaArrowRight aria-hidden='true' className='size-3' />
                </Link>
                <div className='mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground'>
                  <a href={resume.github} className='inline-flex items-center gap-2 hover:text-foreground'><FaGithub aria-hidden='true' /> GitHub</a>
                  <a href={resume.linkedin} className='inline-flex items-center gap-2 hover:text-foreground'><FaLinkedin aria-hidden='true' /> LinkedIn</a>
                </div>
              </div>
              <aside className='rounded-md border bg-background p-6 shadow-sm'>
                <p className='text-sm font-semibold uppercase text-muted-foreground'>Selected contributions</p>
                <h2 className='mt-3 text-2xl font-bold'>Testing, investigation, and engineering work.</h2>
                <ul className='mt-6 space-y-5'>
                  {highlights.map((point) => (
                    <li key={point} className='flex gap-3'>
                      <span
                        aria-hidden='true'
                        className='mt-2.5 size-1.5 flex-none rounded-full bg-muted-foreground'
                      />
                      <p className='text-sm leading-6 text-muted-foreground'>{point}</p>
                    </li>
                  ))}
                </ul>
                <Link href='/resume' className='mt-6 inline-block text-sm font-medium underline underline-offset-4'>View full experience</Link>
              </aside>
            </div>
          </MaxWidthWrapper>
        </section>

        <section id='work' className='scroll-mt-20 px-4 py-10 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <p className='text-sm font-semibold uppercase text-muted-foreground'>Experience details</p>
            <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>Work across payments, SaaS, and backend systems.</h2>
            <div className='mt-8 grid gap-6 lg:grid-cols-3'>
              {experience.map((item) => (
                <article key={item.company} className='flex flex-col rounded-md border bg-card p-6'>
                  <p className='text-sm font-semibold text-muted-foreground'>{item.company}</p>
                  <h3 className='mt-3 text-xl font-bold'>{item.title}</h3>
                  <p className='mt-4 text-sm leading-7 text-muted-foreground'>{item.description}</p>
                  <p className='mb-5 mt-3 text-sm leading-7 text-muted-foreground'>{item.contribution}</p>
                  <Link href={item.href} className='mt-auto text-sm font-medium underline underline-offset-4'>Read role details</Link>
                </article>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>

        <section className='border-y bg-muted/30 px-4 py-10 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
              <div>
                <p className='text-sm font-semibold uppercase text-muted-foreground'>Public project</p>
                <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>Explore the code and the tests.</h2>
                <p className='mt-4 leading-7 text-muted-foreground'>A small, runnable example of how I approach API testing inside a backend codebase.</p>
              </div>
              <article className='rounded-md border bg-background p-6 sm:p-8'>
                <p className='text-sm text-muted-foreground'>Java · Spring Boot · JUnit · MockMvc</p>
                <h3 className='mt-3 text-2xl font-bold'>{resume.project.name}</h3>
                <p className='mt-4 leading-7 text-muted-foreground'>{resume.project.description}</p>
                <p className='mt-3 leading-7 text-muted-foreground'>{resume.project.detail}</p>
                <div className='mt-6 flex flex-wrap gap-3'>
                  <a href={resume.project.url} className={buttonVariants({})}>View code and tests</a>
                  <Link href={resume.project.articleUrl} className={buttonVariants({ variant: 'outline' })}>Read the approach</Link>
                </div>
              </article>
            </div>
          </MaxWidthWrapper>
        </section>

        <section className='px-4 py-10 sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='max-w-3xl'>
              <div>
                <p className='text-sm font-semibold uppercase text-muted-foreground'>Working approach</p>
                <h2 className='mt-3 text-3xl font-bold'>Find the problem. Explain the impact.</h2>
                <p className='mt-4 leading-7 text-muted-foreground'>I combine exploratory testing, automation, and backend investigation to make risks visible. I work with engineers and product stakeholders to understand failures and decide what needs attention before release.</p>
                <Link href='/about' className='mt-5 inline-block text-sm font-medium underline underline-offset-4'>More about how I work</Link>
                <Link href='/blog' className='ml-5 mt-5 inline-block text-sm font-medium underline underline-offset-4'>Read my testing articles</Link>
              </div>

            </div>
          </MaxWidthWrapper>
        </section>

        <section className='bg-foreground px-4 py-10 text-background sm:px-6 lg:px-8'>
          <MaxWidthWrapper>
            <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center'>
              <div>
                <h2 className='text-3xl font-bold'>Let&apos;s discuss your team&apos;s testing needs.</h2>
                <p className='mt-4 max-w-2xl leading-7 text-background/80'>For a role or a project, share the team, product, and responsibilities. My strongest areas are API automation, backend testing, and payment workflows.</p>
              </div>
              <Link href='/contact' className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Get in touch</Link>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>
    </>
  );
}
