import { MetadataRoute } from 'next';
import caseStudies from '@/constants/casestudy.json'; // Example data source

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://futureascend.com';

  // Generate sitemap entries for case studies
  const caseStudyEntries = Object.keys(caseStudies).map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Add static pages
  const staticEntries = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/solutions`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/case-studies`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date().toISOString() },
  ];

  return [...staticEntries, ...caseStudyEntries];
}
