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

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  // Optional: You can scan your contents folder to generate static params
  return []; // fill this in later if needed
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  return {
    title: params.slug,
  };
}

export default async function BlogPost(props: Props) {
  const params = await props.params;
  const { slug } = params;

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
    const markdownDir = path.join(process.cwd(), 'contents');
    const filePath = path.join(markdownDir, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const { data, content } = matter(fileContent);
    const htmlContent = (
      await processor.process(content || data.content)
    ).toString();

    return (
      <MaxWidthWrapper className='prose dark:prose-invert'>
        <div className='flex'>
          <div className='px-16'>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
          <OnThisPage
            className='text-sm w-[20%]'
            htmlContent={htmlContent}
          />
        </div>
      </MaxWidthWrapper>
    );
  } catch (error) {
    console.error('Error processing markdown file:', error);
    return (
      <MaxWidthWrapper>
        <h1 className='text-2xl font-bold text-red-600'>
          404 - Article Not Found
        </h1>
      </MaxWidthWrapper>
    );
  }
}
