// components/HomePageSchema.tsx
import SiteConfig from '@/config/site';
import resume from '@/config/resume.json';

export default function HomePageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SiteConfig.author.name,
    alternateName: 'Ovansa',
    description: resume.summary,
    url: SiteConfig.siteUrl,
    sameAs: [
      //   `https://twitter.com/${SiteConfig.author.twitter.replace('@', '')}`,
      SiteConfig.author.github,
      'https://linkedin.com/in/ovansa',
    ],
    jobTitle: resume.title,
    knowsAbout: [
      'API Testing',
      'Test Automation',
      'Testing Best Practices',
      'Test-Driven Development',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SiteConfig.siteUrl,
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Also create a WebSite schema
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SiteConfig.siteName,
    url: SiteConfig.siteUrl,
    description: SiteConfig.description,
    author: {
      '@type': 'Person',
      name: SiteConfig.author.name,
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
