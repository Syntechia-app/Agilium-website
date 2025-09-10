import { motion, type Variants } from "framer-motion";

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
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf2fa]/95 via-[#b1c7e9]/90 to-[#edf2fa]/95" />
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
            "color-mix(in oklab, var(--brand-blue-glow) 30%, transparent)",
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
        className="relative z-10 text-center max-w-6xl mx-auto mt-20 text-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #1a1a1a, #4a4a4a, var(--brand-blue-glow))",
              }}
            >
              AGILIUM TECHNOLOGIES
            </span>
            <br />
            <span className="text-4xl md:text-5xl font-light text-gray-800">
              Where Innovation Meets Success
            </span>
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
