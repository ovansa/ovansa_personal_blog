import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export const runtime = 'edge';

interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const blogs: BlogType[] = [
  {
    slug: 'fullstack-app',
    title: 'How to Build a Fullstack App in 2023 and Beyond',
    description:
      'Learn how to create a scalable fullstack application using modern tools.',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    content: `
  ### Introduction
  
  Building a fullstack app requires a solid understanding of frontend, backend, and database systems.
  
  ### Tools We’ll Use
  
  - React with TypeScript
  - Node.js or Go for backend
  - PostgreSQL for storage
  
  ### Final Thoughts
  
  A well-structured fullstack app follows clear separation of concerns and is easily scalable.
      `,
  },
  {
    slug: 'tailwind-future',
    title: 'Tailwind CSS: The Future of Styling in React',
    description: 'A deep dive into utility-first CSS and why it’s taking over.',
    imageUrl:
      'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
    content: `
  ### Why Tailwind?
  
  Tailwind offers utility-first classes that eliminate the need for custom CSS in many cases.
  
  ### Benefits
  
  - Rapid prototyping
  - Consistency
  - Smaller CSS bundles
  
  > "Tailwind changed how I write CSS forever."
  
  ### Conclusion
  
  Tailwind is here to stay and is only getting better.
      `,
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    description:
      'Everything you need to know about RSCs and how they change the game.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
    content: `
  ### What Are RSCs?
  
  React Server Components allow developers to offload rendering to the server without sending extra JS to the client.
  
  ### Use Cases
  
  - Rendering large datasets
  - Keeping bundle size small
  - Improved performance
  
  ### Summary
  
  RSCs will likely become a key part of all Next.js apps in the future.
      `,
  },
];

const BlogList = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Latest Blogs</h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog: BlogType, index: number) => (
          <div
            key={index}
            className='shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden'
          >
            <Image
              src={blog.imageUrl || ''}
              alt={blog.title}
              width={800}
              height={256}
              className='w-full h-64 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{blog.title}</h3>
              <p className='mb-4'>{blog.description}</p>
              <a
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: 'outline' })}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
