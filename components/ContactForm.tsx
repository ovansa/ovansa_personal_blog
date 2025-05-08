// app/contact/contact-form.tsx
'use client';

import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

import Link from 'next/link';
import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  // interface FormStatus {
  //     submitted: boolean;
  //     submitting: boolean;
  //     error: boolean;
  // }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Replace with your actual API endpoint
      const response: Response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, error: false });
        form.reset();
      } else {
        setFormStatus({ submitted: false, submitting: false, error: true });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <main className='bg-background text-foreground'>
      {/* Hero Section */}
      <section className='pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30'>
        <MaxWidthWrapper className='px-4 sm:px-6'>
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3 md:mb-4'>
              Let&apos;s{' '}
              <span className='text-blue-600 dark:text-blue-400'>Connect</span>
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-2'>
              Have a testing challenge? Questions about my services? I&apos;d
              love to hear from you.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact Form Section */}
      <section className='py-10 md:py-16'>
        <MaxWidthWrapper className='px-4 sm:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
            {/* Contact Info */}
            <div className='order-2 lg:order-1'>
              <h2 className='text-xl sm:text-2xl font-bold mb-4 md:mb-6'>
                Contact Information
              </h2>
              <div className='space-y-4 md:space-y-6'>
                <div className='flex items-start'>
                  <div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 md:mr-4 shrink-0'>
                    <Mail className='h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400' />
                  </div>
                  <div>
                    <h3 className='font-medium text-base sm:text-lg'>Email</h3>
                    <a
                      href='mailto:aminmuhammad18@gmail.com'
                      className='text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base'
                    >
                      aminmuhammad18@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 md:mr-4 shrink-0'>
                    <Phone className='h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400' />
                  </div>
                  <div>
                    <h3 className='font-medium text-base sm:text-lg'>Phone</h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                      Available upon request
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3 md:mr-4 shrink-0'>
                    <MapPin className='h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400' />
                  </div>
                  <div>
                    <h3 className='font-medium text-base sm:text-lg'>
                      Location
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-3 md:mr-4 shrink-0'>
                    <MessageSquare className='h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 dark:text-yellow-400' />
                  </div>
                  <div>
                    <h3 className='font-medium text-base sm:text-lg'>Social</h3>
                    <div className='flex space-x-3 sm:space-x-4 mt-2'>
                      <a
                        href='https://twitter.com/ovansa'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors'
                        aria-label='Twitter'
                      >
                        <svg
                          className='h-3 w-3 sm:h-4 sm:w-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </a>
                      <a
                        href='https://linkedin.com/in/muhammed-ibrahim'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors'
                        aria-label='LinkedIn'
                      >
                        <svg
                          className='h-3 w-3 sm:h-4 sm:w-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                        </svg>
                      </a>
                      <a
                        href='https://github.com/ovansa'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors'
                        aria-label='GitHub'
                      >
                        <svg
                          className='h-3 w-3 sm:h-4 sm:w-4'
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 md:mt-12 bg-blue-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm'>
                <h3 className='font-bold text-base sm:text-lg mb-2 sm:mb-3'>
                  Schedule a Call
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base'>
                  Prefer to talk directly? Schedule a free 30-minute discovery
                  call.
                </p>
                <Link
                  href='https://calendly.com/muhammed-ibrahim/discovery'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={
                    buttonVariants({ variant: 'default' }) +
                    ' w-full justify-center text-sm sm:text-base'
                  }
                >
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className='order-1 lg:order-2'>
              <h2 className='text-xl sm:text-2xl font-bold mb-4 md:mb-6'>
                Send a Message
              </h2>
              {formStatus.submitted ? (
                <Alert className='bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 mb-6'>
                  <CheckCircle className='h-4 w-4 text-green-600 dark:text-green-400' />
                  <AlertDescription className='text-green-800 dark:text-green-300'>
                    Thank you for your message! I&apos;ll get back to you as
                    soon as possible.
                  </AlertDescription>
                </Alert>
              ) : formStatus.error ? (
                <Alert className='bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 mb-6'>
                  <AlertCircle className='h-4 w-4 text-red-600 dark:text-red-400' />
                  <AlertDescription className='text-red-800 dark:text-red-300'>
                    There was a problem sending your message. Please try again
                    or email me directly.
                  </AlertDescription>
                </Alert>
              ) : null}

              <form
                className='space-y-4 md:space-y-6'
                onSubmit={handleSubmit}
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    className='w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                    required
                  ></textarea>
                </div>

                <div>
                  <div className='flex items-start'>
                    <input
                      id='privacy'
                      name='privacy'
                      type='checkbox'
                      className='h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                      required
                    />
                    <label
                      htmlFor='privacy'
                      className='ml-2 block text-xs sm:text-sm text-gray-700 dark:text-gray-300'
                    >
                      I agree to the{' '}
                      <Link
                        href='/privacy-policy'
                        className='text-blue-600 dark:text-blue-400 hover:underline'
                      >
                        privacy policy
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={formStatus.submitting}
                  className={
                    buttonVariants({ variant: 'default', size: 'lg' }) +
                    ' w-full flex items-center justify-center text-sm sm:text-base mt-2 transition-all' +
                    (formStatus.submitting
                      ? ' opacity-70 cursor-not-allowed'
                      : '')
                  }
                >
                  {formStatus.submitting ? (
                    <>
                      <svg
                        className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className='mr-2 h-4 w-4' />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FAQ Section */}
      <section className='py-10 md:py-16 bg-gray-50 dark:bg-gray-900'>
        <MaxWidthWrapper className='px-4 sm:px-6'>
          <div className='text-center mb-8 md:mb-12'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-3 md:mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Common questions about working with me.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto'>
            <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md'>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                How quickly do you respond to inquiries?
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                I typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please indicate so in your
                message.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md'>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                Do you work with international clients?
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                Absolutely! I work with clients globally and can accommodate
                different time zones for meetings and collaboration.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md'>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                What information should I include in my inquiry?
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                To help me provide the most relevant response, please include
                details about your project, testing challenges, timeline, and
                any specific questions you have.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md'>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                Do you offer remote consulting services?
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                Yes, all my consulting services are available remotely. I use
                various collaboration tools to ensure effective communication
                and project delivery.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default ContactForm;
