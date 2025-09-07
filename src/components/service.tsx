import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";

// Animation variants for the container to orchestrate staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Animation variants for individual elements fading in and up
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // A very smooth ease-out-quint curve
    },
  },
};
interface Props {
  service: {
    slug: string;
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits: string[];
    color: string;
  };
}

export default function Service({ service }: Props) {
  return (
    <main>
      <div className="pt-16">
        <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-ink)]/95 via-[#0B1B3A]/90 to-[color:var(--brand-ink)]/95" />

          {/* Abstract "Converging Lines" background effect */}
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(0, 170, 255, 0.2) 0%, transparent 40%), repeating-conic-gradient(from 0deg, transparent 0% 1.95deg, var(--brand-electric-blue) 2% 2.05deg)",
              maskImage:
                "radial-gradient(circle at center, white 50%, transparent 80%)",
            }}
          />

          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--brand-cyan-bright) 30%, transparent)",
              animationDuration: "20s",
            }}
          />

          {/* Foreground Content */}
          <motion.div
            className="relative z-10 text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Animate on page load
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
              variants={itemVariants}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 rounded-2xl mx-auto`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {service.title}
                </h1>
              </div>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </section>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 border-blue-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((service, index) => (
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
                    {service.benefits.map((benefit, index) => (
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
