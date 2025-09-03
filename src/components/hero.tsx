import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-dark-bg)" }}
      />
      <div className="absolute inset-0 opacity-10" />

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-blue-glow) 30%, transparent)",
        }}
      />
      <div
        className="absolute bottom-32 right-16 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-cyan-bright) 30%, transparent)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-xl animate-pulse delay-500"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-electric-blue) 25%, transparent)",
        }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles
              className="w-6 h-6"
              style={{ color: "var(--brand-cyan-bright)" }}
            />
            <span
              className="font-medium tracking-wider uppercase text-sm"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              Where Innovation Meets Success
            </span>
            <Sparkles
              className="w-6 h-6"
              style={{ color: "var(--brand-cyan-bright)" }}
            />
          </div>

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
        </div>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ color: "#e6e6e6" }}
        >
          A multidisciplinary innovation company that transforms ambitious
          visions into measurable impact. We combine cutting-edge technology,
          human-centered design, and strategic expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 focus-visible:ring-2"
            style={{
              backgroundImage: "var(--gradient-brand)",
              boxShadow:
                "0 20px 40px -10px color-mix(in oklab, var(--brand-blue-glow) 30%, transparent)",
            }}
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent focus-visible:ring-2"
            style={{
              borderColor: "var(--brand-red-accent)",
              color: "#ffffff",
              boxShadow: "inset 0 0 0 1px var(--brand-red-accent)",
            }}
          >
            Learn More About Us
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              500+
            </div>
            <div style={{ color: "#cfe8ee" }}>Projects Delivered</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              50+
            </div>
            <div style={{ color: "#cfe8ee" }}>Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--brand-cyan-bright)" }}
            >
              99%
            </div>
            <div style={{ color: "#cfe8ee" }}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
