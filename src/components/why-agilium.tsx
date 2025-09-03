import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Target, Users, Award, Zap, Handshake, Leaf, CheckCircle, Star } from "lucide-react"

const reasons = [
  {
    icon: Rocket,
    title: "Future-Ready Expertise",
    description: "We design and deliver solutions that anticipate tomorrow's challenges.",
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Target,
    title: "End-to-End Digital Transformation",
    description: "From strategy to execution, we cover the full spectrum: software, AI, IoT, data, and platforms.",
    color: "from-indigo-500 to-[color:var(--brand-blue)]",
  },
  {
    icon: Users,
    title: "Human-Centered Innovation",
    description: "Our approach blends advanced technology with user-focused design.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Trusted by government, enterprise, and private sector clients across the region.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Agility & Precision",
    description: "Fast, adaptable, and reliable execution that meets complex demands.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Handshake,
    title: "Collaborative Partnership",
    description: "We don't just deliver solutions; we work hand-in-hand with our clients for long-term success.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Leaf,
    title: "Sustainability & Impact",
    description: "Driving innovation that balances growth with responsibility.",
    color: "from-teal-500 to-green-500",
  },
]

const differentiators = [
  "End-to-End Capability",
  "Cross-Industry Experience",
  "Proven Track Record",
  "Innovation at Core",
  "Trusted Partner",
  "Customer-Centricity",
  "Accuracy & Quality",
  "Innovation-Driven Growth",
  "Sustainability",
]

export function WhyAgilium() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[color:var(--brand-cyan)]">Agilium</span>?
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover what sets us apart and makes us the ideal partner for your digital transformation journey
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 border-blue-700/50 backdrop-blur-sm hover:border-[color:var(--brand-cyan)]/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[color:var(--brand-cyan)] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiators */}
        <div className="bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-2xl p-8 border border-blue-700/30 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-[color:var(--brand-cyan)]">Differentiators</span>
            </h3>
            <p className="text-blue-200">What makes Agilium your trusted technology partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-blue-800/20 rounded-lg border border-blue-700/20"
              >
                <CheckCircle className="w-6 h-6 text-[color:var(--brand-cyan)] flex-shrink-0" />
                <span className="text-white font-medium">{diff}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[color:var(--brand-cyan)]/20 to-[color:var(--brand-blue)]/20 px-6 py-3 rounded-full border border-[color:var(--brand-cyan)]/30 mb-6">
            <Star className="w-5 h-5 text-[color:var(--brand-cyan)]" />
            <span className="text-[color:var(--brand-cyan)] font-semibold">Our Commitment</span>
            <Star className="w-5 h-5 text-[color:var(--brand-cyan)]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Innovation-Driven Growth & Sustainability</h3>
          <p className="text-blue-200 max-w-3xl mx-auto">
            We are committed to delivering solutions that not only drive business growth but also contribute to a
            sustainable future. Our approach ensures that every project creates lasting value for our clients and the
            communities they serve.
          </p>
        </div>
      </div>
    </section>
  )
}
