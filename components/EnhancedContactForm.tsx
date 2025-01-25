"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2, Send, Sparkles, CheckCircle } from "lucide-react";

const NewContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      budget: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you for your interest. Our team will review your request and get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", company: "", budget: "", note: "" });
      } else {
        setMessage({
          type: "error",
          text: "We apologize, but there was an error submitting your request. Please try again later.",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again or contact our support team.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1E] px-4 py-12 sm:px-6 lg:px-8">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl" />
        </div>
      </div>

      <div className="relative w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side content - visible only on md and larger screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white space-y-6 "
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm text-blue-200">Innovative Solutions</span>
            </div>
            <h2 className="text-4xl font-bold sm:text-5xl mb-4 tracking-tight">
              Transform Your Business with Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-xl">
              We specialize in delivering cutting-edge solutions tailored to your unique business needs. Let's
              collaborate to drive your success.
            </p>
            <ul className="space-y-4 hidden md:block">
              {[
                "Custom  Development",
                "AI Solutions & Automations",
                "Product Analytics & Designing",
                "Leverage Power of Blockchain",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Get Your Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Name*
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone*
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-white">
                      Estimated Budget*
                    </Label>
                    <Select name="budget" onValueChange={handleSelectChange} required>
                      <SelectTrigger className="mt-1.5 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k+">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="note" className="text-white">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="note"
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                      placeholder="Tell us more about your project or requirements..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>

                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-6 p-4 rounded-md backdrop-blur-sm ${message.type === "success" ? "bg-green-500/10 text-green-200 border border-green-500/20" : "bg-red-500/10 text-red-200 border border-red-500/20"}`}
                  >
                    {message.text}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewContactForm;
