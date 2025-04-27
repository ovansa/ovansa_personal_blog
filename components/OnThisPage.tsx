'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface LinkType {
  id: string;
  text: string;
}

const OnThisPage = ({
  htmlContent,
  className,
}: {
  htmlContent: string;
  className: string;
}) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);

  useEffect(() => {
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;

    const headings = temp.querySelectorAll('h2, h3, h4, h5');

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      const text = (heading as HTMLElement).innerText;

      generatedLinks.push({ id, text });
    });

    setLinks(generatedLinks);
  }, [htmlContent]);

  return (
    <div className={cn('hidden md:block', className)}>
      <div className='sticky top-16'>
        <h2>On this Page</h2>
        <ul className='not-prose'>
          {links?.map((link) => (
            <li className='pt-2' key={link.id}>
              <a href={`#${link.id}`}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
