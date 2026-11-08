import type { Metadata } from 'next';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import resume from '@/config/resume.json';
import SiteConfig from '@/config/site';

export const metadata: Metadata = {
  title: 'Resume - Muhammed Ibrahim | Senior QA Engineer',
  description: resume.summary,
  alternates: { canonical: `${SiteConfig.siteUrl}/resume` },
  openGraph: {
    title: 'Resume - Muhammed Ibrahim',
    description: resume.summary,
    url: '/resume',
    type: 'profile',
  },
};

export default function Resume() {
  return (
    <main className='bg-background text-foreground'>
      <MaxWidthWrapper className='max-w-5xl py-12'>
        <header className='border-b pb-10'>
          <p className='text-sm font-semibold uppercase text-muted-foreground'>Resume</p>
          <h1 className='mt-3 text-4xl font-bold sm:text-5xl'>{resume.name}</h1>
          <p className='mt-3 text-xl font-medium'>{resume.title}</p>
          <p className='mt-2 text-muted-foreground'>{resume.focus}</p>
          <div className='mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm'>
            <span>{resume.location}</span>
            <a href={`mailto:${resume.email}`} className='break-all underline underline-offset-4'>{resume.email}</a>
            <a href={`tel:${resume.phone}`} className='underline underline-offset-4'>{resume.phone}</a>
            <a href={resume.github} className='underline underline-offset-4'>GitHub</a>
            <a href={resume.linkedin} className='underline underline-offset-4'>LinkedIn</a>
          </div>
          <div className='mt-7 flex flex-wrap gap-3'>
            <a href={resume.downloadPath} download className={buttonVariants({ size: 'lg' })}>Download resume (PDF)</a>
            <Link href='/contact' className={buttonVariants({ variant: 'outline', size: 'lg' })}>Contact me about a role</Link>
          </div>
        </header>

        <section className='mt-10' aria-labelledby='summary'>
          <h2 id='summary' className='text-2xl font-bold'>Summary</h2>
          <p className='mt-4 leading-7 text-muted-foreground'>{resume.summary}</p>
        </section>

        <section className='mt-12' aria-labelledby='experience'>
          <h2 id='experience' className='border-b pb-3 text-2xl font-bold'>Experience</h2>
          <div className='mt-6 space-y-9'>
            {resume.experience.map((job) => (
              <article key={job.id} id={job.id} className='scroll-mt-24'>
                <h3 className='text-lg font-bold'>{job.role}</h3>
                <p className='mt-1 font-medium'>{job.company}</p>
                <p className='mt-1 text-sm text-muted-foreground'>{job.period} · {job.location}</p>
                <ul className='mt-4 list-disc space-y-2 pl-5 leading-7 text-muted-foreground'>
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className='mt-12' aria-labelledby='skills'>
          <h2 id='skills' className='border-b pb-3 text-2xl font-bold'>Skills</h2>
          <dl className='mt-5 grid gap-5 sm:grid-cols-2'>
            {resume.skills.map((group) => (
              <div key={group.category}>
                <dt className='font-semibold'>{group.category}</dt>
                <dd className='mt-2 leading-7 text-muted-foreground'>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className='mt-12 rounded-md border bg-muted/30 p-6' aria-labelledby='project'>
          <h2 id='project' className='text-2xl font-bold'>Selected public work</h2>
          <h3 className='mt-5 text-lg font-semibold'>{resume.project.name}</h3>
          <p className='mt-3 leading-7 text-muted-foreground'>{resume.project.description} {resume.project.detail}</p>
          <div className='mt-4 flex flex-wrap gap-5 text-sm font-medium'>
            <a href={resume.project.url} className='underline underline-offset-4'>View code and tests</a>
            <Link href={resume.project.articleUrl} className='underline underline-offset-4'>Read the testing approach</Link>
          </div>
        </section>

        <section className='mt-12' aria-labelledby='education'>
          <h2 id='education' className='border-b pb-3 text-2xl font-bold'>Education & professional development</h2>
          <h3 className='mt-5 font-semibold'>{resume.education.degree}</h3>
          <p className='mt-1 text-muted-foreground'>{resume.education.institution} · {resume.education.period}</p>
          <ul className='mt-5 space-y-4'>
            {resume.credentials.map((credential) => (
              <li key={credential.name}>
                <p className='font-medium'>{credential.name}</p>
                <p className='mt-1 text-sm text-muted-foreground'>{credential.issuer}</p>
                {credential.url && <a href={credential.url} className='mt-1 inline-block text-sm underline underline-offset-4'>View credential</a>}
              </li>
            ))}
          </ul>
          <p className='mt-5 text-sm text-muted-foreground'>{resume.language}</p>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
