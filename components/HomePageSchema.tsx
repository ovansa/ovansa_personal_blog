// components/HomePageSchema.tsx
import SiteConfig from '@/config/site';

export default function HomePageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SiteConfig.author.name,
    alternateName: 'Ovansa',
    description:
      'Software Test Engineer with over 6 years of experience in API testing and test automation',
    url: SiteConfig.siteUrl,
    sameAs: [
      //   `https://twitter.com/${SiteConfig.author.twitter.replace('@', '')}`,
      `https://github.com/${SiteConfig.author.github}`,
      'https://linkedin.com/in/ovansa',
    ],
    jobTitle: 'Software Test Engineer',
    knowsAbout: [
      'API Testing',
      'Test Automation',
      'QA Best Practices',
      'Test-Driven Development',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Consulting',
        description:
          'Expert consulting on testing strategy and automation setup',
      },
      {
        '@type': 'Offer',
        name: 'Tutoring',
        description:
          'One-on-one coaching on API testing and automation frameworks',
      },
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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SiteConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
