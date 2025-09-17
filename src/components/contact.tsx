import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<null | {
    type: "success" | "error";
    text: string;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setStatusMessage(null);
    try {
      const res = await fetch("https://agiliumtech.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Submission failed");
      setStatusMessage({
        type: "success",
        text: "Thanks! We received your message and will respond within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-[#b1c7e9] to-[#759cd8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 text-gray-900">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-700">Touch</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/70 border-blue-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-800 text-sm font-medium mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-blue-100 border-blue-300 text-gray-800 placeholder:text-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-blue-100 border-blue-300 text-gray-800 placeholder:text-gray-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-sm font-medium mb-2 block">
                    Company
                  </label>
                  <Input
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-blue-100 border-blue-300 text-gray-800 placeholder:text-gray-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="text-gray-800 text-sm font-medium mb-2 block">
                    Service Interest
                  </label>
                  <Select
                    onValueChange={(value) => handleChange("service", value)}
                  >
                    <SelectTrigger className="bg-blue-100 border-blue-300 text-gray-800">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-blue-300 text-gray-800">
                      <SelectItem value="digital-solutions">
                        Digital Solutions
                      </SelectItem>
                      <SelectItem value="data-analytics">
                        Data & Analytics
                      </SelectItem>
                      <SelectItem value="security-compliance">
                        Security & Compliance
                      </SelectItem>
                      <SelectItem value="network-infrastructure">
                        Network Infrastructure
                      </SelectItem>
                      <SelectItem value="advisory-transformation">
                        Advisory & Transformation
                      </SelectItem>
                      <SelectItem value="banking-financial">
                        Banking & Financial Solutions
                      </SelectItem>
                      <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                      <SelectItem value="iot-solutions">
                        IoT Solutions
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-gray-800 text-sm font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    autoComplete="off"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-blue-100 border-blue-300 text-gray-800 placeholder:text-gray-500 min-h-[120px]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <label>Middle Name</label>
                  <Input
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={() => {}}
                    value=""
                  />
                </div>

                {/* Status */}
                <div role="status" aria-live="polite" className="text-sm">
                  {statusMessage?.type === "success" && (
                    <p className="text-green-600">{statusMessage.text}</p>
                  )}
                  {statusMessage?.type === "error" && (
                    <p className="text-red-600">{statusMessage.text}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/70 border-blue-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">Email Us</h3>
                    <p className="text-gray-800">info@agiliumtech.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-blue-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">Call Us</h3>
                    <p className="text-gray-800">+966-530735006</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-blue-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">Visit Us</h3>
                    <p className="text-gray-800">
                      3665 Yanbu, 7824 Dhahrat Laban Dist. 13784
                      <br />
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white/70 border-blue-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-gray-900 font-semibold mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-800">
                  <div className="flex justify-between">
                    <span>Saturday - Thursday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
