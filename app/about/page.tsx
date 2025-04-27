// app/about/page.tsx

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export const runtime = 'edge';

export default function About() {
  return (
    <main className='px-16 pt-20 pb-16 bg-background text-foreground'>
      <MaxWidthWrapper>
        {/* Hero Section */}
        <section className='pb-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='space-y-6'>
              <h1 className='text-5xl md:text-6xl font-extrabold'>
                Software Test Engineer
                <br />& Quality Advocate
              </h1>
              <p className='text-lg text-muted-foreground'>
                Hi, I&quot;m <strong>Muhammed Ibrahim</strong>, a proactive Test
                Engineer with 6+ years’ experience in API testing, automation,
                and mentoring.
              </p>
              <p className='text-lg text-muted-foreground'>
                I share real-world testing strategies and hands-on guides to
                help you ship reliable software faster.
              </p>
            </div>
            <div>
              <blockquote className='text-2xl font-semibold italic text-muted-foreground border-l-4 pl-4 border-gray-400 dark:border-gray-600'>
                I don&quot;t just test software. I reveal the illusion that
                things work as they should. Through rigorous scrutiny, we
                uncover the truth, empowering teams to build with confidence.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className='mb-20'>
          <h2 className='text-3xl font-semibold mb-6'>Professional Summary</h2>
          <p className='text-muted-foreground leading-relaxed'>
            I specialize in <strong>test automation</strong>,{' '}
            <strong>API testing</strong>, and
            <strong> quality assurance</strong>, with experience in both manual
            and automated strategies. I&quot;ve worked on everything from
            enterprise-level applications to startups, ensuring the systems I
            test meet high standards for reliability and performance. My
            expertise in <strong>CI/CD pipelines</strong>,{' '}
            <strong>Postman</strong>, <strong>Cypress</strong>, and
            <strong> Jest</strong> has empowered teams to improve their testing
            processes and achieve faster, more efficient deployments. I also
            pride myself on sharing knowledge—mentoring junior testers and
            presenting workshops on best practices.
          </p>
        </section>

        {/* Experience */}
        <section className='mb-20'>
          <h2 className='text-3xl font-semibold mb-8'>Experience</h2>
          <div className='space-y-12'>
            {/* Interswitch */}
            <div>
              <h3 className='text-2xl font-bold'>QA Engineer, Interswitch</h3>
              <p className='italic text-muted-foreground mb-2'>
                Sep 2024 – Present | Lagos, Nigeria
              </p>
              <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li>
                  Designed and implemented automated API test frameworks using
                  Postman and integrated them into Bitbucket pipelines.
                </li>
                <li>
                  Collaborated with cross-functional teams to ensure thorough
                  test coverage for payment transaction services.
                </li>
                <li>
                  Created reusable test scripts to accelerate regression testing
                  and catch defects early.
                </li>
              </ul>
            </div>

            {/* Red Acre */}
            <div>
              <h3 className='text-2xl font-bold'>
                Senior SDET, Red Acre Ltd. (via Symphony)
              </h3>
              <p className='italic text-muted-foreground mb-2'>
                Jan 2023 – May 2024 | Malta
              </p>
              <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li>
                  Developed automated test strategies for complex web
                  applications using Cypress and Jest.
                </li>
                <li>
                  Led training sessions for junior developers and testers on
                  modern testing techniques and tools.
                </li>
                <li>
                  Ensured test coverage aligned with business requirements and
                  new features.
                </li>
              </ul>
            </div>

            {/* Accelerator App */}
            <div>
              <h3 className='text-2xl font-bold'>
                Software Test Engineer, Accelerator App
              </h3>
              <p className='italic text-muted-foreground mb-2'>
                Apr 2021 – Jan 2023 | Portugal
              </p>
              <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li>
                  Implemented a comprehensive suite of E2E tests with Cypress
                  and integrated them into the CI pipeline.
                </li>
                <li>
                  Introduced load testing using k6, identifying performance
                  bottlenecks and optimizing infrastructure.
                </li>
                <li>
                  Automated API tests with Jest, improving backend service
                  coverage and feedback loops for developers.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className='mb-20'>
          <h2 className='text-3xl font-semibold mb-4'>Education</h2>
          <p className='text-muted-foreground'>
            <strong>BSc Computer Science</strong>, University of Ilorin (Nov
            2010 – Jul 2014)
          </p>
        </section>

        {/* Skills */}
        <section className='mb-20'>
          <h2 className='text-3xl font-semibold mb-4'>Skills & Tools</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              'Postman & API Automation',
              'Cypress & Selenium',
              'Playwright',
              'Jest & Mocha',
              'Bitbucket & GitHub Actions',
              'k6 Performance Testing',
              'AWS & Redis',
              'Node.js & Go APIs',
              'Mentorship & Training',
            ].map((skill) => (
              <div
                key={skill}
                className='px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm text-muted-foreground'
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className='mb-20'>
          <h2 className='text-3xl font-semibold mb-4'>
            Awards & Certifications
          </h2>
          <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
            <li>CEO’s Outstanding Performance Award, Softcom Ltd. (2019)</li>
            <li>Software Tester of the Year, Softcom Ltd. (2019)</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>
              Black Box Software Testing (Foundations & Design) — Association
              for Software Testing
            </li>
            <li>Rapid Software Testing Applied — Satisfice Inc.</li>
          </ul>
        </section>

        {/* Languages */}
        <section className='mb-20'>
          <h2 className='text-3xl font-semibold mb-4'>Languages</h2>
          <p className='text-muted-foreground'>English (Fluent)</p>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
