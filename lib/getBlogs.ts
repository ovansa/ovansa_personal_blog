// lib/getBlogs.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogType {
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

export const getBlogs = (): BlogType[] => {
  const contentDir = path.join(process.cwd(), 'contents');
  const directories = fs
    .readdirSync(contentDir)
    .filter((name) => fs.statSync(path.join(contentDir, name)).isDirectory());

  return directories.map((slug, index) => {
    const filePath = path.join(contentDir, slug, 'index.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      id: (index + 1).toString(),
      slug,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl || '',
      publishedAt: data.publishedAt,
      readingTime: data.readingTime || '',
      categories: data.categories || [],
      content,
    };
  });
};
