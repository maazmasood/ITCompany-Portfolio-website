import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { AnimatedGradient } from './animated-gradient';
import Link from "next/link"

interface CircularProgressProps {
  value: number;
  color: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90 w-36 h-36">
        <circle
          className="text-gray-200"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="72"
          cy="72"
        />
        <circle
          className="transition-all duration-1000 ease-out"
          strokeWidth="4"
          stroke={color}
          fill="transparent"
          r={radius}
          cx="72"
          cy="72"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <span className="absolute text-3xl font-bold" style={{ color }}>
        {progress}%
      </span>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    {
      percentage: 90,
      label: "Businesses thrive with fast-loading, SEO-optimized websites",
    },
    {
      percentage: 95,
      label: "Effective marketing campaigns drive higher customer engagement",
    },
    {
      percentage: 85,
      label: "Google Ads boosts visibility for targeted audiences",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative px-5 md:px-32 ">
      <AnimatedGradient />
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <CircularProgress value={stat.percentage} color="#60A5FA" />
                <p className="mt-4 text-white text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 z-10">
            <h2 className="text-4xl font-bold text-white">
              Modern Web Development & Marketing
            </h2>
            <p className="text-white">
              Harness the power of Next.js for lightning-fast page loading,
              server-side rendering, and seamless user experiences. Stay ahead
              with modern web standards that ensure your business shines online.
            </p>
            <p className="text-white">
              Enhance your reach with Google Ads, driving targeted traffic to
              your website. Our expertise in digital marketing ensures your
              business gets the attention it deserves.
            </p>
          <Link href="/solutions">
            <Button className="bg-blue-500 hover:bg-blue-600 mt-4 text-white ">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
