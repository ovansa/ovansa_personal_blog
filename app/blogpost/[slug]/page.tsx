import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { Metadata } from 'next';

export const runtime = 'edge';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `Post - ${params.slug}`,
  };
}

async function getPostContent(slug: string) {
  const fileUrl = `${getBaseUrl()}/contents/${slug}.md`;
  const res = await fetch(fileUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  return await res.text();
}

export default async function BlogPost(props: Props) {
  const params = await props.params;
  const { slug } = params;

  console.log('Base URL:', getBaseUrl());
  console.log('Fetching from:', `${getBaseUrl()}/contents/${slug}.md`);

  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify);

  try {
    const fileContent = await getPostContent(slug);
    const { data, content } = matter(fileContent);
    const htmlContent = (
      await processor.process(content || data.content)
    ).toString();

    return (
      <MaxWidthWrapper className='prose dark:prose-invert'>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </MaxWidthWrapper>
    );
  } catch (error) {
    console.error('Error fetching or processing markdown file:', error);
    return (
      <MaxWidthWrapper>
        <h1 className='text-2xl font-bold text-red-600'>
          {error instanceof Error && error.message.includes('Failed to fetch')
            ? '404 - Article Not Found'
            : '500 - Server Error'}
        </h1>
      </MaxWidthWrapper>
    );
  }
}

// function getBaseUrl() {
//   if (typeof window !== 'undefined') return '';
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
//   return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
// }

// Use Vercel's automatic URL detection
function getBaseUrl() {
  if (typeof window !== 'undefined') return '';

  // Use Vercel's system environment variables
  const vercelEnv = process.env.VERCEL_ENV; // "production", "preview", "development"

  if (vercelEnv === 'production') {
    return `https://${
      process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    }`;
  }

  // For preview deployments and development
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
}
