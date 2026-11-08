'use client';

import React from 'react';
import { ChevronDown, Mail, MapPin } from 'lucide-react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import resume from '@/config/resume.json';

const topics = ['Employment opportunity', 'Testing project', 'Testing discussion', 'Other'];

export default function ContactForm() {
  const [draftOpened, setDraftOpened] = React.useState(false);
  const [topic, setTopic] = React.useState(topics[0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const organisation = String(data.get('organisation') || '').trim();
    const selectedTopic = String(data.get('topic') || topics[0]);
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`${selectedTopic}${organisation ? ` - ${organisation}` : ''}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : '',
      '',
      message,
    ].join('\n'));
    window.location.href = `mailto:${resume.email}?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  };

  return (
    <div className='bg-background text-foreground'>
      <MaxWidthWrapper className='py-12'>
        <header className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase text-muted-foreground'>Contact</p>
          <h1 className='mt-3 text-4xl font-bold sm:text-5xl'>Let&apos;s talk about a role or a project.</h1>
          <p className='mt-5 text-lg leading-8 text-muted-foreground'>For employment opportunities, share the role, team, location or remote setup, and a job description. For a project, tell me about the product and the testing challenge.</p>
        </header>
        <div className='mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
          <aside className='space-y-6'>
            <div className='rounded-md border bg-card p-6'>
              <h2 className='text-xl font-bold'>Contact details</h2>
              <div className='mt-5 flex gap-3'>
                <Mail aria-hidden='true' className='mt-1 size-5 flex-none text-muted-foreground' />
                <div className='min-w-0'>
                  <p className='font-medium'>Email</p>
                  <a href={`mailto:${resume.email}`} className='mt-1 inline-block break-all text-sm underline underline-offset-4'>{resume.email}</a>
                </div>
              </div>
              <div className='mt-5 flex gap-3'>
                <MapPin aria-hidden='true' className='mt-1 size-5 flex-none text-muted-foreground' />
                <div><p className='font-medium'>Based in</p><p className='mt-1 text-sm text-muted-foreground'>{resume.location}</p></div>
              </div>
              <a href={resume.linkedin} className='mt-6 inline-block text-sm underline underline-offset-4'>Connect on LinkedIn</a>
            </div>
            <a href={resume.downloadPath} download className={buttonVariants({ variant: 'outline' })}>Download resume (PDF)</a>
          </aside>
          <section className='rounded-md border bg-card p-6 sm:p-8' aria-labelledby='message-heading'>
            <h2 id='message-heading' className='text-2xl font-bold'>Prepare an email</h2>
            <p className='mt-2 text-sm leading-6 text-muted-foreground'>This form opens a draft in your email app. Review and send it there, or email me directly using the address above.</p>
            {draftOpened && <p role='status' className='mt-5 rounded-md border bg-muted p-4 text-sm'>Your email app should now have a draft. Nothing has been sent yet. If it did not open, your message is still below so you can copy it into an email.</p>}
            <form className='mt-6 space-y-5' onSubmit={handleSubmit}>
              <div className='grid gap-5 sm:grid-cols-2'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium'>Name</label>
                  <input id='name' name='name' autoComplete='name' required className='mt-2 w-full rounded-md border bg-background px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2' />
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium'>Email</label>
                  <input id='email' name='email' type='email' autoComplete='email' required className='mt-2 w-full rounded-md border bg-background px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2' />
                </div>
              </div>
              <div>
                <label id='topic-label' className='block text-sm font-medium'>What would you like to discuss?</label>
                <input type='hidden' name='topic' value={topic} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type='button'
                      aria-labelledby='topic-label topic-value'
                      className='mt-2 flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-left text-sm outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                    >
                      <span id='topic-value'>{topic}</span>
                      <ChevronDown aria-hidden='true' className='size-4 text-muted-foreground' />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align='start'
                    className='w-[var(--radix-dropdown-menu-trigger-width)]'
                  >
                    <DropdownMenuRadioGroup value={topic} onValueChange={setTopic}>
                      {topics.map((option) => (
                        <DropdownMenuRadioItem key={option} value={option}>
                          {option}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <label htmlFor='organisation' className='block text-sm font-medium'>Organisation (optional)</label>
                <input id='organisation' name='organisation' autoComplete='organization' className='mt-2 w-full rounded-md border bg-background px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2' />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium'>Message</label>
                <textarea id='message' name='message' rows={6} required placeholder='Share the role or project, relevant links, and what you would like to discuss.' className='mt-2 w-full rounded-md border bg-background px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2' />
              </div>
              <button type='submit' className={buttonVariants({ size: 'lg' })}>Open email draft</button>
            </form>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
