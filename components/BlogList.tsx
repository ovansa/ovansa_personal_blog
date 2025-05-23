'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { formatDate } from '@/lib/datUtil';

interface BlogType {
  id: string;
  slug: string;
  content: string;
  title: string;
  description: string;
  imageUrl?: string;
  publishedAt: string;
  readingTime?: string;
  categories?: string[];
}

const ITEMS_PER_PAGE = 6;

const BlogList = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true); // Start loading before fetching
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
        console.log(`Loading should done`);
      } catch (err) {
        console.error('Failed to load blogs', err);
      } finally {
        console.log(`Loading done`);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory || blog.categories?.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  return (
    <section className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='mb-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Learn about testing</h1>
      </div>

      {/* Search */}
      <div className='mb-8 space-y-4'>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <input
            type='text'
            placeholder='Search articles...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className='w-full md:w-1/2 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 transition'
            aria-label='Search articles'
          />
          {search || selectedCategory ? (
            <button
              onClick={resetFilters}
              className={buttonVariants({ variant: 'outline' })}
              aria-label='Clear filters'
            >
              Clear Filters
            </button>
          ) : null}
        </div>
      </div>

      {isLoading ? (
        <div className='flex justify-center items-center py-12'>
          <Loader2 className='h-8 w-8 animate-spin' />
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className='text-center py-12'>
          <h3 className='text-xl font-medium mb-4'>No articles found</h3>
          <p className='text-muted-foreground mb-6'>
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={resetFilters}
            className={buttonVariants({ variant: 'default' })}
          >
            View All Articles
          </button>
        </div>
      ) : (
        <>
          <p className='text-sm text-muted-foreground mb-6'>
            Showing {startIndex + 1}-
            {Math.min(startIndex + ITEMS_PER_PAGE, filteredBlogs.length)} of{' '}
            {filteredBlogs.length} results
          </p>

          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {paginatedBlogs.map((blog) => (
              <article
                key={blog.id}
                className='group shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full'
              >
                <div className='relative h-64 w-full overflow-hidden'>
                  <Image
                    src={blog.imageUrl || '/images/placeholder-blog.jpg'}
                    alt={blog.title}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                    priority={startIndex === 0}
                    loading={startIndex === 0 ? 'eager' : 'lazy'}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>

                <div className='p-6 flex-grow flex flex-col'>
                  {blog.categories && (
                    <div className='flex flex-wrap gap-2 mb-3'>
                      {blog.categories.slice(0, 2).map((category) => (
                        <span
                          key={category}
                          className='px-2 py-1 text-xs font-medium bg-muted rounded-full'
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
                    {blog.title}
                  </h2>

                  <p className='mb-4 text-muted-foreground line-clamp-3'>
                    {blog.description}
                  </p>

                  <div className='flex justify-between items-center text-sm text-muted-foreground mt-auto'>
                    <time dateTime={blog.publishedAt}>
                      {formatDate(blog.publishedAt)}
                    </time>
                    <span>{blog.readingTime}</span>
                  </div>

                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className={buttonVariants({
                      variant: 'outline',
                      className: 'mt-4',
                    })}
                  >
                    Read More
                    <span className='sr-only'>about {blog.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className='flex justify-center mt-12'>
              <nav aria-label='Pagination'>
                <ul className='flex gap-2'>
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'sm',
                        className:
                          currentPage === 1
                            ? 'opacity-50 cursor-not-allowed'
                            : '',
                      })}
                      aria-label='Previous page'
                    >
                      Previous
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li key={page}>
                        <button
                          onClick={() => handlePageChange(page)}
                          className={buttonVariants({
                            variant:
                              page === currentPage ? 'default' : 'outline',
                            size: 'sm',
                          })}
                          aria-current={
                            page === currentPage ? 'page' : undefined
                          }
                          aria-label={`Page ${page}`}
                        >
                          {page}
                        </button>
                      </li>
                    )
                  )}

                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'sm',
                        className:
                          currentPage === totalPages
                            ? 'opacity-50 cursor-not-allowed'
                            : '',
                      })}
                      aria-label='Next page'
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BlogList;
