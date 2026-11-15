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
import ShareCard from '@/components/ShareCard';
import SiteConfig from '@/config/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

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

function getPublishedDate(value?: string) {
  if (!value) return undefined;
  const date = DateTime.fromFormat(value, 'MM/dd/yyyy', { zone: 'utc' });
  return date.isValid ? date.toISODate() || undefined : undefined;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const filePath = path.join(process.cwd(), 'contents', slug, 'index.md');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(fileContent);

    const canonical = `${SiteConfig.siteUrl}/blogpost/${slug}`;
    const image = data.imageUrl || SiteConfig.ogImage;
    const publishedTime = getPublishedDate(data.publishedAt);

    return {
      title: data.title || slug,
      description: data.description || '',
      keywords: data.tags || data.categories || [],
      authors: [{ name: SiteConfig.author.name, url: SiteConfig.author.url }],
      alternates: { canonical },
      openGraph: {
        type: 'article',
        url: canonical,
        title: data.title,
        description: data.description,
        publishedTime,
        authors: [SiteConfig.author.url],
        tags: data.tags || data.categories || [],
        images: [{
          url: image,
          width: 1200,
          height: 630,
          alt: data.title || 'Software testing article by Muhammed Ibrahim',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.description,
        creator: '@ovansa',
        images: [image],
      },
    };
  } catch {
    return { title: 'Article not found', robots: { index: false, follow: false } };
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

  const filePath = path.join(process.cwd(), 'contents', slug, 'index.md');
  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const { data, content } = matter(fileContent);
  const htmlContent = (
    await processor.process(content || data.content)
  ).toString();

  const headerImage = data.imageUrl || `${SiteConfig.siteUrl}${SiteConfig.ogImage}`;
  const articleUrl = `${SiteConfig.siteUrl}/blogpost/${slug}`;
  const publishedDate = getPublishedDate(data.publishedAt);

  const publishDate = data.publishedAt
    ? DateTime.fromFormat(data.publishedAt, 'MM/dd/yyyy')
    : DateTime.now();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    image: [headerImage],
    datePublished: publishedDate,
    author: {
      '@type': 'Person',
      '@id': `${SiteConfig.siteUrl}/#person`,
      name: SiteConfig.author.name,
      url: SiteConfig.author.url,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${SiteConfig.siteUrl}/#person`,
      name: SiteConfig.author.name,
    },
    mainEntityOfPage: articleUrl,
    keywords: data.tags || data.categories || [],
    inLanguage: 'en',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SiteConfig.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SiteConfig.siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: data.title, item: articleUrl },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className='bg-gray-50 dark:bg-gray-900 min-h-screen pb-8 md:pb-16'>
        {/* Header banner */}
        <div className='w-full bg-white dark:bg-gray-800 shadow-sm'>
          <MaxWidthWrapper className='px-4 sm:px-6 md:px-8'>
            <div className='py-6 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8'>
              <div className='w-full md:w-3/5 space-y-3 md:space-y-4'>
                <div className='flex gap-2 flex-wrap'>
                  {Array.from(new Set<string>(data.categories || [])).map((category) => (
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
                  <time dateTime={publishedDate}>
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
                <ShareCard
                  url={articleUrl}
                  title={data.title}
                  description={data.description || ''}
                />
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
    </>
  );
}
