import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animation
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-ink)]/95 via-[#0B1B3A]/90 to-[color:var(--brand-ink)]/95" />
      <div className="absolute inset-0 opacity-10 -z-10" />

      {/* Floating Elements with new animation */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full blur-2xl animate-float"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-blue-glow) 30%, transparent)",
          animationDuration: "15s",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 rounded-full blur-2xl animate-float"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-cyan-bright) 30%, transparent)",
          animationDuration: "12s",
          animationDelay: "2s",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-xl animate-float"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-electric-blue) 25%, transparent)",
          animationDuration: "18s",
          animationDelay: "1s",
        }}
      />

      {/* Animate the main content container */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-heading */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          variants={itemVariants}
        >
          <Sparkles
            className="w-6 h-6 animate-shimmer"
            style={{ color: "var(--brand-cyan-bright)" }}
          />
          <span
            className="font-medium tracking-wider uppercase text-sm"
            style={{ color: "var(--brand-cyan-bright)" }}
          >
            Where Innovation Meets Success
          </span>
          <Sparkles
            className="w-6 h-6 animate-shimmer"
            style={{
              color: "var(--brand-cyan-bright)",
              animationDelay: "0.5s",
            }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffffff, #e6faff, var(--brand-cyan-bright))",
              }}
            >
              AGILIUM
            </span>
            <br />
            <span
              className="text-4xl md:text-5xl font-light"
              style={{ color: "#e6f2f5" }}
            >
              TECHNOLOGIES
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ color: "#e6e6e6" }}
          variants={itemVariants}
        >
          A multidisciplinary innovation company that transforms ambitious
          visions into measurable impact. We combine cutting-edge technology,
          human-centered design, and strategic expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            size="lg"
            className="bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-cyan)] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[color:var(--brand-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--brand-ink)]"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[color:var(--brand-cyan)] text-blue-100 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent focus-visible:ring-2 focus-visible:ring-[color:var(--brand-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--brand-ink)]"
            style={{
              color: "#ffffff",
            }}
          >
            Learn More About Us
          </Button>
        </motion.div>

        {/* Stats Section with Count-Up */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              <CountUp
                end={500}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="+"
              />
            </div>
            <div style={{ color: "#cfe8ee" }}>Projects Delivered</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              <CountUp
                end={50}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="+"
              />
            </div>
            <div style={{ color: "#cfe8ee" }}>Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              <CountUp
                end={99}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="%"
              />
            </div>
            <div style={{ color: "#cfe8ee" }}>Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
