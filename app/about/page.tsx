// app/about/page.tsx

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Muhammed Ibrahim | Software Test Engineer',
  description:
    'Muhammed Ibrahim - Software Test Engineer with 6+ years of experience in API testing, automation, and quality assurance.',
  keywords: [
    'software test engineer',
    'quality assurance',
    'API testing',
    'test automation',
    'Muhammed Ibrahim',
  ],
  openGraph: {
    title: 'About - Muhammed Ibrahim | Software Test Engineer',
    description:
      'Software Test Engineer with 6+ years of experience in API testing, automation, and quality assurance.',
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
      'Software Test Engineer with 6+ years of experience in API testing, automation, and quality assurance.',
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
      'Automated testing of payment endpoints using advanced Postman scripts, integrated into Bitbucket pipelines, reducing regression testing time by 200% and providing real-time visibility to the development team.',
      'Spearheaded the design and implementation of comprehensive test strategies for critical payment APIs, ensuring seamless transaction processing.',
      'Driving the migration of legacy Ruby-based API tests to Postman, improving efficiency, consistency, and maintainability.',
    ],
  },
  {
    id: 2,
    role: 'Senior SDET',
    company: 'Red Acre Ltd. (via Symphony)',
    period: 'Jan 2023 – May 2024',
    location: 'Malta',
    responsibilities: [
      'Established and defined standards for end-to-end tests for services in the NestJS project, specifically for the affiliates feature.',
      'Collaborated with product owners and developers to ensure comprehensive understanding of intended features and functionality.',
      'Provided guidance and mentorship to junior SDETs and QA engineers on testing tools, processes, and troubleshooting strategies.',
    ],
  },
  {
    id: 3,
    role: 'Software Test Engineer',
    company: 'Accelerator App',
    period: 'Apr 2021 – Jan 2023',
    location: 'Portugal',
    responsibilities: [
      'Increased integration test coverage (API tests) by over 100% using Jest on Node.js, GraphQL, and MongoDB projects.',
      'Enhanced regression testing efficiency by implementing end-to-end tests for critical user journeys using Cypress within the CI/CD pipeline.',
      'Conducted regular performance tests using k6 to optimize server resources and maintain platform stability under varying network traffic.',
    ],
  },
  {
    id: 4,
    role: 'Software Test Analyst',
    company: 'Softcom Ltd.',
    period: 'Mar 2018 – Apr 2021',
    location: 'Lagos, Nigeria',
    responsibilities: [
      'Played a key role in testing early versions of the Eyowo payment app, across Android, iOS, web, and USSD platforms, processing over 1 billion naira in transactions within months.',
      'Led a team of testers for UseForms, ensuring reliability of a data collection app used to gather over 500K+ data points for organizations like MTN, NBC, and NPower.',
      "Received Software Tester of the Year and CEO's Outstanding Performance Award in 2019.",
    ],
  },
];

// Skills organized by categories
const skills = {
  testing: [
    'API Testing & Automation',
    'End-to-End Testing',
    'Functional Testing',
    'Exploratory Testing',
    'Performance Testing',
  ],
  tools: ['Postman', 'Cypress', 'Jest', 'Playwright', 'Selenium', 'k6'],
  programming: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java'],
  databases: ['MongoDB', 'PostgreSQL', 'Redis'],
  other: [
    'AWS Services',
    'CI/CD Pipelines',
    'Git',
    'GitHub Actions',
    'BitBucket',
  ],
};

// Certifications
const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
  },
  {
    name: 'Black Box Software Testing (Bug Advocacy)',
    issuer: 'Association for Software Testing',
  },
  {
    name: 'Rapid Software Testing Applied',
    issuer: 'Satisfice Inc.',
  },
  {
    name: 'Black Box Software Testing (Foundations)',
    issuer: 'Association for Software Testing',
  },
  {
    name: 'Black Box Software Testing (Test Design)',
    issuer: 'Association for Software Testing',
  },
];

// Awards
const awards = [
  {
    name: "CEO's Outstanding Performance Award",
    company: 'Softcom Ltd.',
    year: '2019',
  },
  {
    name: 'Software Tester of the Year',
    company: 'Softcom Ltd.',
    year: '2019',
  },
];

export default function About() {
  return (
    <main className='bg-background text-foreground'>
      <MaxWidthWrapper className='py-16 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <section className='mb-16'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight'>
                Muhammed Ibrahim
              </h1>
              <p className='text-xl text-primary mt-2'>
                Software Test Engineer
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <a
                href='/contact'
                className='px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm'
              >
                Contact Me
              </a>
              <a
                href='/blog'
                className='px-4 py-2 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors text-sm'
              >
                Read My Blog
              </a>
            </div>
          </div>

          <div className='mt-8 flex flex-wrap gap-3 text-sm'>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>📧</span>
              <span>aminmuhammad18@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>📱</span>
              <span>+2348142941067</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>📍</span>
              <span>Lagos, Nigeria</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>🔗</span>
              <a
                href='https://github.com/ovansa'
                className='text-primary hover:underline'
              >
                GitHub
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>🔗</span>
              <a
                href='https://linkedin.com/in/ovansa'
                className='text-primary hover:underline'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
            Professional Summary
          </h2>
          <p className='text-muted-foreground'>
            Proactive Software Test Engineer with 6+ years of experience in
            enhancing product stability and efficiency through strategic testing
            and automation. Skilled in backend infrastructure, test coverage,
            and troubleshooting, with a proven ability to mentor junior SDETs
            and QAs. Passionate about delivering quality software through
            collaboration and continuous improvement.
          </p>
        </section>

        {/* Experience Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
            Experience
          </h2>
          <div className='space-y-8'>
            {experiences.map((job) => (
              <div
                key={job.id}
                className='grid grid-cols-1 md:grid-cols-12 gap-4'
              >
                <div className='md:col-span-4'>
                  <h3 className='text-lg font-bold'>{job.role}</h3>
                  <p className='text-primary font-medium'>{job.company}</p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {job.period} • {job.location}
                  </p>
                </div>
                <div className='md:col-span-8'>
                  <ul className='space-y-2'>
                    {job.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className='flex gap-2 text-sm text-muted-foreground'
                      >
                        <span
                          className='flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2'
                          aria-hidden='true'
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
            Skills
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>Testing</h3>
              <ul className='space-y-2'>
                {skills.testing.map((skill, i) => (
                  <li
                    key={i}
                    className='flex gap-2 text-sm text-muted-foreground'
                  >
                    <span
                      className='flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2'
                      aria-hidden='true'
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>Tools</h3>
              <ul className='space-y-2'>
                {skills.tools.map((skill, i) => (
                  <li
                    key={i}
                    className='flex gap-2 text-sm text-muted-foreground'
                  >
                    <span
                      className='flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2'
                      aria-hidden='true'
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>
                Programming
              </h3>
              <ul className='space-y-2'>
                {skills.programming.map((skill, i) => (
                  <li
                    key={i}
                    className='flex gap-2 text-sm text-muted-foreground'
                  >
                    <span
                      className='flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2'
                      aria-hidden='true'
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>
                Databases
              </h3>
              <ul className='space-y-2'>
                {skills.databases.map((skill, i) => (
                  <li
                    key={i}
                    className='flex gap-2 text-sm text-muted-foreground'
                  >
                    <span
                      className='flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2'
                      aria-hidden='true'
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>Other</h3>
              <ul className='space-y-2'>
                {skills.other.map((skill, i) => (
                  <li
                    key={i}
                    className='flex gap-2 text-sm text-muted-foreground'
                  >
                    <span
                      className='flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2'
                      aria-hidden='true'
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications in 2 columns */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {/* Education Section */}
          <section>
            <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
              Education
            </h2>
            <div className='border border-border rounded-md p-4'>
              <h3 className='text-lg font-bold'>BSc Computer Science</h3>
              <p className='text-muted-foreground'>University of Ilorin</p>
              <p className='text-sm text-muted-foreground mt-2'>
                Nov 2010 – Jul 2014
              </p>
            </div>
          </section>

          {/* Awards Section */}
          <section>
            <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
              Awards
            </h2>
            <ul className='space-y-4'>
              {awards.map((award, index) => (
                <li
                  key={index}
                  className='flex gap-3'
                >
                  <span className='text-primary'>🏆</span>
                  <div>
                    <p className='font-medium'>{award.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {award.company} ({award.year})
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Certifications Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
            Certifications
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className='border border-border rounded-md p-4'
              >
                <p className='font-medium'>{cert.name}</p>
                <p className='text-sm text-muted-foreground'>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 pb-2 border-b border-border'>
            Languages
          </h2>
          <div className='flex items-center gap-4'>
            <div className='px-4 py-2 border border-border rounded-md'>
              <p className='font-medium'>English</p>
              <p className='text-sm text-muted-foreground'>Fluent</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className='mt-16'>
          <div className='bg-primary/5 rounded-lg p-6 sm:p-8 text-center'>
            <h3 className='text-xl font-bold mb-2'>Ready to work together?</h3>
            <p className='text-muted-foreground mb-4'>
              I&apos;m available for consulting and test automation projects
            </p>
            <a
              href='/contact'
              className='inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors'
            >
              Contact Me
            </a>
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
