import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { Metadata } from 'next';
import fs from 'fs';

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
  // Define path to markdown files
  // const postsDirectory = path.join(process.cwd(), 'contents');
  // const filePath = path.join(postsDirectory, `${slug}.md`);
  const filePath = `contents/${slug}.md`;

  try {
    return await fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading file:', error);
    throw new Error('Failed to read post');
  }
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
