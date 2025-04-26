// app/about/page.tsx

import NavBar from '@/components/NavBar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

export const runtime = 'edge';

export default function About() {
  return (
    <>
      <main className='pt-20 pb-16 bg-background text-foreground'>
        <MaxWidthWrapper>
          {/* Hero */}
          <section className='pb-5'>
            <MaxWidthWrapper>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='space-y-4'>
                  <h1 className='text-5xl md:text-6xl font-extrabold'>
                    Software Test Engineer
                    <br />& Quality Advocate
                  </h1>
                  <p className='text-lg text-gray-700 dark:text-gray-300'>
                    Hi, I’m <strong>Muhammed Ibrahim</strong>, a proactive Test
                    Engineer with 6+ years’ experience in API testing,
                    automation, and mentoring.
                  </p>
                  <p className='text-lg text-gray-700 dark:text-gray-300'>
                    I share real-world testing strategies and hands-on guides to
                    help you ship reliable software faster.
                  </p>
                </div>
                <div className='space-y-4'>
                  <blockquote className='text-2xl font-semibold italic text-gray-800 dark:text-gray-100 border-l-4 pl-4 border-gray-500 dark:border-gray-300'>
                    "I don't just test software. I reveal the illusion that
                    things work as they should. Through rigorous scrutiny, we
                    uncover the truth, empowering teams to build with
                    confidence."
                  </blockquote>
                </div>
              </div>
            </MaxWidthWrapper>
          </section>

          {/* Professional Summary */}
          <section className='mb-20'>
            <h2 className='text-3xl font-semibold mb-4'>
              Professional Summary
            </h2>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              I specialize in **test automation**, **API testing**, and
              **quality assurance**, with experience in both manual and
              automated testing strategies. I’ve worked on everything from
              enterprise-level applications to startups, ensuring the systems I
              test meet high standards for reliability and performance. My
              expertise in **CI/CD pipelines**, **Postman**, **Cypress**, and
              **Jest** has empowered teams to improve their testing processes
              and achieve faster, more efficient deployments. I also pride
              myself on sharing knowledge—mentoring junior testers and
              presenting workshops on best practices.
            </p>
          </section>

          {/* Experience */}
          <section className='mb-20'>
            <h2 className='text-3xl font-semibold mb-8'>Experience</h2>

            <div className='space-y-12'>
              <div>
                <h3 className='text-2xl font-bold'>QA Engineer, Interswitch</h3>
                <p className='italic text-gray-600 mb-2'>
                  Sep 2024 – Present | Lagos, Nigeria
                </p>
                <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
                  <li>
                    Designed and implemented automated API test frameworks using
                    Postman and integrated them into Bitbucket pipelines,
                    improving test reliability and reducing manual testing
                    efforts.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to ensure thorough
                    test coverage for payment transaction services.
                  </li>
                  <li>
                    Created reusable test scripts to accelerate regression
                    testing and catch defects early in the development cycle.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold'>
                  Senior SDET, Red Acre Ltd. (via Symphony)
                </h3>
                <p className='italic text-gray-600 mb-2'>
                  Jan 2023 – May 2024 | Malta
                </p>
                <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
                  <li>
                    Developed automated test strategies for complex web
                    applications using Cypress and Jest.
                  </li>
                  <li>
                    Led training sessions for junior developers and testers on
                    modern testing techniques and tools.
                  </li>
                  <li>
                    Worked closely with product teams to ensure test coverage
                    aligned with business requirements and new features.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold'>
                  Software Test Engineer, Accelerator App
                </h3>
                <p className='italic text-gray-600 mb-2'>
                  Apr 2021 – Jan 2023 | Portugal
                </p>
                <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
                  <li>
                    Implemented a comprehensive suite of E2E tests with Cypress
                    and integrated them into the CI pipeline.
                  </li>
                  <li>
                    Introduced load testing using k6, helping to identify
                    performance bottlenecks and optimize infrastructure.
                  </li>
                  <li>
                    Led the effort to automate API tests with Jest, improving
                    test coverage for backend services and speeding up feedback
                    loops for developers.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className='mb-20'>
            <h2 className='text-3xl font-semibold mb-4'>Education</h2>
            <p className='text-gray-700 dark:text-gray-300'>
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
                  className='px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm'
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
            <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
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
            <p className='text-gray-700 dark:text-gray-300'>English (Fluent)</p>
          </section>
        </MaxWidthWrapper>
      </main>
    </>
  );
}

// import MaxWidthWrapper from '@/components/MaxWidthWrapper';
// import Link from 'next/link';

// export const runtime = 'edge';

// export default function Home() {
//   return (
//     <>
//       <main className='pt-20 pb-16 bg-background text-foreground'>
//         {/* Hero */}
//         <section className='pb-20'>
//           <MaxWidthWrapper>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
//               <div className='space-y-4'>
//                 <h1 className='text-5xl md:text-6xl font-extrabold'>
//                   Software Test Engineer
//                   <br />& Quality Advocate
//                 </h1>
//                 <p className='text-lg text-gray-700 dark:text-gray-300'>
//                   Hi, I’m <strong>Muhammed Ibrahim</strong>, a proactive Test
//                   Engineer with 6+ years’ experience in API testing, automation,
//                   and mentoring.
//                 </p>
//                 <p className='text-lg text-gray-700 dark:text-gray-300'>
//                   I share real-world testing strategies and hands-on guides to
//                   help you ship reliable software faster.
//                 </p>
//                 <Link
//                   href='/about'
//                   className='inline-block px-6 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition'
//                 >
//                   Learn More About Me
//                 </Link>
//               </div>
//             </div>
//           </MaxWidthWrapper>
//         </section>

//         {/* About */}
//         <section
//           id='about'
//           className='py-20 bg-gray-50 dark:bg-gray-900'
//         >
//           <MaxWidthWrapper>
//             <h2 className='text-3xl font-semibold mb-6'>About Me</h2>
//             <p className='text-gray-700 dark:text-gray-300 mb-4'>
//               I’m a Software Test Engineer passionate about **ensuring product
//               quality** through strategic testing and automation. Over the past
//               6 years, I’ve built and maintained API test suites, integrated
//               tests into CI/CD pipelines, and mentored junior engineers.
//             </p>
//             <p className='text-gray-700 dark:text-gray-300'>
//               My goal is to empower teams and individuals with the knowledge and
//               tools they need to catch bugs early, improve stability, and
//               deliver confidence with every release.
//             </p>
//           </MaxWidthWrapper>
//         </section>

//         {/* Experience */}
//         <section
//           id='experience'
//           className='py-20'
//         >
//           <MaxWidthWrapper>
//             <h2 className='text-3xl font-semibold mb-8'>
//               Experience Highlights
//             </h2>

//             <div className='space-y-12'>
//               <div>
//                 <h3 className='text-2xl font-bold'>QA Engineer, Interswitch</h3>
//                 <p className='italic text-gray-600 mb-2'>
//                   September 2024 – Present, Lagos, Nigeria
//                 </p>
//                 <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1'>
//                   <li>
//                     Automated payment API testing with Postman & Bitbucket
//                     pipelines, cutting regression time by 200%.
//                   </li>
//                   <li>
//                     Built test strategies for critical endpoints to assure
//                     seamless transaction processing.
//                   </li>
//                   <li>
//                     Migrated legacy Ruby tests to Postman for consistency and
//                     ease of maintenance.
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className='text-2xl font-bold'>
//                   Senior SDET, Red Acre Ltd. (via Symphony)
//                 </h3>
//                 <p className='italic text-gray-600 mb-2'>
//                   Jan 2023 – May 2024, Malta
//                 </p>
//                 <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1'>
//                   <li>
//                     Defined end-to-end test standards for NestJS services,
//                     boosting coverage and reliability.
//                   </li>
//                   <li>
//                     Mentored junior QAs on tooling, processes, and
//                     troubleshooting for continuous learning.
//                   </li>
//                   <li>
//                     Collaborated with product and dev teams to align test plans
//                     with feature goals.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </MaxWidthWrapper>
//         </section>

//         {/* Skills */}
//         <section
//           id='skills'
//           className='py-20 bg-gray-50 dark:bg-gray-900'
//         >
//           <MaxWidthWrapper>
//             <h2 className='text-3xl font-semibold mb-6'>Key Skills</h2>
//             <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
//               <div className='px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow'>
//                 <h4 className='font-bold mb-2'>API & Integration Testing</h4>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   Postman, Playwright, GraphQL
//                 </p>
//               </div>
//               <div className='px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow'>
//                 <h4 className='font-bold mb-2'>Test Automation</h4>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   Cypress, Selenium, Jest
//                 </p>
//               </div>
//               <div className='px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow'>
//                 <h4 className='font-bold mb-2'>CI/CD & DevOps</h4>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   GitHub Actions, Bitbucket Pipelines
//                 </p>
//               </div>
//               <div className='px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow'>
//                 <h4 className='font-bold mb-2'>Mentorship & Training</h4>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   Workshops, 1:1 Coaching
//                 </p>
//               </div>
//               <div className='px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow'>
//                 <h4 className='font-bold mb-2'>Performance Testing</h4>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   k6, LoadRunner
//                 </p>
//               </div>
//               <div className='px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow'>
//                 <h4 className='font-bold mb-2'>Database & Infra</h4>
//                 <p className='text-gray-600 dark:text-gray-400'>
//                   PostgreSQL, AWS, Redis
//                 </p>
//               </div>
//             </div>
//           </MaxWidthWrapper>
//         </section>

//         {/* Contact */}
//         <section
//           id='contact'
//           className='py-20'
//         >
//           <MaxWidthWrapper>
//             <h2 className='text-3xl font-semibold mb-6'>Get in Touch</h2>
//             <p className='text-gray-700 dark:text-gray-300 mb-4'>
//               Whether you have a testing challenge, want to collaborate on a
//               project, or need training for your team, I’m here to help.
//             </p>
//             <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
//               <li>
//                 Email:{' '}
//                 <a
//                   href='mailto:aminmuhammad18@gmail.com'
//                   className='underline'
//                 >
//                   aminmuhammad18@gmail.com
//                 </a>
//               </li>
//               <li>
//                 LinkedIn:{' '}
//                 <a
//                   href='https://linkedin.com/in/ovansa'
//                   target='_blank'
//                   rel='noopener'
//                   className='underline'
//                 >
//                   linkedin.com/in/ovansa
//                 </a>
//               </li>
//               <li>
//                 GitHub:{' '}
//                 <a
//                   href='https://github.com/ovansa'
//                   target='_blank'
//                   rel='noopener'
//                   className='underline'
//                 >
//                   github.com/ovansa
//                 </a>
//               </li>
//             </ul>
//           </MaxWidthWrapper>
//         </section>

//         {/* Footer */}
//         <footer className='py-8 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400'>
//           <MaxWidthWrapper>
//             <div className='space-x-4'>
//               <Link
//                 href='/about'
//                 className='hover:underline'
//               >
//                 About
//               </Link>
//               <Link
//                 href='/blog'
//                 className='hover:underline'
//               >
//                 Blog
//               </Link>
//               <Link
//                 href='/privacy-policy'
//                 className='hover:underline'
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//             <p className='mt-4'>
//               &copy; {new Date().getFullYear()} Muhammed Ibrahim. All rights
//               reserved.
//             </p>
//           </MaxWidthWrapper>
//         </footer>
//       </main>
//     </>
//   );
// }
