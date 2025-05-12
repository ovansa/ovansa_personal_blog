'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, ThumbsUp, Reply } from 'lucide-react';
import { DateTime } from 'luxon';

// Types
interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
  likes: number;
  avatarUrl?: string;
  replies?: Comment[];
}

interface CommentsProps {
  slug: string;
}

export default function Comments({ slug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [replyTo, setReplyTo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{
    name: string;
    email: string;
    comment: string;
  }>();

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?slug=${slug}`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [slug]);

  // Submit comment
  const onSubmit = async (data: {
    name: string;
    email: string;
    comment: string;
  }) => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
          name: data.name,
          email: data.email,
          content: data.comment,
          parentId: replyTo,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit comment');

      // Refresh comments
      const updatedComments = await response.json();
      setComments(updatedComments);

      // Reset form
      reset();
      setReplyTo(null);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  // Like comment
  const handleLike = async (commentId: string) => {
    try {
      const response = await fetch(`/api/comments/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentId }),
      });

      if (!response.ok) throw new Error('Failed to like comment');

      // Update comments
      const updatedComments = await response.json();
      setComments(updatedComments);
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return DateTime.fromISO(dateString).toRelative();
  };

  return (
    <div className='w-full space-y-6'>
      <div className='flex items-center gap-2'>
        <MessageSquare className='h-5 w-5 text-blue-600' />
        <h2 className='text-xl font-semibold'>Comments ({comments.length})</h2>
      </div>

      <Card>
        <CardHeader className='pb-3'>
          <h3 className='text-lg font-medium'>Leave a comment</h3>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  placeholder='Your name'
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className='text-sm text-red-500'>{errors.name.message}</p>
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Your email (not published)'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <p className='text-sm text-red-500'>{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='comment'>
                {replyTo ? 'Your reply' : 'Your comment'}
              </Label>
              <Textarea
                id='comment'
                placeholder='Share your thoughts...'
                rows={4}
                {...register('comment', { required: 'Comment is required' })}
              />
              {errors.comment && (
                <p className='text-sm text-red-500'>{errors.comment.message}</p>
              )}
            </div>

            {replyTo && (
              <div className='flex items-center'>
                <span className='text-sm text-gray-500'>
                  Replying to a comment
                </span>
                <Button
                  variant='link'
                  size='sm'
                  onClick={() => setReplyTo(null)}
                  className='text-blue-600'
                >
                  Cancel
                </Button>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className='flex justify-end'>
          <Button
            type='submit'
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : replyTo ? 'Reply' : 'Comment'}
          </Button>
        </CardFooter>
      </Card>

      <Separator className='my-6' />

      {isLoading ? (
        <div className='flex justify-center py-8'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
        </div>
      ) : comments.length > 0 ? (
        <div className='space-y-6'>
          {comments.map((comment) => (
            <Card
              key={comment.id}
              className='border border-gray-200 dark:border-gray-700'
            >
              <CardHeader className='pb-2'>
                <div className='flex items-start gap-4'>
                  <Avatar className='h-10 w-10'>
                    {comment.avatarUrl && (
                      <AvatarImage
                        src={comment.avatarUrl}
                        alt={comment.name}
                      />
                    )}
                    <AvatarFallback>{getInitials(comment.name)}</AvatarFallback>
                  </Avatar>
                  <div className='space-y-1'>
                    <h4 className='font-medium leading-none'>{comment.name}</h4>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {formatDate(comment.createdAt)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='pb-2'>
                <p className='whitespace-pre-line'>{comment.content}</p>
              </CardContent>
              <CardFooter className='pt-0 flex gap-4'>
                {/* <Button
                  data-ovid='likeButton'
                  variant='ghost'
                  size='sm'
                  className='text-gray-500 hover:text-blue-600'
                  onClick={() => handleLike(comment.id)}
                >
                  <ThumbsUp className='h-4 w-4 mr-1' />
                  {comment.likes > 0 && <span>{comment.likes}</span>}
                </Button> */}
                <Button
                  data-ovid='replyButton'
                  variant='ghost'
                  size='sm'
                  className='text-gray-500 hover:text-blue-600'
                  onClick={() => setReplyTo(comment.id)}
                >
                  <Reply className='h-4 w-4 mr-1' />
                  Reply
                </Button>
                {/* <Button
                  data-ovid='replyButton'
                  variant='ghost'
                  size='sm'
                  className='text-gray-500 hover:text-red-600 ml-auto'
                >
                  <Flag className='h-4 w-4' />
                </Button> */}
              </CardFooter>

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className='pl-4 pr-2 pb-3 border-l-2 border-gray-100 dark:border-gray-700 ml-12 mb-3 space-y-4'>
                  {comment.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className='pt-3'
                    >
                      <div className='flex items-start gap-3'>
                        <Avatar className='h-8 w-8'>
                          {reply.avatarUrl && (
                            <AvatarImage
                              src={reply.avatarUrl}
                              alt={reply.name}
                            />
                          )}
                          <AvatarFallback>
                            {getInitials(reply.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                          <div className='flex items-center gap-2'>
                            <h5 className='font-medium leading-none'>
                              {reply.name}
                            </h5>
                            <span className='text-xs text-gray-500'>
                              {formatDate(reply.createdAt)}
                            </span>
                          </div>
                          <p className='text-sm whitespace-pre-line'>
                            {reply.content}
                          </p>
                          <div className='flex gap-4 pt-1'>
                            <Button
                              variant='ghost'
                              size='sm'
                              className='h-7 text-xs text-gray-500 hover:text-blue-600'
                              onClick={() => handleLike(reply.id)}
                            >
                              <ThumbsUp className='h-3 w-3 mr-1' />
                              {reply.likes > 0 && <span>{reply.likes}</span>}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <div className='text-center py-8'>
          <MessageSquare className='h-10 w-10 mx-auto text-gray-400 mb-2' />
          <h3 className='font-medium text-gray-900 dark:text-gray-100'>
            No comments yet
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mt-1'>
            Be the first to share your thoughts!
          </p>
        </div>
      )}
    </div>
  );
}
