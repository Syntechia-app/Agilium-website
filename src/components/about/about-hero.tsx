import { motion, type Variants } from "framer-motion";

// --- HERO COMPONENT (can be in the same file or imported) ---

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

export default function AboutPageHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mt-16">
        <img
          src="/images/The Architects of Innovation.jpg"
          alt="Business Technology"
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf2fa] via-[#b1c7e9] to-[#edf2fa] opacity-60" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-cyan-bright) 30%, transparent)",
          animationDuration: "20s",
        }}
      />
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto text-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          variants={itemVariants}
        >
          The Architects of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] via-[#0f3057] to-blue-900">
            Innovation
          </span>
        </motion.h1>
      </motion.div>
    </section>
  );
}
