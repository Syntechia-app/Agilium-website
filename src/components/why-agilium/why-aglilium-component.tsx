import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function WhyAgiliumComponent() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A]">
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unlock the potential of{" "}
          <span className="text-[color:var(--brand-cyan)]">
            Digital Transformation
          </span>
        </h2>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            We bridge the gap between ambitious visions and practical solutions,
            tailoring innovation to each client’s unique needs. With expertise
            across industries and emerging technologies, we empower
            organizations to accelerate growth, enhance efficiency, and achieve
            lasting success in today’s dynamic business landscape.
          </p>
        </div>
        <div className="mb-6">
          <img
            src="/agilium-dev/images/digital.webp"
            alt="Digital Transformation"
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
