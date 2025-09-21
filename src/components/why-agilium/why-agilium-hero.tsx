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

export function WhyAgiliumHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <img
          src="/images/More Than a Vendor..jpeg"
          alt="Business Technology"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf2fa] via-[#b1c7e9] to-[#edf2fa] opacity-60" />

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
        className="relative z-10 text-center max-w-5xl mx-auto text-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate on page load
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          variants={itemVariants}
        >
          More Than a Vendor.
          <br />
          Your Innovation{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] via-[#0f3057] to-blue-900">
            Partner
          </span>
          .
        </motion.h1>
      </motion.div>
    </section>
  );
}
