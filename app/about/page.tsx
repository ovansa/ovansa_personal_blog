// app/about/page.tsx

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Muhammed Ibrahim | Software Test Engineer & Quality Advocate',
  description:
    'Meet Muhammed Ibrahim, a Software Test Engineer with over 6 years of experience in API testing, automation, and mentoring. Learn about my professional journey and expertise.',
  keywords: [
    'software test engineer',
    'quality assurance',
    'API testing',
    'test automation',
    'Muhammed Ibrahim',
    'software tester'
  ],
  openGraph: {
    title: 'About - Muhammed Ibrahim | Software Test Engineer',
    description:
      'Meet Muhammed Ibrahim, a Software Test Engineer with over 6 years of experience in API testing, automation, and mentoring.',
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
    title: 'About - Muhammed Ibrahim | Software Test Engineer',
    description:
      'Meet Muhammed Ibrahim, a Software Test Engineer with over 6 years of experience in API testing, automation, and mentoring.',
    images: ['/images/about-cover.jpg'],
  },
};

// Career timeline data
const experiences = [
  {
    id: 1,
    role: 'QA Engineer',
    company: 'Interswitch',
    period: 'Sep 2024 – Present',
    location: 'Lagos, Nigeria',
    responsibilities: [
      'Designed and implemented automated API test frameworks using Postman and integrated them into Bitbucket pipelines.',
      'Collaborated with cross-functional teams to ensure thorough test coverage for payment transaction services.',
      'Created reusable test scripts to accelerate regression testing and catch defects early.',
    ],
  },
  {
    id: 2,
    role: 'Senior SDET',
    company: 'Red Acre Ltd. (via Symphony)',
    period: 'Jan 2023 – May 2024',
    location: 'Malta',
    responsibilities: [
      'Developed automated test strategies for complex web applications using Cypress and Jest.',
      'Led training sessions for junior developers and testers on modern testing techniques and tools.',
      'Ensured test coverage aligned with business requirements and new features.',
    ],
  },
  {
    id: 3,
    role: 'Software Test Engineer',
    company: 'Accelerator App',
    period: 'Apr 2021 – Jan 2023',
    location: 'Portugal',
    responsibilities: [
      'Implemented a comprehensive suite of E2E tests with Cypress and integrated them into the CI pipeline.',
      'Introduced load testing using k6, identifying performance bottlenecks and optimizing infrastructure.',
      'Automated API tests with Jest, improving backend service coverage and feedback loops for developers.',
    ],
  },
];

// Skills data
const skills = [
  'Postman & API Automation',
  'Cypress & Selenium',
  'Playwright',
  'Jest & Mocha',
  'Bitbucket & GitHub Actions',
  'k6 Performance Testing',
  'AWS & Redis',
  'Node.js & Go APIs',
  'Mentorship & Training',
];

export default function About() {
  return (
    <main className='relative pt-16 pb-16 bg-background text-foreground'>
      {/* Background accent */}
      <div
        className='absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent -z-10'
        aria-hidden='true'
      />

      <MaxWidthWrapper className='px-4 sm:px-6 lg:px-8'>
        {/* Hero Section with visual element but no profile picture */}
        <section
          className='py-8 md:py-16 lg:py-20'
          aria-labelledby='about-heading'
        >
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center'>
            {/* Text content - wider column */}
            <div className='md:col-span-7 space-y-4 md:space-y-6'>
              <h1
                id='about-heading'
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight'
              >
                Software Test Engineer
                <span className='block text-primary'>& Quality Advocate</span>
              </h1>
              <p className='text-base sm:text-lg text-muted-foreground'>
                Hi, I&apos;m{' '}
                <strong className='font-medium'>Muhammed Ibrahim</strong>, a
                proactive Test Engineer with 6+ years&apos; experience in API
                testing, automation, and mentoring.
              </p>
              <p className='text-base sm:text-lg text-muted-foreground'>
                I share real-world testing strategies and hands-on guides to
                help you ship reliable software faster.
              </p>

              {/* Call-to-action buttons */}
              <div className='flex flex-wrap gap-3 md:gap-4 pt-4'>
                <a
                  href='/contact'
                  className='px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base'
                >
                  Get in Touch
                </a>
                <a
                  href='/blog'
                  className='px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors text-sm sm:text-base'
                >
                  Read My Blog
                </a>
              </div>
            </div>

            {/* Abstract visual element instead of profile picture */}
            <div className='md:col-span-5'>
              <div className='relative aspect-square w-full max-w-sm mx-auto md:mr-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/30 via-background to-accent/40 p-6 sm:p-8 flex flex-col justify-center'>
                {/* Abstract decorative elements */}
                <div className='absolute top-0 left-0 w-full h-full'>
                  <div
                    className='absolute top-4 right-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/20'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='absolute bottom-12 left-6 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-primary/10'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='absolute top-1/3 left-1/4 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary/15'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='absolute bottom-1/4 right-1/3 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-accent/20'
                    aria-hidden='true'
                  ></div>
                </div>

                {/* Core skills visualization */}
                <div className='relative z-10 text-center'>
                  <div className='mb-4 mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-primary flex items-center justify-center'>
                    <span className='text-3xl sm:text-4xl font-bold text-primary'>
                      QA
                    </span>
                  </div>
                  <div className='flex flex-wrap justify-center gap-2 mt-4'>
                    {['API', 'Test', 'Mentor', 'CI/CD'].map((skill, i) => (
                      <span
                        key={i}
                        className='inline-block px-2 sm:px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-medium'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote overlay */}
              <blockquote className='relative mt-6 md:-mt-12 md:ml-8 lg:ml-12 bg-background p-4 sm:p-6 rounded-xl shadow-lg border border-border max-w-sm'>
                <p className='text-base sm:text-lg font-medium italic'>
                  &quot;I don&apos;t just test software. I reveal the illusion
                  that things work as they should. Through rigorous scrutiny, we
                  uncover the truth.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section
          className='py-12 md:py-16'
          aria-labelledby='summary-heading'
        >
          <div className='max-w-3xl'>
            <h2
              id='summary-heading'
              className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-flex items-center'
            >
              <span className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3'>
                <span className='text-primary text-xs sm:text-sm font-bold'>
                  01
                </span>
              </span>
              Professional Summary
            </h2>
            <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
              I specialize in{' '}
              <strong className='font-medium'>test automation</strong>,{' '}
              <strong className='font-medium'>API testing</strong>, and{' '}
              <strong className='font-medium'>quality assurance</strong>, with
              experience in both manual and automated strategies. I&apos;ve
              worked on everything from enterprise-level applications to
              startups, ensuring the systems I test meet high standards for
              reliability and performance.
            </p>
            <p className='text-base sm:text-lg text-muted-foreground leading-relaxed mt-4'>
              My expertise in{' '}
              <strong className='font-medium'>CI/CD pipelines</strong>,{' '}
              <strong className='font-medium'>Postman</strong>,{' '}
              <strong className='font-medium'>Cypress</strong>, and{' '}
              <strong className='font-medium'>Jest</strong> has empowered teams
              to improve their testing processes and achieve faster, more
              efficient deployments. I also pride myself on sharing
              knowledge—mentoring junior testers and presenting workshops on
              best practices.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section
          className='py-12 md:py-16 relative'
          aria-labelledby='experience-heading'
        >
          {/* Timeline visual */}
          <div
            className='absolute left-4 sm:left-8 md:left-1/2 top-28 bottom-16 w-px bg-border'
            aria-hidden='true'
          />

          <h2
            id='experience-heading'
            className='text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 inline-flex items-center'
          >
            <span className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3'>
              <span className='text-primary text-xs sm:text-sm font-bold'>
                02
              </span>
            </span>
            Experience
          </h2>

          <div className='space-y-12 md:space-y-16'>
            {experiences.map((job, index) => (
              <div
                key={job.id}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pl-8 sm:pl-12 md:pl-0`}
              >
                {/* Timeline marker for mobile */}
                <div className='absolute left-0 sm:left-4 md:hidden top-1 h-5 w-5'>
                  <span
                    className='block h-5 w-5 rounded-full border-3 border-primary bg-background'
                    aria-hidden='true'
                  />
                </div>

                {/* Timeline marker for desktop */}
                <div className='hidden md:block absolute left-1/2 top-0 -ml-3 h-6 w-6'>
                  <span
                    className='block h-6 w-6 rounded-full border-4 border-primary bg-background'
                    aria-hidden='true'
                  />
                </div>

                <div
                  className={`${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <h3 className='text-xl sm:text-2xl font-bold'>
                    {job.role}
                    <span className='block text-lg sm:text-xl font-medium text-primary mt-1'>
                      {job.company}
                    </span>
                  </h3>
                  <p
                    className={`text-muted-foreground mt-2 flex flex-wrap items-center ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    <time dateTime={job.period.split('–')[0].trim()}>
                      {job.period}
                    </time>
                    <span className='mx-2'>•</span>
                    <span>{job.location}</span>
                  </p>
                </div>

                <div className={'md:pl-8'}>
                  <ul className='space-y-2 sm:space-y-3'>
                    {job.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className='flex gap-2 sm:gap-3 text-muted-foreground'
                      >
                        <span
                          className='flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2'
                          aria-hidden='true'
                        />
                        <span className='text-sm sm:text-base'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Expertise */}
        <section
          className='py-12 md:py-16'
          aria-labelledby='skills-heading'
        >
          <h2
            id='skills-heading'
            className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 inline-flex items-center'
          >
            <span className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3'>
              <span className='text-primary text-xs sm:text-sm font-bold'>
                03
              </span>
            </span>
            Skills & Expertise
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='relative px-4 sm:px-5 py-3 sm:py-4 bg-accent/50 rounded-lg border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300'
              >
                <div
                  className='absolute top-0 left-0 w-1 h-full bg-primary'
                  aria-hidden='true'
                />
                <div className='flex items-center gap-3'>
                  <span className='text-base sm:text-lg font-medium'>
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section
          className='py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12'
          aria-labelledby='education-heading'
        >
          <div>
            <h2
              id='education-heading'
              className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-flex items-center'
            >
              <span className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3'>
                <span className='text-primary text-xs sm:text-sm font-bold'>
                  04
                </span>
              </span>
              Education
            </h2>

            <div className='bg-accent/50 border border-border rounded-lg p-4 sm:p-6'>
              <h3 className='text-lg sm:text-xl font-bold'>
                BSc Computer Science
              </h3>
              <p className='text-muted-foreground mt-1'>University of Ilorin</p>
              <p className='text-xs sm:text-sm text-muted-foreground mt-2'>
                Nov 2010 – Jul 2014
              </p>
            </div>
          </div>

          <div>
            <h2
              id='certifications-heading'
              className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-flex items-center'
            >
              <span className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3'>
                <span className='text-primary text-xs sm:text-sm font-bold'>
                  05
                </span>
              </span>
              Awards & Certifications
            </h2>

            <ul className='space-y-3 sm:space-y-4'>
              <li className='flex gap-3'>
                <span className='text-primary text-lg sm:text-xl'>🏆</span>
                <div>
                  <p className='font-medium text-sm sm:text-base'>
                    CEO&apos;s Outstanding Performance Award
                  </p>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    Softcom Ltd. (2019)
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary text-lg sm:text-xl'>🥇</span>
                <div>
                  <p className='font-medium text-sm sm:text-base'>
                    Software Tester of the Year
                  </p>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    Softcom Ltd. (2019)
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary text-lg sm:text-xl'>📜</span>
                <div>
                  <p className='font-medium text-sm sm:text-base'>
                    AWS Certified Cloud Practitioner
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary text-lg sm:text-xl'>📜</span>
                <div>
                  <p className='font-medium text-sm sm:text-base'>
                    Black Box Software Testing (Foundations & Design)
                  </p>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    Association for Software Testing
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary text-lg sm:text-xl'>📜</span>
                <div>
                  <p className='font-medium text-sm sm:text-base'>
                    Rapid Software Testing Applied
                  </p>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    Satisfice Inc.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Languages & Contact CTA */}
        <section
          className='py-12 md:py-16'
          aria-labelledby='languages-heading'
        >
          <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
            <div>
              <h2
                id='languages-heading'
                className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-flex items-center'
              >
                <span className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3'>
                  <span className='text-primary text-xs sm:text-sm font-bold'>
                    06
                  </span>
                </span>
                Languages
              </h2>

              <div className='flex items-center gap-4'>
                <div className='px-3 sm:px-4 py-2 bg-accent/50 border border-border rounded-lg'>
                  <p className='font-medium text-sm sm:text-base'>English</p>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    Fluent
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-primary/10 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center'>
              <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>
                Ready to work together?
              </h3>
              <p className='text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6'>
                I&apos;m available for consulting and test automation projects
              </p>
              <a
                href='/contact'
                className='px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base'
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Muhammed Ibrahim',
            jobTitle: 'Software Test Engineer',
            description:
              "A proactive Test Engineer with 6+ years' experience in API testing, automation, and mentoring.",
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'University of Ilorin',
            },
            knowsAbout: [
              'Software Testing',
              'API Automation',
              'Quality Assurance',
              'Test Frameworks',
            ],
            workLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lagos',
                addressCountry: 'Nigeria',
              },
            },
          }),
        }}
      />
    </main>
  );
}
