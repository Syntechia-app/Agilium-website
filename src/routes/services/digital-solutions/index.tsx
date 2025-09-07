import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, CheckCircle } from "lucide-react";
export const Route = createFileRoute("/services/digital-solutions/")({
  head: () => ({
    meta: [
      {
        title: "Digital Solutions - Agilium Technologies",
      },
      {
        name: "description",
        content:
          "Transform your business with our comprehensive digital solutions including software development, web applications, e-commerce platforms, mobile apps, and DevOps services.",
      },
      {
        name: "keywords",
        content:
          "digital solutions, software development, web applications, e-commerce, mobile apps, DevOps",
      },
    ],
  }),
  component: DigitalSolutionsPage,
});

export default function DigitalSolutionsPage() {
  const benefits = [
    "Increased Efficiency",
    "Competitive Advantage",
    "Data-Driven Decision Making",
    "Better Resource Management",
    "Scalability",
    "Improved Customer Experience",
    "Increased Revenue",
    "Increased Responsiveness",
  ];

  const services = [
    "Software Development",
    "Website & Web Application Development",
    "E-commerce Platforms & Marketplace Platforms",
    "Mobile Application",
    "DevOps & Continuous Integration",
  ];

  return (
    <main className="min-h-screen ">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital <span className="text-cyan-400">Solutions</span>
              </h1>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Transform your business with comprehensive digital
                transformation services that modernize operations and drive
                growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 border-blue-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-blue-200"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 border-blue-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-blue-200"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  Get Started with Digital Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
