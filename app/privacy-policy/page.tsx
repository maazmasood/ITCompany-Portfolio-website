"use client";

import { NavBar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, Lock, Eye, Database, Globe, Shield, Bell, UserPlus, Settings } from 'lucide-react'
import { AnimatedGradient } from '@/components/animated-gradient'
import { Footer } from '@/components/footer'

export default function PrivacyPolicyPage() {
  const sections = [
    { title: "Information Collection", icon: Database },
    { title: "Use of Information", icon: Eye },
    { title: "Data Protection", icon: Shield },
    { title: "International Transfer", icon: Globe },
    { title: "User Rights", icon: UserPlus },
    { title: "Data Retention", icon: Settings },
    { title: "Updates to Policy", icon: Bell },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 relative text-white py-24 px-5 md:px-32">
          <AnimatedGradient />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl mb-8">We are committed to protecting your privacy and personal data. This policy outlines how we collect, use, and safeguard your information.</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Read Full Policy
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Policy Overview */}
        <section className="py-24 bg-white px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Key Aspects of Our Privacy Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <section.icon className="h-12 w-12 text-[#60A5FA] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-24 bg-gray-50 px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Detailed Privacy Policy</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">1. Information Collection</h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Your name, email address, phone number, and postal address</li>
                  <li>Username and password</li>
                  <li>Payment information</li>
                  <li>Company name and job title</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We also collect information automatically when you use our services. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Log information (e.g., access times, pages viewed, IP address)</li>
                  <li>Device information (e.g., hardware model, operating system version)</li>
                  <li>Usage data (e.g., features used, interactions with our service)</li>
                  <li>Location information (with your consent)</li>
                </ul>
                <p className="text-gray-600">
                  We may also obtain information from third-party sources and combine that with information we collect through our services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">2. Use of Information</h3>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Facilitate and improve your user experience</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, offers, promotions, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize and improve the services and provide content or features that match user profiles or interests</li>
                </ul>
                <p className="text-gray-600">
                  We may also use your information for any other purpose disclosed to you at the time we collect or receive the information, or otherwise with your consent.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">3. Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  We take the security of your personal information seriously and use appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction or damage. Some of the safeguards we use are:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Continuous monitoring for potential security threats</li>
                  <li>Employee training on data protection and security best practices</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
                <p className="text-gray-600">
                  In the event of a data breach that affects your personal information, we will notify you and the relevant authorities as required by applicable law.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">4. International Transfer</h3>
                <p className="text-gray-600 mb-4">
                  Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                </p>
                <p className="text-gray-600 mb-4">
                  If you are located outside [Your Country] and choose to provide information to us, please note that we transfer the data, including personal data, to [Your Country] and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
                <p className="text-gray-600 mb-4">
                  FutureAscend will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your personal data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                </p>
                <p className="text-gray-600">
                  For transfers to countries without an adequacy decision by the European Commission, we have put in place adequate measures, such as standard contractual clauses adopted by the European Commission to protect your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">5. User Rights</h3>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information. These may include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request the correction of inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to withdraw consent at any time, where processing is based on your consent</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  If you wish to exercise any of these rights, please contact us using the information provided at the end of this policy. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights).
                </p>
                <p className="text-gray-600">
                  Please note that some of these rights may be limited where we have compelling legitimate grounds or legal obligations to continue to process the data.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">6. Data Retention</h3>
                <p className="text-gray-600 mb-4">
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
                <p className="text-gray-600 mb-4">
                  We will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer time periods.
                </p>
                <p className="text-gray-600">
                  When we no longer require the personal information we have collected about you, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">7. Updates to This Privacy Policy</h3>
                <p className="text-gray-600 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
                </p>
                <p className="text-gray-600 mb-4">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                <p className="text-gray-600">
                  If we make material changes to this policy, we will notify you here, by email, or through a notice on our home page prior to the change becoming effective.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">8. Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>By email: maazmaasood@futureascend.com</li>
                  <li>By visiting this page on our website: www.futureascend.com/contact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  )
}
