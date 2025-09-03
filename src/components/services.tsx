import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Shield, Network, Users, Building, Brain, Cpu, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Digital Solutions",
    subtitle: "Digital Transformation",
    description: "Complete digital transformation services to modernize your business operations.",
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
    description: "Transform your data into actionable insights with our comprehensive analytics platform.",
    features: [
      "Data Management & Governance",
      "Business Intelligence & Visualization",
      "AI & Predictive Analytics",
      "Real-Time Data Pipeline Engineering",
      "Enterprise Data Warehousing",
    ],
    benefits: ["Real-time insights", "Predictive capabilities", "Data-driven decisions", "Automated reporting"],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    subtitle: "Comprehensive Protection",
    description: "Protect your digital assets with enterprise-grade security solutions.",
    features: [
      "Cybersecurity Assessments & Threat Management",
      "Data Protection & Regulatory Compliance",
      "Identity & Access Management",
      "IT Risk & Vulnerability Management",
    ],
    benefits: ["Enhanced security posture", "Regulatory compliance", "Risk mitigation", "Business continuity"],
    color: "from-[color:var(--brand-red-accent)] to-[color:var(--brand-warm-red-2)]",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    subtitle: "Robust Connectivity",
    description: "Build and maintain reliable network infrastructure for your organization.",
    features: [
      "Structured Cabling & Networking",
      "Switches & Routers Management",
      "CCTV & Access Control Systems",
      "IP Telephony Solutions",
      "Security Management Software",
    ],
    benefits: ["Reliable connectivity", "Scalable infrastructure", "Enhanced security", "Improved communication"],
    color: "from-[color:var(--brand-deep-aqua)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Users,
    title: "Advisory & Transformation",
    subtitle: "Strategic Guidance",
    description: "Expert consulting to guide your digital transformation journey.",
    features: [
      "Digital Transformation Strategy",
      "IT Governance & Roadmaps",
      "Process Optimization & Change Management",
      "PMO/EPMO Establishment",
      "Innovation & Technology Advisory",
    ],
    benefits: ["Strategic alignment", "Optimized processes", "Change management", "Innovation acceleration"],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Building,
    title: "Banking & Financial Solutions",
    subtitle: "Financial Technology",
    description: "Specialized solutions for the banking and financial services industry.",
    features: [
      "Banking & Financial Software Development",
      "Banking Software Testing & Quality Assurance",
      "IT Rescue, Recovery & Business Continuity Services",
      "Regulatory Compliance for Financial Systems",
    ],
    benefits: ["Regulatory compliance", "Enhanced security", "Business continuity", "Improved efficiency"],
    color: "from-[color:var(--brand-red-accent)] to-[color:var(--brand-warm-red-1)]",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    subtitle: "Artificial Intelligence",
    description: "Harness the power of AI to transform your business operations.",
    features: [
      "Machine Learning & Predictive Analytics",
      "Computer Vision & Natural Language Processing",
      "Generative AI & Large Language Models",
      "MLOps & Responsible AI Framework",
      "Edge AI Deployment for real-time decision-making",
    ],
    benefits: ["Automated processes", "Predictive insights", "Enhanced decision-making", "Competitive advantage"],
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    subtitle: "Internet of Things",
    description: "Connect and optimize your physical assets with intelligent IoT solutions.",
    features: [
      "IoT Strategy & Architecture",
      "Hardware Design & Prototyping",
      "Connectivity",
      "Platform Integration",
      "Digital Twins & Edge AI Applications",
      "IoT Cybersecurity & Device Management",
    ],
    benefits: ["Real-time monitoring", "Predictive maintenance", "Operational efficiency", "Data-driven insights"],
    color: "from-[color:var(--brand-deep-aqua)] to-[color:var(--brand-cyan)]",
  },
]

export function Services() {
  return (
    <section className="py-20 px-4" style={{ backgroundImage: 'linear-gradient(180deg, #000000, #1a1a1a)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[color:var(--brand-cyan)]">Services</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#cfe8ee' }}>
            Comprehensive technology solutions designed to drive innovation and accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(26,26,26,0.6))',
                borderColor: 'rgba(20, 193, 250, 0.35)',
                borderWidth: 1
              }}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-[color:var(--brand-cyan)] transition-colors">
                  {service.title}
                </CardTitle>
                <p className="font-medium" style={{ color: 'var(--brand-cyan-bright)' }}>{service.subtitle}</p>
                <p style={{ color: '#cfe8ee' }}>{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Features:</h4>
                    <ul className="space-y-1" style={{ color: '#cfe8ee' }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1" style={{ color: '#cfe8ee' }}>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent"
                    style={{
                      borderColor: 'var(--brand-cyan-bright)',
                      color: 'var(--brand-cyan-bright)'
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
