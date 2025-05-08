import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import path from 'path';
import { promises as fs } from 'fs';
import OnThisPage from '@/components/OnThisPage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import Image from 'next/image';
import { DateTime } from 'luxon';
import Comments from '@/components/Comments'; // Import the Comments component
import { Card } from '@/components/ui/card'; // Import Card from shadcn/ui

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'contents');
  const folders = await fs.readdir(contentDir);
  const slugs = [];

  for (const folder of folders) {
    const folderPath = path.join(contentDir, folder);
    const stat = await fs.stat(folderPath);
    if (stat.isDirectory()) {
      slugs.push({ slug: folder });
    }
  }

  return slugs;
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  try {
    const filePath = path.join(process.cwd(), 'contents', slug, 'index.md');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title || slug,
      description: data.description || '',
      openGraph: {
        title: data.title,
        description: data.description,
        images: [data.imageUrl || `/images/blog/headers/${slug}.jpg`],
      },
    };
  } catch {
    return { title: slug };
  }
}

export default async function BlogPost(props: Props) {
  const { slug } = await props.params;

  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'material-theme-ocean',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

  try {
    const filePath = path.join(process.cwd(), 'contents', slug, 'index.md');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const { data, content } = matter(fileContent);
    const htmlContent = (
      await processor.process(content || data.content)
    ).toString();

    const headerImage = data.imageUrl || `/images/blog/headers/${slug}.jpg`;

    const publishDate = data.publishedAt
      ? DateTime.fromFormat(data.publishedAt, 'MM/dd/yyyy')
      : DateTime.now();

    return (
      <div className='bg-gray-50 dark:bg-gray-900 min-h-screen pb-8 md:pb-16'>
        {/* Header banner */}
        <div className='w-full bg-white dark:bg-gray-800 shadow-sm'>
          <MaxWidthWrapper className='px-4 sm:px-6 md:px-8'>
            <div className='py-6 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8'>
              <div className='w-full md:w-3/5 space-y-3 md:space-y-4'>
                <div className='flex gap-2 flex-wrap'>
                  {data.categories?.map((category: string) => (
                    <span
                      key={category}
                      className='text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium'
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-0'>
                  {data.title}
                </h1>

                {data.description && (
                  <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {data.description}
                  </p>
                )}

                <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 pt-2'>
                  <time dateTime={data.publishedAt}>
                    {publishDate.toFormat('LLLL d, yyyy')}
                  </time>
                  {data.readingTime && <span className='mx-2'>•</span>}
                  {data.readingTime && (
                    <span className='font-medium'>{data.readingTime}</span>
                  )}
                </div>
              </div>

              <div className='w-full md:w-2/5 flex justify-center md:justify-end mt-6 md:mt-0'>
                <div className='relative w-full max-w-xs sm:max-w-sm aspect-square rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src={headerImage}
                    alt={data.title || 'Blog post header image'}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 384px, 384px'
                    priority
                    className='object-cover hover:scale-105 transition-transform duration-500'
                  />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* Content section */}
        <MaxWidthWrapper className='mt-6 md:mt-12 px-4 sm:px-6 md:px-8'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
            <div className='w-full lg:w-3/4 space-y-8'>
              {/* Article content */}
              <article className='prose dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-img:rounded-xl'>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 md:p-8'>
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
              </article>

              {/* Comments section */}
              <section className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 md:p-8'>
                <Comments slug={slug} />
              </section>
            </div>

            {/* Table of Contents - Hidden on mobile, shown on larger screens */}
            <aside className='hidden lg:block lg:w-1/4 w-full'>
              <div className='sticky top-24 space-y-6'>
                <Card className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6'>
                  <h3 className='text-lg font-semibold mb-4'>On This Page</h3>
                  <OnThisPage
                    className='text-sm'
                    htmlContent={htmlContent}
                  />
                </Card>

                {/* Share card */}
                <Card className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6'>
                  <h3 className='text-lg font-semibold mb-4'>Share Article</h3>
                  <div className='flex gap-2'>
                    <button className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                      </svg>
                    </button>
                    <button className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                      </svg>
                    </button>
                    <button className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                        <rect
                          x='2'
                          y='9'
                          width='4'
                          height='12'
                        ></rect>
                        <circle
                          cx='4'
                          cy='4'
                          r='2'
                        ></circle>
                      </svg>
                    </button>
                    <button className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='9'
                          y='9'
                          width='13'
                          height='13'
                          rx='2'
                          ry='2'
                        ></rect>
                        <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                      </svg>
                    </button>
                  </div>
                </Card>
              </div>
            </aside>

            {/* Mobile Table of Contents (Collapsible) */}
            <div className='lg:hidden w-full mb-6'>
              <details className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4'>
                <summary className='text-lg font-semibold cursor-pointer'>
                  On This Page
                </summary>
                <div className='mt-4'>
                  <OnThisPage
                    className='text-sm'
                    htmlContent={htmlContent}
                  />
                </div>
              </details>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  } catch (error) {
    console.error('Error processing markdown file:', error);
    return (
      <div className='min-h-screen flex items-center justify-center px-4'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-600 mb-4'>
            404 - Article Not Found
          </h1>
          <p className='text-gray-600 dark:text-gray-300'>
            We couldn&apos;t find the article you&apos;re looking for.
          </p>
        </div>
      </div>
    );
  }
}
