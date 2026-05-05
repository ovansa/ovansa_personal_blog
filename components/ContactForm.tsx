'use client';

import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';

const emailAddress = 'aminmuhammad18@gmail.com';

const testingNeeds = [
  'API test automation',
  'Testing strategy review',
  'CI test feedback',
  'Performance testing',
  'Team coaching',
  'Other',
];

const timelines = [
  'This week',
  '2-4 weeks',
  '1-3 months',
  'Exploratory',
];

const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const organization = String(formData.get('organization') || '').trim();
    const need = String(formData.get('need') || '').trim();
    const stack = String(formData.get('stack') || '').trim();
    const timeline = String(formData.get('timeline') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(
      `Testing project context${organization ? ` - ${organization}` : ''}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        organization ? `Organization/Product: ${organization}` : null,
        need ? `Testing need: ${need}` : null,
        stack ? `Current stack: ${stack}` : null,
        timeline ? `Timeline: ${timeline}` : null,
        '',
        'Context:',
        message,
      ]
        .filter(Boolean)
        .join('\n')
    );

    if (!name || !email || !need || !message) {
      setError(true);
      return;
    }

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <main className='bg-background text-foreground'>
      <section className='border-b bg-muted/30 px-4 py-16 sm:px-6 lg:px-8'>
        <MaxWidthWrapper>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase text-muted-foreground'>
              Contact
            </p>
            <h1 className='mt-3 text-4xl font-bold tracking-normal sm:text-5xl'>
              Share the testing context worth solving.
            </h1>
            <p className='mt-5 text-lg leading-8 text-muted-foreground'>
              The most useful first message includes the product, API surface,
              current test stack, release risk, and the outcome you want from
              the engagement.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className='px-4 py-12 sm:px-6 lg:px-8'>
        <MaxWidthWrapper>
          <div className='grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start'>
            <aside className='space-y-6'>
              <div className='rounded-md border bg-card p-6'>
                <h2 className='text-xl font-bold'>Direct Details</h2>
                <div className='mt-5 space-y-5'>
                  <div className='flex gap-3'>
                    <Mail className='mt-1 size-5 text-muted-foreground' />
                    <div>
                      <p className='font-medium'>Email</p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className='text-sm text-primary hover:underline'
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <MapPin className='mt-1 size-5 text-muted-foreground' />
                    <div>
                      <p className='font-medium'>Base</p>
                      <p className='text-sm text-muted-foreground'>
                        Lagos, Nigeria. Remote-friendly.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <Calendar className='mt-1 size-5 text-muted-foreground' />
                    <div>
                      <p className='font-medium'>Technical Call</p>
                      <p className='text-sm text-muted-foreground'>
                        Best when there is enough context to discuss API
                        automation, CI feedback, or a testing process review.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href='https://calendly.com/muhammed-ibrahim/discovery'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${buttonVariants({
                    variant: 'outline',
                  })} mt-6 w-full justify-center`}
                >
                  Schedule Scope Call
                </Link>
              </div>

              <div className='rounded-md border bg-muted/30 p-6'>
                <h2 className='text-xl font-bold'>Useful Context</h2>
                <ul className='mt-4 space-y-3 text-sm text-muted-foreground'>
                  <li>Product domain and critical user/API flows</li>
                  <li>Current tools, pipelines, and test ownership</li>
                  <li>Recent defects, slow feedback, or flaky tests</li>
                  <li>Timeline, constraints, and success criteria</li>
                </ul>
              </div>
            </aside>

            <section className='rounded-md border bg-card p-6 sm:p-8'>
              <h2 className='text-2xl font-bold'>Send Project Context</h2>
              <p className='mt-2 text-sm text-muted-foreground'>
                This opens a prepared email from your mail client. It avoids a
                fragile contact form and keeps the first exchange concrete.
              </p>

              {submitted ? (
                <Alert className='mt-6 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'>
                  <CheckCircle className='h-4 w-4 text-green-600 dark:text-green-400' />
                  <AlertDescription className='text-green-800 dark:text-green-300'>
                    Your email draft should now be open. Review it, then send it
                    from your mail client.
                  </AlertDescription>
                </Alert>
              ) : null}

              {error ? (
                <Alert className='mt-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'>
                  <AlertCircle className='h-4 w-4 text-red-600 dark:text-red-400' />
                  <AlertDescription className='text-red-800 dark:text-red-300'>
                    Please include your name, email, testing need, and message.
                  </AlertDescription>
                </Alert>
              ) : null}

              <form
                className='mt-6 space-y-5'
                onSubmit={handleSubmit}
              >
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      required
                      className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='organization'
                    className='block text-sm font-medium'
                  >
                    Product or organization
                  </label>
                  <input
                    id='organization'
                    name='organization'
                    type='text'
                    className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                  />
                </div>

                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='need'
                      className='block text-sm font-medium'
                    >
                      Testing need
                    </label>
                    <select
                      id='need'
                      name='need'
                      required
                      defaultValue=''
                      className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                    >
                      <option
                        value=''
                        disabled
                      >
                        Select one
                      </option>
                      {testingNeeds.map((need) => (
                        <option
                          key={need}
                          value={need}
                        >
                          {need}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='timeline'
                      className='block text-sm font-medium'
                    >
                      Timeline
                    </label>
                    <select
                      id='timeline'
                      name='timeline'
                      defaultValue=''
                      className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                    >
                      <option value=''>Not sure yet</option>
                      {timelines.map((timeline) => (
                        <option
                          key={timeline}
                          value={timeline}
                        >
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='stack'
                    className='block text-sm font-medium'
                  >
                    Current stack
                  </label>
                  <input
                    id='stack'
                    name='stack'
                    type='text'
                    placeholder='Postman, Jest, Cypress, Playwright, Bitbucket, etc.'
                    className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium'
                  >
                    Context
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    required
                    placeholder='Describe the product, API surface, current testing gaps, release risks, or the decision you need to make.'
                    className='mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring'
                  />
                </div>

                <button
                  type='submit'
                  className={`${buttonVariants({
                    size: 'lg',
                  })} w-full`}
                >
                  <Send className='mr-2 size-4' />
                  Prepare Email
                </button>
              </form>
            </section>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default ContactForm;
