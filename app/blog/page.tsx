import BlogList from '@/components/BlogList';
import SiteConfig from '@/config/site';
import { getBlogs } from '@/lib/getBlogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Testing Articles',
  description:
    'Practical articles by Muhammed Ibrahim on software testing, product risk, API testing, exploratory testing, test strategy, and automation.',
  keywords: [
    'API testing',
    'Postman',
    'exploratory testing',
    'test strategy',
    'test automation',
  ],
  alternates: { canonical: `${SiteConfig.siteUrl}/blog` },
  openGraph: {
    type: 'website',
    url: `${SiteConfig.siteUrl}/blog`,
    title: 'Software Testing Articles by Muhammed Ibrahim',
    description:
      'Practical writing on software testing, product risk, APIs, exploratory testing, test strategy, and automation.',
    images: [{
      url: SiteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: 'Software testing articles by Muhammed Ibrahim',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Testing Articles by Muhammed Ibrahim',
    description: 'Practical writing on product risk, API testing, exploratory testing, test strategy, and automation.',
    images: [SiteConfig.ogImage],
  },
};

export default function BlogPage() {
  return <BlogList initialBlogs={getBlogs()} />;
}
