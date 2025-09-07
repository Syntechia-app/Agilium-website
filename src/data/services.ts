import {
  Brain,
  Building,
  Code,
  Cpu,
  Database,
  Network,
  Shield,
  Users,
} from "lucide-react";

export const services = [
  {
    slug: "digital-solutions",
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
    slug: "data-analytics",
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
    slug: "security-compliance",
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
    slug: "network-infrastructure",
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
  {
    slug: "advisory-transformation",
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
    slug: "banking-financial-solutions",
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
    slug: "ai-solutions",
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
    slug: "iot-solutions",
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
