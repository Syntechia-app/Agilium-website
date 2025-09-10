import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Layers,
  Award,
  Zap,
  Gem,
  Flag,
  SquareCheckBig,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Animation variants for the container to orchestrate staggered animations
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each main element animating in
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
const cardContainerVariants: Variants = {
  hidden: { opacity: 1 }, // Parent doesn't need to fade, just orchestrate
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger for the cards
    },
  },
};

/**
 * Interface for the props of the FeatureCard component.
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * A reusable card component for highlighting key features.
 */
const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    className="bg-blue-900/40 p-6 rounded-lg border border-blue-700/50 text-center"
  >
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-blue-900/80 rounded-full">
        {icon &&
          typeof icon === "object" &&
          "type" in icon &&
          (icon as React.ReactElement)}
      </div>
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-blue-200">{description}</p>
  </motion.div>
);

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
/**
 * The main "About" section component, detailing Agilium's purpose, mission, vision, values, and goals.
 */
export const AboutComponent: FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-[color:var(--brand-ink)] to-[#0B1B3A] overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate once when 10% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        {/* Section 1: About Agilium */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-[color:var(--brand-cyan)]">Agilium</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed mb-4">
            AGILIUM is a multidisciplinary innovation company that transforms
            ambitious visions into measurable impact. We combine cutting-edge
            technology, human-centered design, and strategic expertise to
            deliver solutions that scale and endure.
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            From Digital Platforms and Intelligent Systems to Future-Ready
            Strategies, we help organizations innovate, adapt, and lead in an
            ever-evolving digital world.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={cardContainerVariants}
        >
          <FeatureCard
            icon={<Layers className="w-8 h-8 text-[color:var(--brand-cyan)]" />}
            title="Integrated Expertise"
            description="Across digital transformation, infrastructure, AI, IoT, and data analytics & visualization."
          />
          <FeatureCard
            icon={<Award className="w-8 h-8 text-[color:var(--brand-cyan)]" />}
            title="Proven Track Record"
            description="Of delivering high-impact projects across diverse industries."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-[color:var(--brand-cyan)]" />}
            title="Agile & Flexible"
            description="Approach, tailored to meet each client’s unique goals and challenges."
          />
        </motion.div>

        {/* Section 2: Mission & Vision */}
        <motion.div className="text-center my-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mission &{" "}
            <span className="text-[color:var(--brand-cyan)]">Vision</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={cardContainerVariants}
        >
          {/* Card: Mission */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Target className="w-12 h-12 text-[color:var(--brand-cyan)]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-blue-200 mb-6">
                  At AGILIUM, our mission is to empower governments,
                  enterprises, and communities with innovative digital solutions
                  that bridge the physical and digital worlds. We transform bold
                  ideas into practical, measurable outcomes driving efficiency,
                  connectivity, and sustainable growth across Saudi Arabia and
                  the wider region.
                </p>
                <ul className="text-blue-200 space-y-2 text-left">
                  {missions.map((mission, index) => (
                    <li key={index} className="flex gap-2">
                      <SquareCheckBig className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {mission}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card: Vision */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                    <Eye className="w-12 h-12 text-[color:var(--brand-cyan)]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-blue-200 mb-6">
                  At Agilium, our vision is to shape a smarter, more connected
                  future where transformative innovation bridges the digital and
                  physical worlds. We aspire to be the driving force that turns
                  bold ideas into impactful realities, inspiring progress and
                  sustainable growth across Saudi Arabia and the wider region.
                </p>
                <ul className="text-blue-200 space-y-2 text-left">
                  {visions.map((vision, index) => (
                    <li key={index} className="flex gap-2">
                      <SquareCheckBig className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {vision}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Section 3: Values & Goals */}
        <motion.div className="text-center my-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Values &{" "}
            <span className="text-[color:var(--brand-cyan)]">Goals</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={cardContainerVariants}
        >
          {/* Card: Values */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Gem className="w-12 h-12 text-[color:var(--brand-cyan)]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Values</h3>
                </div>
                <p className="text-blue-200 mb-6">
                  At Agilium, our values guide every decision, partnership, and
                  solution we deliver. Rooted in innovation, integrity, and
                  collaboration, our values reflect our commitment to creating
                  measurable impact and driving excellence across everything we
                  do.
                </p>
                <ul className="text-blue-200 space-y-3 text-left">
                  <li>
                    <strong className="text-white">Innovation: </strong>
                    Continuously pushing boundaries with creative and
                    transformative solutions.
                  </li>
                  <li>
                    <strong className="text-white">Integrity: </strong>
                    Operating with transparency, trust, and responsibility.
                  </li>
                  <li>
                    <strong className="text-white">Agility: </strong> Adapting
                    quickly to changing needs and delivering with speed and
                    precision.
                  </li>
                  <li>
                    <strong className="text-white">Impact: </strong> Driving
                    measurable value for governments, enterprises, and
                    communities.
                  </li>
                  <li>
                    <strong className="text-white">Collaboration: </strong>
                    Building strong partnerships to co-create sustainable
                    outcomes.
                  </li>
                  <li>
                    <strong className="text-white">Excellence: </strong>
                    Upholding the highest standards in every project and
                    interaction.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card: Goals */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-700/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                    <Flag className="w-12 h-12 text-[color:var(--brand-cyan)]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Goals</h3>
                </div>
                <p className="text-blue-200 mb-6">
                  Our goals reflect our vision to be a catalyst for digital
                  transformation in Saudi Arabia and the wider GCC. Each goal
                  builds upon our mission to bridge digital and physical worlds
                  while driving intelligence, innovation, and leadership that
                  endure over time.
                </p>
                <ul className="text-blue-200 space-y-2 text-left">
                  <li>
                    • Empower Governments & Enterprises with cutting-edge
                    digital solutions.
                  </li>
                  <li>
                    • Bridge Digital & Physical Worlds through AI, IoT, and
                    data-driven innovation.
                  </li>
                  <li>
                    • Lead in the GCC & Saudi Market as a trusted digital
                    transformation partner.
                  </li>
                  <li>
                    • Drive Sustainable Growth by delivering long-term,
                    future-ready solutions.
                  </li>
                  <li>
                    • Advance Data Analytics & Visualization to enable smarter
                    decision-making.
                  </li>
                  <li>
                    • Foster Talent & Innovation within the region by nurturing
                    expertise.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
