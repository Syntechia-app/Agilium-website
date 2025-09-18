import { motion, type Variants } from "framer-motion";

// --- HERO COMPONENT (can be in the same file or imported) ---

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const heroItemVariants: Variants = {
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

export default function AboutPageHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mt-16">
        <img
          src="/images/The Architects of Innovation.jpg"
          alt="Business Technology"
          className="w-full h-auto absolute inset-0"
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
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
          variants={heroItemVariants}
        >
          The Architects of{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1a1a1a, var(--brand-blue-glow))",
            }}
          >
            Innovation
          </span>
        </motion.h1>
      </motion.div>
    </section>
  );
}
