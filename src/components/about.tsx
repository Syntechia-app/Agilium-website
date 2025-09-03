import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Trophy } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-[color:var(--brand-cyan)]">Agilium</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            From Digital Platforms and Intelligent Systems to Future-Ready
            Strategies, we help organizations innovate, adapt, and lead in an
            ever-evolving digital world.
          </p>
        </div>

        {/* Mission, Vision, Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-[color:var(--brand-cyan)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <ul className="text-blue-200 space-y-2 text-left">
                <li>• Future-ready solutions</li>
                <li>• Advanced technology + human-centered design</li>
                <li>• Precise execution</li>
                <li>• Empower innovation & scalability</li>
                <li>• Lead in a fast-changing digital world</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Eye className="w-12 h-12 text-[color:var(--brand-cyan)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <ul className="text-blue-200 space-y-2 text-left">
                <li>• Driving force of transformative innovation</li>
                <li>• Shaping a smarter, more connected future</li>
                <li>• Turning bold ideas into impactful realities</li>
                <li>• Bridging digital and physical spaces</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Trophy className="w-12 h-12 text-[color:var(--brand-cyan)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Goals</h3>
              <ul className="text-blue-200 space-y-2 text-left">
                <li>• Innovation – Pioneering solutions</li>
                <li>• Quality – Excellence in every project</li>
                <li>• Integrity – Transparency & honesty</li>
                <li>• Collaboration – Strong partnerships</li>
                <li>• Sustainability – Eco-friendly practices</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 p-6 rounded-xl border border-blue-700/30 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-[color:var(--brand-cyan)] mb-2">
              Integrated Expertise
            </h4>
            <p className="text-blue-200">
              Across digital, infrastructure, AI, and IoT domains
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 p-6 rounded-xl border border-blue-700/30 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-[color:var(--brand-cyan)] mb-2">
              Proven Track Record
            </h4>
            <p className="text-blue-200">
              High-impact projects across industries
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 p-6 rounded-xl border border-blue-700/30 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-[color:var(--brand-cyan)] mb-2">
              Agile Approach
            </h4>
            <p className="text-blue-200">
              Flexible and tailored to client goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
