// app/api/blogs/route.ts (App Router)
import { getBlogs } from '@/lib/getBlogs';
import { NextResponse } from 'next/server';

export async function GET() {
  const blogs = getBlogs();
  return NextResponse.json(blogs);
}
