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
      "Deliver innovative digital solutions designed to transform the way organizations operate and grow. From custom software development and cloud-based platforms to enterprise automation and data-driven systems, we empower businesses to streamline processes, enhance productivity, and accelerate digital transformation. Our agile approach ensures every solution is tailored to meet unique business needs, driving measurable impact and long-term success.",
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
      "Harness the power of data to drive smarter decisions and strategic growth. Our Data & Analytics solutions transform raw information into actionable insights through advanced data integration, business intelligence, and predictive analytics. By enabling real-time visibility and performance tracking, we help organizations uncover opportunities, optimize operations, and achieve measurable outcomes with confidence.",
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
    slug: "banking-financial-solutions",
    icon: Building,
    title: "Banking & Financial Solutions",
    subtitle: "Financial Technology",
    description:
      "we empower banks and financial institutions with innovative digital solutions that enhance efficiency, strengthen security, and elevate customer experience. From core banking modernization and digital payment systems to AI-driven risk management and regulatory compliance, we deliver tailored solutions that align with industry demands. Our expertise ensures seamless integration of cutting-edge technologies, enabling financial organizations to stay competitive, agile, and future-ready.",
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
    slug: "security-compliance",
    icon: Shield,
    title: "Security & Compliance",
    subtitle: "Comprehensive Protection",
    description:
      "Prioritize safeguarding your digital assets and ensuring full regulatory compliance. Our Security & Compliance solutions provide robust protection through advanced cybersecurity measures, risk assessments, and governance frameworks. We help organizations build secure, resilient systems that meet industry standards, protect sensitive data, and maintain trust-enabling them to innovate with confidence.",
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
    slug: "advisory-transformation",
    icon: Users,
    title: "Advisory & Transformation",
    subtitle: "Strategic Guidance",
    description:
      "Help organizations reimagine their business models and embrace innovation with confidence. We partner with clients to assess current capabilities, define strategic goals, and design tailored roadmaps that drive measurable results. By integrating cutting-edge technologies with proven change management practices, we ensure smooth transformations that enhance efficiency, resilience, and long-term growth",
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
    slug: "network-infrastructure",
    icon: Network,
    title: "Network Infrastructure",
    subtitle: "Robust Connectivity",
    description:
      "Design and implement robust network infrastructure that serves as the backbone of our clients’ digital ecosystems. Our solutions ensure secure, scalable, and high-performance connectivity across all business operations. From structured cabling and wireless networks to cloud connectivity and advanced security measures, we deliver end-to-end infrastructure that supports agility, resilience, and future growth.",
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
    slug: "ai-solutions",
    icon: Brain,
    title: "AI Solutions",
    subtitle: "Artificial Intelligence",
    description:
      "Harness the power of Artificial Intelligence to help organizations work smarter and faster. Our AI solutions range from predictive analytics and intelligent automation to natural language processing and computer vision, enabling businesses to uncover insights, streamline operations, and deliver personalized customer experiences. By integrating AI into core processes, we empower clients to make data-driven decisions, reduce costs, and stay ahead in today’s competitive digital landscape.",
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
      "Empower businesses to connect, monitor, and manage devices seamlessly across their operations. By integrating smart sensors, real-time data analytics, and secure cloud platforms, we help organizations optimize efficiency, reduce costs, and unlock new opportunities for innovation. From smart infrastructure and industrial automation to connected customer experiences, our tailored IoT solutions drive smarter decision-making and sustainable growth.",
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
