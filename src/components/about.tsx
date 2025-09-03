import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Trophy } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Animation variants for the container to orchestrate staggered animations
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animating in
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for the cards container
const cardContainerVariants = {
  hidden: { opacity: 1 }, // Parent doesn't need to fade, just orchestrate
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger for the cards
    },
  },
};

export function About() {
  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A] overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-[color:var(--brand-cyan)]">Agilium</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            From Digital Platforms and Intelligent Systems to Future-Ready
            Strategies, we help organizations innovate, adapt, and lead in an
            ever-evolving digital world.
          </p>
        </motion.div>

        {/* Mission, Vision, Goals Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={cardContainerVariants}
        >
          {/* Card 1: Mission */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }} // Lift and scale on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                  <Target className="w-12 h-12 text-[color:var(--brand-cyan)] mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <ul className="text-blue-200 space-y-2 text-left">
                  <li>• Future-ready solutions</li>
                  <li>• Advanced technology + human-centered design</li>
                  <li>• Precise execution</li>
                  <li>• Empower innovation & scalability</li>
                  <li>• Lead in a fast-changing digital world</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Vision */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                  <Eye className="w-12 h-12 text-[color:var(--brand-cyan)] mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <ul className="text-blue-200 space-y-2 text-left">
                  <li>• Driving force of transformative innovation</li>
                  <li>• Shaping a smarter, more connected future</li>
                  <li>• Turning bold ideas into impactful realities</li>
                  <li>• Bridging digital and physical spaces</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Goals */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Trophy className="w-12 h-12 text-[color:var(--brand-cyan)] mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Goals</h3>
                <ul className="text-blue-200 space-y-2 text-left">
                  <li>• Innovation – Pioneering solutions</li>
                  <li>• Quality – Excellence in every project</li>
                  <li>• Integrity – Transparency & honesty</li>
                  <li>• Collaboration – Strong partnerships</li>
                  <li>• Sustainability – Eco-friendly practices</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardContainerVariants}
        >
          {[
            {
              title: "Integrated Expertise",
              text: "Across digital, infrastructure, AI, and IoT domains",
            },
            {
              title: "Proven Track Record",
              text: "High-impact projects across industries",
            },
            {
              title: "Agile Approach",
              text: "Flexible and tailored to client goals",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 p-6 rounded-xl border border-blue-700/30 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/50"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-lg font-semibold text-[color:var(--brand-cyan)] mb-2">
                {feature.title}
              </h4>
              <p className="text-blue-200">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
