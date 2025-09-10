import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, SquareCheckBig } from "lucide-react";
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

const missions = [
  "Empower governments, enterprises, and communities with innovative digital solutions.",
  "Bridge the physical and digital worlds through transformative technology.",
  "Turn bold ideas into practical, measurable outcomes.",
  "Drive efficiency, connectivity, and sustainable growth.",
  "Deliver impact across Saudi Arabia and the wider region.",
];

const visions = [
  "Shape a smarter, more connected future for governments, enterprises, and societies.",
  "Be the driving force of transformative innovation in Saudi Arabia and the GCC.",
  "Bridge digital and physical spaces to create seamless human experiences.",
  "Turn bold ideas into impactful realities that inspire progress.",
  "Lead with agility, creativity, and responsibility toward a sustainable tomorrow.",
];

export function About() {
  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-[#b1c7e9] to-[#759cd8] overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 text-gray-900"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-700">Agilium</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            From Digital Platforms and Intelligent Systems to Future-Ready
            Strategies, we help organizations innovate, adapt, and lead in an
            ever-evolving digital world.
          </p>
        </motion.div>

        {/* Mission, Vision, Goals Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={cardContainerVariants}
        >
          {/* Card 1: Mission */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }} // Lift and scale on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-white/70 border-blue-300 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mission
                </h3>
                <ul className="text-gray-800 space-y-2 text-left">
                  {missions.map((mission, index) => (
                    <li key={index} className="flex gap-2">
                      <SquareCheckBig className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {mission}
                    </li>
                  ))}
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
            <Card className="h-full bg-white/70 border-blue-300 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vision
                </h3>
                <ul className="text-gray-800 space-y-2 text-left">
                  {visions.map((vision, index) => (
                    <li key={index} className="flex gap-2">
                      <SquareCheckBig className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {vision}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
