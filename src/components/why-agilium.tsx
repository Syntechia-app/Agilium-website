import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Target,
  Users,
  Award,
  Zap,
  Handshake,
  Leaf,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Future-Ready Expertise",
    description:
      "We design and deliver solutions that anticipate tomorrow's challenges.",
    color: "from-[color:var(--brand-blue)] to-[color:var(--brand-cyan)]",
  },
  {
    icon: Target,
    title: "End-to-End Digital Transformation",
    description:
      "From strategy to execution, we cover the full spectrum: software, AI, IoT, data, and platforms.",
    color: "from-indigo-500 to-[color:var(--brand-blue)]",
  },
  {
    icon: Users,
    title: "Human-Centered Innovation",
    description:
      "Our approach blends advanced technology with user-focused design.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Trusted by government, enterprise, and private sector clients across the region.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Agility & Precision",
    description:
      "Fast, adaptable, and reliable execution that meets complex demands.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Handshake,
    title: "Collaborative Partnership",
    description:
      "We don't just deliver solutions; we work hand-in-hand with our clients for long-term success.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Leaf,
    title: "Sustainability & Impact",
    description: "Driving innovation that balances growth with responsibility.",
    color: "from-teal-500 to-green-500",
  },
];

export function WhyAgilium() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            <strong>
              Unlock the potential of digital transformation with Agilium.{" "}
            </strong>{" "}
            We bridge the gap between ambitious visions and practical solutions,
            tailoring innovation to each client’s unique needs. With expertise
            across industries and emerging technologies, we empower
            organizations to accelerate growth, enhance efficiency, and achieve
            lasting success in today’s dynamic business landscape.
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
                <p className="text-blue-200 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
