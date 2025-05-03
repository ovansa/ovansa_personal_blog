import BlogList from '@/components/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Learn About Testing and Development',
  description:
    'Explore our collection of blogs that cover various aspects of fullstack development, API testing, and more.',
  keywords: [
    'API testing',
    'Postman',
    'React',
    'fullstack development',
    'server components',
  ],
  openGraph: {
    title: 'Blog - Learn About Testing and Development',
    description:
      'Explore our collection of blogs that cover various aspects of fullstack development, API testing, and more.',
    images: [
      {
        url: '/images/blog-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Cover Image',
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogList />;
}
