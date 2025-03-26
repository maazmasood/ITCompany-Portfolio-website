import React from "react";
import Link from "next/link";
import Image from "next/image"

type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "https://facebook.com", icon: "fab fa-facebook-f" },
  { name: "Twitter", href: "https://twitter.com", icon: "fab fa-twitter" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "fab fa-linkedin-in" },
  { name: "Instagram", href: "https://instagram.com", icon: "fab fa-instagram" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-400">
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {/* Section 1: Logo and Description */}
          <div>
          <Link href="/" className="flex items-center space-x-2 py-8">
          <Image
           src="/FutureAscend-logo.svg"
           alt="Logo"
           width={250} // Adjust the size as needed
           height={40} // Adjust the size as needed
         />
          </Link>
            <p className="text-sm mb-4">
              At FutureAscend, we propel businesses into the future with innovative solutions and a bold vision. Our
              expertise spans multiple sectors including digital marketing, web development, personal branding, and AI
              integrations.
            </p>
            <Link href="/about" className="text-[#60A5FA] hover:text-[#60A5FA] transition-colors">
              Learn More
            </Link>
          </div>



          {/* Section 3: Our Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Our Services</h3>
            <ul className="space-y-2">
              {["Web Development", "Digital Marketing", "AI Solutions", "E-commerce Optimization", "Brand Strategy", "Automation"].map(
                (service) => (
                  <li key={service}>
                  <Link
                    href={`/services`}
                    className="hover:text-white transition-colors"
                  >
                      {service}
                      </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[ "Services", "Solutions", "Case Studies", "About","Countries" ,  "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Section 4: Industries We Serve */}


          {/* Section 5: Social Media Links */}

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} FutureAscend. All Rights Reserved.</p>
          <div className="mt-4 text-sm text-gray-500">
            <p className="mt-2">
              <Link href="/terms-and-conditions" className="text-[#60A5FA] hover:text-blue-300 transition-colors">
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link href="/privacy-policy" className="text-[#60A5FA] hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
