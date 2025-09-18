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
    <section className="py-20 px-4 bg-gradient-to-b from-[#edf2fa] to-[#b1c7e9] overflow-hidden">
      <motion.div
        className="text-center mb-16 text-gray-900"
        variants={itemVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Unlock the potential of{" "}
          <span className="text-blue-700">Digital Transformation</span>
        </h2>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto">
              We bridge the gap between ambitious visions and practical
              solutions, tailoring innovation to each client’s unique needs.
              With expertise across industries and emerging technologies, we
              empower organizations to accelerate growth, enhance efficiency,
              and achieve lasting success in today’s dynamic business landscape.
            </p>
          </div>
          <div className="mb-6">
            <img
              src="/images/digital.webp"
              alt="Digital Transformation"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
