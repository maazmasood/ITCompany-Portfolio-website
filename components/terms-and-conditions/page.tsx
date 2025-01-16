"use client";

import { NavBar } from '@/components/navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Scale, Globe, Shield, UserCheck, Zap, AlertTriangle, HelpCircle } from 'lucide-react'
import { AnimatedGradient } from '@/components/animated-gradient'
import { Footer } from '@/components/footer'

export default function TermsAndConditionsPage() {
  const sections = [
    { title: "Acceptance of Terms", icon: FileText },
    { title: "Use of Service", icon: Globe },
    { title: "User Responsibilities", icon: Shield },
    { title: "Intellectual Property", icon: Scale },
    { title: "User Accounts", icon: UserCheck },
    { title: "Service Modifications", icon: Zap },
    { title: "Limitation of Liability", icon: AlertTriangle },
    { title: "Dispute Resolution", icon: HelpCircle },
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
              <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
              <p className="text-xl mb-8">Please read these terms carefully before using our services. By using FutureAscend, you agree to be bound by these Terms and Conditions.</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Read Full Terms
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-24 bg-white px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Key Sections of Our Terms</h2>
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

        {/* Detailed Terms */}
        <section className="py-24 bg-gray-50 px-5 md:px-32">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Detailed Terms and Conditions</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-600 mb-4">
                  By accessing or using FutureAscend's services, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
                <p className="text-gray-600">
                  These Terms and Conditions apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content. By accessing or using any part of the Service, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the Service or use any of its features.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">2. Use of Service</h3>
                <p className="text-gray-600 mb-4">
                  Our services are provided "as is". FutureAscend makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-gray-600 mb-4">
                  Further, FutureAscend does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. You understand that you download from, or otherwise obtain content or services through, our services at your own discretion and risk.
                </p>
                <p className="text-gray-600">
                  FutureAscend reserves the right to monitor all Content uploaded or transmitted using the Service. We may remove any Content that violates these Terms or is otherwise objectionable in FutureAscend's sole discretion. You understand that by using the Service, you may be exposed to Content that is offensive, indecent, or objectionable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">3. User Responsibilities</h3>
                <p className="text-gray-600 mb-4">
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for all activities that occur under your account or password. You must immediately notify FutureAscend of any unauthorized use of your account or any other breach of security.
                </p>
                <p className="text-gray-600 mb-4">
                  You may not use the Service for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature.
                </p>
                <p className="text-gray-600">
                  You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">4. Intellectual Property</h3>
                <p className="text-gray-600 mb-4">
                  The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of FutureAscend and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FutureAscend.
                </p>
                <p className="text-gray-600 mb-4">
                  You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.
                </p>
                <p className="text-gray-600">
                  You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms. FutureAscend has the right but not the obligation to monitor and edit all Content provided by users.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">5. User Accounts</h3>
                <p className="text-gray-600 mb-4">
                  When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                </p>
                <p className="text-gray-600 mb-4">
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service.
                </p>
                <p className="text-gray-600">
                  You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">6. Service Modifications</h3>
                <p className="text-gray-600 mb-4">
                  FutureAscend reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that FutureAscend shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
                </p>
                <p className="text-gray-600 mb-4">
                  We may from time to time provide enhancements or improvements to the features/functionality of the Service, which may include patches, bug fixes, updates, upgrades and other modifications ("Updates"). Updates may modify or delete certain features and/or functionalities of the Service. You agree that we have no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the Service to you.
                </p>
                <p className="text-gray-600">
                  You further agree that all Updates will be (i) deemed to constitute an integral part of the Service, and (ii) subject to the terms and conditions of this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">7. Limitation of Liability</h3>
                <p className="text-gray-600 mb-4">
                  In no event shall FutureAscend, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                </p>
                <p className="text-gray-600">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">8. Dispute Resolution</h3>
                <p className="text-gray-600 mb-4">
                  These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
                <p className="text-gray-600 mb-4">
                  Any dispute arising out of or relating to these Terms, or the breach thereof, shall be settled by arbitration administered by the [Arbitration Association] under its Commercial Arbitration Rules, and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.
                </p>
                <p className="text-gray-600">
                  The place of arbitration shall be [City, Country]. The arbitration shall be governed by the laws of [Your Country]. The arbitrators will have no authority to award punitive or other damages not measured by the prevailing party's actual damages, except as may be required by statute. The arbitrator(s) shall not award consequential damages in any arbitration initiated under this section. Any award in an arbitration initiated under this section shall be limited to monetary damages and shall include no injunction or direction to any party other than the direction to pay a monetary amount.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">9. Changes to Terms</h3>
                <p className="text-gray-600 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="text-gray-600">
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>
              </div>
            </div>
          </div>
        </section>

      

      </main>
      <Footer />
    </div>
  )
}
