import { MetadataRoute } from 'next';
import caseStudies from '@/constants/casestudy.json'; // Example data source
import { countries } from './data/countries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://futureascend.com';

  // Generate sitemap entries for case studies with priority
  const caseStudyEntries = Object.keys(caseStudies).map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.9, // Higher priority for case studies
  }));
  

  const countryEntries = Object.entries(countries).map(([key, country]) => ({
    url: `${baseUrl}/${country.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.9, // Higher priority for case studies
  }));

  // Add static pages with varying priorities
  const staticEntries = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), priority: 1.0 }, // Homepage, highest priority
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString(), priority: 0.9 }, // Services, important
    { url: `${baseUrl}/solutions`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/countries`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date().toISOString(), priority: 0.3 }, // Less critical pages
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date().toISOString(), priority: 0.3 },
  ];

  return [...staticEntries, ...caseStudyEntries, ...countryEntries];
}
