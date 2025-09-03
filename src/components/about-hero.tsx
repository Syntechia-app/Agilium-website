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
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-ink)]/95 via-[#0B1B3A]/90 to-[color:var(--brand-ink)]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(#2d5b7a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--brand-cyan-bright) 30%, transparent)",
          animationDuration: "20s",
        }}
      />
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          variants={heroItemVariants}
        >
          The Architects of{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #e6faff, var(--brand-cyan-bright))",
            }}
          >
            Innovation
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-blue-200 leading-relaxed"
          variants={heroItemVariants}
        >
          We are a collective of thinkers, builders, and strategists dedicated
          to turning ambitious ideas into tangible realities and measurable
          impact.
        </motion.p>
      </motion.div>
    </section>
  );
}
