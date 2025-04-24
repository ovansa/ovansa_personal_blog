import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { Metadata } from 'next';

// Remove edge runtime since we're using Node.js filesystem
// export const runtime = 'edge';

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
  // On Vercel: fetch from /public
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/contents/${slug}.md`);
  if (!res.ok) throw new Error('Post not found');
  return res.text();
}

export default async function BlogPost(props: Props) {
  const params = await props.params;
  const { slug } = params;

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
    console.error('Error processing markdown file:', error);
    return (
      <MaxWidthWrapper>
        <h1 className='text-2xl font-bold text-red-600'>
          {error instanceof Error && error.message.includes('Failed to read')
            ? '404 - Article Not Found'
            : '500 - Server Error'}
        </h1>
      </MaxWidthWrapper>
    );
  }
}
