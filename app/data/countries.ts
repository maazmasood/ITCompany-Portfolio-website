export interface CountryData {
  name: string;
  code: string;
  slug: string;
  description: string;
  benefits: string[];
  marketSize: string;
  regulations: string[];
  opportunities: string[];
}

export const countries: Record<string, CountryData> = {
  'usa': {
    name: 'United States',
    code: 'USA',
    slug: 'united-states',
    description: 'The United States is a global leader in AI technology, with a robust ecosystem of startups, established tech giants, and research institutions driving innovation.',
    benefits: [
      'Access to world-class AI talent and universities',
      'Strong venture capital ecosystem for tech startups',
      'Advanced research institutions and labs',
      'Robust intellectual property protection laws'
    ],
    marketSize: '$100B+',
    regulations: [
      'AI Bill of Rights framework',
      'State-specific AI regulations',
      'Federal AI guidelines'
    ],
    opportunities: [
      'Healthcare AI solutions for improved patient outcomes',
      'Financial technology AI for fraud detection and risk management',
      'Autonomous systems for transportation and logistics',
      'Enterprise AI solutions for business optimization',
      'AI-driven marketing analytics for targeted advertising',
      'Smart city technologies for urban planning and management'
    ]
  },
  'germany': {
    name: 'Germany',
    code: 'DE',
    slug: 'germany',
    description: 'Germany is at the forefront of AI development in Europe, known for its engineering excellence and strong focus on industrial applications of AI.',
    benefits: [
      'Strong engineering talent pool and technical expertise',
      'Government initiatives supporting AI research and development',
      'Advanced manufacturing sector leveraging AI for efficiency',
      'Access to the European Union market'
    ],
    marketSize: '$20B+',
    regulations: [
      'EU AI Act compliance for ethical AI use',
      'German AI strategy promoting innovation',
      'Data protection regulations under GDPR'
    ],
    opportunities: [
      'Industrial AI solutions for manufacturing and automation',
      'Smart manufacturing technologies for efficiency',
      'Healthcare technology innovations using AI',
      'Automotive AI systems for autonomous vehicles',
      'AI-driven supply chain optimization',
      'Energy management solutions using AI for sustainability'
    ]
  },
  'uk': {
    name: 'United Kingdom',
    code: 'GB',
    slug: 'united-kingdom',
    description: 'The UK is a hub for AI research and innovation, with a vibrant startup ecosystem and strong government support for AI initiatives.',
    benefits: [
      'Access to top universities and research institutions',
      'Government funding and support for AI projects',
      'Diverse talent pool from various sectors',
      'Strong intellectual property laws'
    ],
    marketSize: '$15B+',
    regulations: [
      'UK AI Strategy promoting responsible AI use',
      'Data protection laws under the Data Protection Act',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'Fintech innovations using AI for risk assessment',
      'Healthcare AI for diagnostics and treatment planning',
      'AI-driven marketing solutions for businesses',
      'Smart city initiatives leveraging AI for urban planning',
      'AI applications in education for personalized learning',
      'Cybersecurity solutions using AI for threat detection'
    ]
  },
  'canada': {
    name: 'Canada',
    code: 'CA',
    slug: 'canada',
    description: 'Canada is recognized for its strong AI research community and supportive government policies, making it an attractive destination for AI startups.',
    benefits: [
      'Access to leading AI research institutions like the Vector Institute',
      'Government grants and funding for AI initiatives',
      'Diverse and inclusive tech ecosystem',
      'Strong privacy laws protecting user data'
    ],
    marketSize: '$10B+',
    regulations: [
      'AI and Data Act promoting responsible AI use',
      'Privacy laws under the Personal Information Protection and Electronic Documents Act (PIPEDA)',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'AI solutions for natural language processing and translation',
      'Healthcare AI for personalized medicine',
      'AI-driven supply chain optimization',
      'Smart agriculture technologies using AI',
      'AI applications in environmental monitoring and conservation',
      'Financial services innovations using AI for fraud detection'
    ]
  },
  'france': {
    name: 'France',
    code: 'FR',
    slug: 'france',
    description: 'France is a key player in the European AI landscape, with a strong focus on ethical AI and government support for AI research and development.',
    benefits: [
      'Strong government support for AI initiatives',
      'Access to top universities and research centers',
      'Diverse talent pool in technology and engineering',
      'Focus on ethical AI development'
    ],
    marketSize: '$12B+',
    regulations: [
      'AI for Humanity strategy promoting ethical AI use',
      'Data protection regulations under GDPR',
      'National AI strategy for innovation'
    ],
    opportunities: [
      'AI solutions for smart cities and urban planning',
      'Healthcare AI for patient monitoring and diagnostics',
      'AI-driven marketing and customer engagement solutions',
      'Robotics and automation in manufacturing',
      'AI applications in transportation for logistics optimization',
      'Cultural heritage preservation using AI technologies'
    ]
  },
  'china': {
    name: 'China',
    code: 'CN',
    slug: 'china',
    description: 'China is rapidly advancing in AI technology, with significant government investment and a focus on AI applications across various sectors.',
    benefits: [
      'Massive government investment in AI research and development',
      'Large consumer market for AI applications',
      'Strong focus on AI in manufacturing and logistics',
      'Rapidly growing tech ecosystem'
    ],
    marketSize: '$50B+',
    regulations: [
      'AI development guidelines promoting innovation',
      'Data protection laws under the Cybersecurity Law',
      'Ethical guidelines for AI use'
    ],
    opportunities: [
      'AI solutions for e-commerce and retail',
      'Smart city initiatives leveraging AI for urban management',
      'Healthcare AI for diagnostics and treatment',
      'AI-driven financial services and fintech solutions',
      'AI applications in agriculture for yield optimization',
      'Transportation solutions using AI for traffic management'
    ]
  },
  'india': {
    name: 'India',
    code: 'IN',
    slug: 'india',
    description: 'India is emerging as a global player in AI, with a growing startup ecosystem and a focus on AI applications in various sectors.',
    benefits: [
      'Cost-effective development and skilled workforce',
      'Growing tech startup ecosystem',
      'Government initiatives supporting AI research',
      'Diverse market opportunities across sectors'
    ],
    marketSize: '$5B+',
    regulations: [
      'National AI Strategy promoting innovation',
      'Data protection laws under the Personal Data Protection Bill',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'AI solutions for agriculture and rural development',
      'Healthcare AI for affordable diagnostics',
      'AI-driven education technologies',
      'Smart city projects leveraging AI for urban planning',
      'AI applications in logistics for supply chain efficiency',
      'Financial technology innovations using AI for credit scoring'
    ]
  },
  'japan': {
    name: 'Japan',
    code: 'JP',
    slug: 'japan',
    description: 'Japan is known for its advanced technology and robotics, with a strong focus on AI applications in various industries.',
    benefits: [
      'Strong technological infrastructure and innovation',
      'Government support for AI research and development',
      'Focus on robotics and automation',
      'Skilled workforce in technology and engineering'
    ],
    marketSize: '$20B+',
    regulations: [
      'AI Strategy promoting innovation and ethical use',
      'Data protection laws under the Act on the Protection of Personal Information',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for robotics and automation',
      'Healthcare AI for elderly care and monitoring',
      'Smart manufacturing technologies',
      'AI-driven transportation solutions',
      'AI applications in disaster management and recovery',
      'Cultural preservation using AI technologies'
    ]
  },
  'south-korea': {
    name: 'South Korea',
    code: 'KR',
    slug: 'south-korea',
    description: 'South Korea is a leader in technology and innovation, with a strong focus on AI development and applications across various sectors.',
    benefits: [
      'Advanced technological infrastructure and research',
      'Government initiatives supporting AI innovation',
      'Strong focus on smart city technologies',
      'Diverse talent pool in technology and engineering'
    ],
    marketSize: '$10B+',
    regulations: [
      'AI Strategy promoting ethical and responsible use',
      'Data protection laws under the Personal Information Protection Act',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for smart cities and urban management',
      'Healthcare AI for diagnostics and treatment',
      'AI-driven manufacturing technologies',
      'Robotics and automation in various sectors',
      'AI applications in entertainment and media',
      'Financial technology innovations using AI for fraud detection'
    ]
  },
  'brazil': {
    name: 'Brazil',
    code: 'BR',
    slug: 'brazil',
    description: 'Brazil is emerging as a key player in AI development in Latin America, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Diverse market opportunities across sectors',
      'Growing tech startup ecosystem',
      'Government initiatives supporting AI research',
      'Access to a large consumer market'
    ],
    marketSize: '$3B+',
    regulations: [
      'AI Strategy promoting innovation and ethical use',
      'Data protection laws under the General Data Protection Law (LGPD)',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for agriculture and rural development',
      'Healthcare AI for affordable diagnostics',
      'AI-driven education technologies',
      'Smart city projects leveraging AI for urban planning',
      'AI applications in logistics for supply chain efficiency',
      'Financial technology innovations using AI for credit scoring'
    ]
  },
  'australia': {
    name: 'Australia',
    code: 'AU',
    slug: 'australia',
    description: 'Australia is known for its strong focus on AI research and development, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Access to top universities and research institutions',
      'Government funding and support for AI projects',
      'Diverse talent pool in technology and engineering',
      'Strong intellectual property laws'
    ],
    marketSize: '$8B+',
    regulations: [
      'AI Strategy promoting responsible AI use',
      'Data protection laws under the Privacy Act',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'AI solutions for healthcare and diagnostics',
      'Smart city initiatives leveraging AI for urban management',
      'AI-driven marketing and customer engagement solutions',
      'Robotics and automation in manufacturing',
      'AI applications in environmental monitoring and conservation',
      'Financial technology innovations using AI for fraud detection'
    ]
  },
  'singapore': {
    name: 'Singapore',
    code: 'SG',
    slug: 'singapore',
    description: 'Singapore is a global hub for technology and innovation, with a strong focus on AI development and applications across various sectors.',
    benefits: [
      'Advanced technological infrastructure and research',
      'Government support for AI innovation',
      'Strong focus on smart city technologies',
      'Diverse talent pool in technology and engineering'
    ],
    marketSize: '$5B+',
    regulations: [
      'AI Strategy promoting ethical and responsible use',
      'Data protection laws under the Personal Data Protection Act',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for smart cities and urban management',
      'Healthcare AI for diagnostics and treatment',
      'AI-driven manufacturing technologies',
      'Robotics and automation in various sectors',
      'AI applications in logistics for supply chain efficiency',
      'Financial technology innovations using AI for fraud detection'
    ]
  },
  'netherlands': {
    name: 'Netherlands',
    code: 'NL',
    slug: 'netherlands',
    description: 'The Netherlands is known for its strong focus on AI research and development, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Access to top universities and research institutions',
      'Government funding and support for AI projects',
      'Diverse talent pool in technology and engineering',
      'Strong intellectual property laws'
    ],
    marketSize: '$10B+',
    regulations: [
      'AI Strategy promoting responsible AI use',
      'Data protection laws under the General Data Protection Regulation (GDPR)',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'AI solutions for healthcare and diagnostics',
      'Smart city initiatives leveraging AI for urban management',
      'AI-driven marketing and customer engagement solutions',
      'Robotics and automation in manufacturing',
      'AI applications in transportation for logistics optimization',
      'Cultural heritage preservation using AI technologies'
    ]
  },
  'sweden': {
    name: 'Sweden',
    code: 'SE',
    slug: 'sweden',
    description: 'Sweden is a leader in technology and innovation, with a strong focus on AI development and applications across various industries.',
    benefits: [
      'Strong technological infrastructure and innovation',
      'Government support for AI research and development',
      'Focus on robotics and automation',
      'Skilled workforce in technology and engineering'
    ],
    marketSize: '$8B+',
    regulations: [
      'AI Strategy promoting innovation and ethical use',
      'Data protection laws under the General Data Protection Regulation (GDPR)',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for robotics and automation',
      'Healthcare AI for elderly care and monitoring',
      'Smart manufacturing technologies',
      'AI-driven transportation solutions',
      'AI applications in environmental monitoring and conservation',
      'Financial technology innovations using AI for fraud detection'
    ]
  },
  'finland': {
    name: 'Finland',
    code: 'FI',
    slug: 'finland',
    description: 'Finland is known for its strong focus on AI research and development, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Access to top universities and research institutions',
      'Government funding and support for AI projects',
      'Diverse talent pool in technology and engineering',
      'Strong intellectual property laws'
    ],
    marketSize: '$5B+',
    regulations: [
      'AI Strategy promoting responsible AI use',
      'Data protection laws under the General Data Protection Regulation (GDPR)',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'AI solutions for healthcare and diagnostics',
      'Smart city initiatives leveraging AI for urban management',
      'AI-driven marketing and customer engagement solutions',
      'Robotics and automation in manufacturing',
      'AI applications in environmental monitoring and conservation',
      'Financial technology innovations using AI for fraud detection'
    ]
  },
  'italy': {
    name: 'Italy',
    code: 'IT',
    slug: 'italy',
    description: 'Italy is emerging as a key player in AI development in Europe, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Diverse market opportunities across sectors',
      'Growing tech startup ecosystem',
      'Government initiatives supporting AI research',
      'Access to a large consumer market'
    ],
    marketSize: '$6B+',
    regulations: [
      'AI Strategy promoting innovation and ethical use',
      'Data protection laws under the General Data Protection Regulation (GDPR)',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for agriculture and rural development',
      'Healthcare AI for affordable diagnostics',
      'AI-driven education technologies',
      'Smart city projects leveraging AI for urban planning',
      'AI applications in logistics for supply chain efficiency',
      'Financial technology innovations using AI for credit scoring'
    ]
  },
  'spain': {
    name: 'Spain',
    code: 'ES',
    slug: 'spain',
    description: 'Spain is emerging as a key player in AI development in Europe, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Diverse market opportunities across sectors',
      'Growing tech startup ecosystem',
      'Government initiatives supporting AI research',
      'Access to a large consumer market'
    ],
    marketSize: '$5B+',
    regulations: [
      'AI Strategy promoting innovation and ethical use',
      'Data protection laws under the General Data Protection Regulation (GDPR)',
      'Guidelines for AI development and use'
    ],
    opportunities: [
      'AI solutions for agriculture and rural development',
      'Healthcare AI for affordable diagnostics',
      'AI-driven education technologies',
      'Smart city projects leveraging AI for urban planning',
      'AI applications in logistics for supply chain efficiency',
      'Financial technology innovations using AI for credit scoring'
    ]
  },
  'switzerland': {
    name: 'Switzerland',
    code: 'CH',
    slug: 'switzerland',
    description: 'Switzerland is known for its strong focus on AI research and development, with a growing startup ecosystem and government support for innovation.',
    benefits: [
      'Access to top universities and research institutions',
      'Government funding and support for AI projects',
      'Diverse talent pool in technology and engineering',
      'Strong intellectual property laws'
    ],
    marketSize: '$7B+',
    regulations: [
      'AI Strategy promoting responsible AI use',
      'Data protection laws under the Federal Act on Data Protection',
      'Ethical guidelines for AI development'
    ],
    opportunities: [
      'AI solutions for healthcare and diagnostics',
      'Smart city initiatives leveraging AI for urban management',
      'AI-driven marketing and customer engagement solutions',
      'Robotics and automation in manufacturing',
      'AI applications in environmental monitoring and conservation',
      'Financial technology innovations using AI for fraud detection'
    ]
  }
};

// Helper functions for routing
export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return Object.values(countries).find(country => country.slug === slug);
};

export const getAllCountrySlugs = (): string[] => {
  return Object.values(countries).map(country => country.slug);
};