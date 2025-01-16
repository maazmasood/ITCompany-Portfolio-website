import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import AnimatedInput from './AnimatedInput';
import AnimatedBackground from './AnimatedBackground';

import { CheckCircle2, ChevronRight, Loader2 } from 'lucide-react'

const EnhancedContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: '',
  });
  const [loading, setLoading] = useState(false); // Loading state
  const totalSteps = 3;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Thank you for filling the form, Our team will get in touch soon!',
        });
      } else {
        setMessage({
          type: 'error',
          text: 'We\'re sorry, Failed to submit the form. Please try again later',
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({
        type: 'error',
        text: 'An error occurred while submitting the form.',
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#28395c] px-5 py-24">
      <AnimatedBackground />
      <div className="container relative z-10">
        <div className="md:max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Let's discuss how our enterprise solutions can accelerate your digital transformation journey.
          </p>
          <div className="mt-8 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`flex  h-10 w-10 items-center justify-center rounded-full ${
                    step >= i ? "bg-[#60A5FA]" : "bg-gray-700"
                  }`}
                >
                  {step > i ? (
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  ) : (
                    <span className="flex items-center justify-center text-lg font-bold h-10 w-10 text-white rounded-full ">{i}</span>
                  )}
                </div>
                <div className="ml-4 text-base text-gray-300 sm:text-lg">
                  {i === 1 && "Let's start by getting to know who we're talking to."}
                  {i === 2 && "Do you currently run a business or own a company?"}
                  {i === 3 && "Share your thoughts on how you envision revolutionizing the industry."}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full"
          >
            <Card className=" bg-white/10">
              <CardContent className="p-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <AnimatedInput
                        label="*Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />

                      <br />
                      <AnimatedInput
                        label="*Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <AnimatedInput
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />

                      <br />
                      <AnimatedInput
                        label="*Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Textarea
                        placeholder="Tell us about your project briefly.."
                        className="h-32 text-white bg-transparent border-2 border-gray-400 focus:border-blue-500 transition-all duration-300"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  )}
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between">
                      {step > 1 && (
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            prevStep();
                          }}

                          variant="outline"
                        >
                          Previous
                        </Button>
                      )}
                      {step < totalSteps ? (
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            nextStep();
                          }}
                          className="ml-auto"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white">
                          {loading ? 'Submitting...' : 'Send Message'} {/* Display loading state */}
                        </Button>
                      )}
                    </div>
                    {message.text && (
                      <div
                        className={`mt-4 p-3 text-center rounded ${
                          message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}
                      >
                        {message.text}
                      </div>
                    )}
                    {loading && (
                      <div className="mt-4 text-center text-white">Loading...</div> // Optional loading indicator
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactForm;
