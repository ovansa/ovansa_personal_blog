import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET /api/comments?slug=your-article-slug
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Article slug is required' },
        { status: 400 }
      );
    }

    // Fetch comments for the article (top level comments first)
    const comments = await db.comment.findMany({
      where: {
        articleSlug: slug,
        parentId: null, // Only get top-level comments
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        // Include replies (nested comments)
        replies: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST /api/comments
export async function POST(request: NextRequest) {
  try {
    const { slug, name, email, content, parentId } = await request.json();

    // Basic validation
    if (!slug || !name || !email || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the comment
    await db.comment.create({
      data: {
        articleSlug: slug,
        name,
        email,
        content,
        parentId: parentId || null,
      },
    });

    // Fetch updated comments to return to client
    const comments = await db.comment.findMany({
      where: {
        articleSlug: slug,
        parentId: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        replies: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
