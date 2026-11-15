// components/HomePageSchema.tsx
import SiteConfig from '@/config/site';
import resume from '@/config/resume.json';

export default function HomePageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SiteConfig.siteUrl}/#person`,
    name: SiteConfig.author.name,
    alternateName: 'Ovansa',
    description: resume.summary,
    url: SiteConfig.siteUrl,
    sameAs: [
      //   `https://twitter.com/${SiteConfig.author.twitter.replace('@', '')}`,
      SiteConfig.author.github,
      SiteConfig.author.linkedin,
    ],
    jobTitle: resume.title,
    knowsAbout: [
      'Software Quality Engineering',
      'Exploratory Testing',
      'Test Strategy',
      'Test Automation',
      'API Testing',
      'Backend Testing',
      'Mobile Testing',
      'Product Risk',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Interswitch',
      url: 'https://www.interswitchgroup.com/',
    },
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
    '@id': `${SiteConfig.siteUrl}/#website`,
    name: SiteConfig.siteName,
    url: SiteConfig.siteUrl,
    description: SiteConfig.description,
    author: {
      '@type': 'Person',
      '@id': `${SiteConfig.siteUrl}/#person`,
    },
    inLanguage: SiteConfig.siteLanguage,
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
