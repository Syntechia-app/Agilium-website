// src/components/Services.tsx (or similar)
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Shield,
  Network,
  Users,
  Building,
  Brain,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Digital Solutions",
    subtitle: "Digital Transformation",
    description:
      "Complete digital transformation services to modernize your business operations.",
    features: [
      "Software Development",
      "Website & Web Application Development",
      "E-commerce Platforms & Marketplace Platforms",
      "Mobile Application",
      "DevOps & Continuous Integration",
    ],
    benefits: [
      "Increased Efficiency",
      "Competitive Advantage",
      "Data-Driven Decision Making",
      "Better Resource Management",
      "Scalability",
      "Improved Customer Experience",
      "Increased Revenue",
      "Increased Responsiveness",
    ],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    subtitle: "Intelligent Data Solutions",
    description:
      "Transform your data into actionable insights with our comprehensive analytics platform.",
    features: [
      "Data Management & Governance",
      "Business Intelligence & Visualization",
      "AI & Predictive Analytics",
      "Real-Time Data Pipeline Engineering",
      "Enterprise Data Warehousing",
    ],
    benefits: [
      "Real-time insights",
      "Predictive capabilities",
      "Data-driven decisions",
      "Automated reporting",
    ],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    subtitle: "Comprehensive Protection",
    description:
      "Protect your digital assets with enterprise-grade security solutions.",
    features: [
      "Cybersecurity Assessments & Threat Management",
      "Data Protection & Regulatory Compliance",
      "Identity & Access Management",
      "IT Risk & Vulnerability Management",
    ],
    benefits: [
      "Enhanced security posture",
      "Regulatory compliance",
      "Risk mitigation",
      "Business continuity",
    ],
    color: "from-red-500 to-orange-500", // Using Tailwind colors for simplicity
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    subtitle: "Robust Connectivity",
    description:
      "Build and maintain reliable network infrastructure for your organization.",
    features: [
      "Structured Cabling & Networking",
      "Switches & Routers Management",
      "CCTV & Access Control Systems",
      "IP Telephony Solutions",
      "Security Management Software",
    ],
    benefits: [
      "Reliable connectivity",
      "Scalable infrastructure",
      "Enhanced security",
      "Improved communication",
    ],
    color: "from-teal-500 to-cyan-500",
  },
  // ... (rest of the services array)
  {
    icon: Users,
    title: "Advisory & Transformation",
    subtitle: "Strategic Guidance",
    description:
      "Expert consulting to guide your digital transformation journey.",
    features: [
      "Digital Transformation Strategy",
      "IT Governance & Roadmaps",
      "Process Optimization & Change Management",
      "PMO/EPMO Establishment",
      "Innovation & Technology Advisory",
    ],
    benefits: [
      "Strategic alignment",
      "Optimized processes",
      "Change management",
      "Innovation acceleration",
    ],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Building,
    title: "Banking & Financial Solutions",
    subtitle: "Financial Technology",
    description:
      "Specialized solutions for the banking and financial services industry.",
    features: [
      "Banking & Financial Software Development",
      "Banking Software Testing & Quality Assurance",
      "IT Rescue, Recovery & Business Continuity Services",
      "Regulatory Compliance for Financial Systems",
    ],
    benefits: [
      "Regulatory compliance",
      "Enhanced security",
      "Business continuity",
      "Improved efficiency",
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    subtitle: "Artificial Intelligence",
    description:
      "Harness the power of AI to transform your business operations.",
    features: [
      "Machine Learning & Predictive Analytics",
      "Computer Vision & Natural Language Processing",
      "Generative AI & Large Language Models",
      "MLOps & Responsible AI Framework",
      "Edge AI Deployment for real-time decision-making",
    ],
    benefits: [
      "Automated processes",
      "Predictive insights",
      "Enhanced decision-making",
      "Competitive advantage",
    ],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    subtitle: "Internet of Things",
    description:
      "Connect and optimize your physical assets with intelligent IoT solutions.",
    features: [
      "IoT Strategy & Architecture",
      "Hardware Design & Prototyping",
      "Connectivity",
      "Platform Integration",
      "Digital Twins & Edge AI Applications",
      "IoT Cybersecurity & Device Management",
    ],
    benefits: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Operational efficiency",
      "Data-driven insights",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <motion.section
      className="py-20 px-4"
      style={{ background: "linear-gradient(180deg, #000000, #1a1a1a)" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[color:var(--brand-cyan)]">Services</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#cfe8ee" }}>
            Comprehensive technology solutions designed to drive innovation and
            accelerate your digital transformation
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants} // Reuse to stagger the cards themselves
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="bg-zinc-900/50 border border-cyan-500/20 backdrop-blur-sm transition-all duration-300 group h-full flex flex-col hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10">
                <CardHeader className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-[color:var(--brand-cyan)] transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="font-medium text-cyan-400">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  {/* Features and Benefits can be complex; for this example, we'll keep them static. 
                      A more advanced version could use an accordion. */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-1 text-gray-300">
                        {service.features.map(
                          (
                            feature,
                            idx // Show first 3 features for brevity
                          ) => (
                            <li key={idx} className="text-sm flex items-start">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1" style={{ color: "#cfe8ee" }}>
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-6 bg-transparent border-cyan-400 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
