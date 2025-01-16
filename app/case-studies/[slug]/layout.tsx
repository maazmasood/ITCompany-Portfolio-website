// app/case-studies/[slug]/layout.tsx
import { Metadata } from 'next';
import caseStudies from '@/constants/casestudy.json';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - FutureAscend',
      description: 'The requested case study could not be found. Check the URL or contact support for assistance.',
      openGraph: {
        title: 'Case Study Not Found - FutureAscend',
        description: 'We couldn’t locate the case study you’re looking for. Please try again later.',
        url: `/case-studies/${params.slug}`,
      },
    };
  }

  return {
    title: `${caseStudy.title} - FutureAscend`,
    description: `Explore how FutureAscend helped ${caseStudy.client} overcome challenges in the ${caseStudy.industry} industry with our innovative solutions.`,
    openGraph: {
      title: `${caseStudy.title} - FutureAscend`,
      description: `Discover how we transformed ${caseStudy.client}'s business in the ${caseStudy.industry} sector through groundbreaking strategies and results.`,
      url: `/case-studies/${params.slug}`,
      images: [
        {
          url: caseStudy.image,
          alt: `${caseStudy.title} - FutureAscend`,
        },
      ],
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
