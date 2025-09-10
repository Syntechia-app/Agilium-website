import { motion, type Variants } from "framer-motion";

// Animation variants for the container to orchestrate staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Animation variants for individual elements fading in and up
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeIn", // A more elegant ease-out curve
    },
  },
};

export function ServicesPageHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background: Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b1c7e9]/95 via-[#759cd8]/90 to-[#b1c7e9]/95" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-cyan-bright) 30%, transparent)",
          animationDuration: "20s",
        }}
      />
      {/* Background: Animated Network/Plexus Effect */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="services-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="var(--brand-cyan-bright)" />
              <path
                d="M 10 10 L 30 30"
                stroke="var(--brand-electric-blue)"
                strokeWidth="0.5"
              />
              <path
                d="M 10 30 L 30 10"
                stroke="var(--brand-electric-blue)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)">
            <animate
              attributeName="x"
              from="0"
              to="40"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              from="0"
              to="40"
              dur="24s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto text-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate on page load
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          variants={itemVariants}
        >
          Engineering Your{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1a1a1a, var(--brand-blue-glow))",
            }}
          >
            Digital Future
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          From strategy to execution, we deliver a comprehensive suite of
          technology services designed to solve complex challenges, drive
          innovation, and accelerate your growth.
        </motion.p>
      </motion.div>
    </section>
  );
}
