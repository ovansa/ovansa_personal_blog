'use server';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';

export const runtime = 'edge';

interface BlogPostProps {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function BlogPost(props: BlogPostProps) {
  const { params } = props;
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify);

  const fileUrl = `${getBaseUrl()}/contents/${params.slug}.md`;

  try {
    const res = await fetch(fileUrl);

    if (!res.ok) {
      return (
        <MaxWidthWrapper>
          <h1 className='text-2xl font-bold text-red-600'>
            404 - Article Not Found
          </h1>
        </MaxWidthWrapper>
      );
    }

    const fileContent = await res.text();
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
        <h1 className='text-2xl font-bold text-red-600'>500 - Server Error</h1>
      </MaxWidthWrapper>
    );
  }
}

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}
