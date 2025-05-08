'use client';
import React, { useState } from 'react';

type SharePlatform = 'Facebook' | 'Twitter' | 'LinkedIn' | 'Copy Link';

interface ShareCardProps {
  url?: string;
  title?: string;
  description?: string;
}

const ShareCard: React.FC<ShareCardProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = typeof window !== 'undefined' ? document.title : '',
  description = '',
}) => {
  const [shareStatus, setShareStatus] = useState<string>('');

  const handleShare = (platform: SharePlatform) => {
    let shareUrl: string | undefined;

    switch (platform) {
      case 'Facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case 'Twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case 'LinkedIn':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case 'Copy Link':
        // Check if we're in the browser environment
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          // Copy to clipboard
          navigator.clipboard
            .writeText(url)
            .then(() => {
              setShareStatus('Link copied to clipboard!');
              setTimeout(() => setShareStatus(''), 2000);
            })
            .catch((err) => {
              console.error('Failed to copy: ', err);
              setShareStatus('Failed to copy link');
              setTimeout(() => setShareStatus(''), 2000);
            });
        } else {
          setShareStatus('Clipboard not available');
          setTimeout(() => setShareStatus(''), 2000);
        }
        return;
    }

    // Open a new window for social media sharing
    if (shareUrl && typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShareStatus(`Shared to ${platform}!`);
      setTimeout(() => setShareStatus(''), 2000);
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6'>
      <h3 className='text-lg font-semibold mb-4'>Share Article</h3>

      <div className='flex gap-2 mb-3'>
        <button
          className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'
          onClick={() => handleShare('Facebook')}
          aria-label='Share to Facebook'
          title='Share to Facebook'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
          </svg>
        </button>
        <button
          className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'
          onClick={() => handleShare('Twitter')}
          aria-label='Share to Twitter'
          title='Share to Twitter'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
          </svg>
        </button>
        <button
          className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'
          onClick={() => handleShare('LinkedIn')}
          aria-label='Share to LinkedIn'
          title='Share to LinkedIn'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
            <rect
              x='2'
              y='9'
              width='4'
              height='12'
            ></rect>
            <circle
              cx='4'
              cy='4'
              r='2'
            ></circle>
          </svg>
        </button>
        <button
          className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors'
          onClick={() => handleShare('Copy Link')}
          aria-label='Copy Link'
          title='Copy Link to Clipboard'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect
              x='9'
              y='9'
              width='13'
              height='13'
              rx='2'
              ry='2'
            ></rect>
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
          </svg>
        </button>
      </div>

      {shareStatus && (
        <div className='mt-2 text-sm font-medium text-green-600 dark:text-green-400 transition-opacity'>
          {shareStatus}
        </div>
      )}
    </div>
  );
};

export default ShareCard;
