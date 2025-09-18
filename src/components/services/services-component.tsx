import { Card, CardContent } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import { CheckSquare } from "lucide-react";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  "Help clients shift to a digital-first approach to their business operations.",
  "Develop strategies to optimize clients’ online presence and improve customer engagement.",
  "Implement new digital tools and technologies to enhance productivity and efficiency.",
  "Aid in the adoption of emerging technologies.",
  "Ensure data security and compliance with industry standards.",
  "Provide training and education for employees to adapt to new processes.",
  "Streamline supply chains and logistics for better results.",
  "Deliver customized solutions for unique business needs and challenges.",
  "Help clients measure and optimize digital transformation outcomes.",
  "Drive results by aligning digital technologies, data analysis, and business strategy.",
];

export function ServicesComponent() {
  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-[#edf2fa] to-[#b1c7e9]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 text-gray-900"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We <span className="text-blue-700">Do</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-left text-gray-800">
            “At Agilium, we guide organizations through every step of their digital transformation journey. From strategy to execution, we help clients embrace a digital-first approach, optimize their online presence, and implement the latest technologies.

Our tailored solutions enhance efficiency, strengthen data security, and empower teams with the tools and training they need to adapt and thrive. By aligning technology with business strategy, we deliver measurable impact and long-term growth.”
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="max-w-7xl mx-auto"
      >
        <Card className="h-full bg-white/70 border-blue-300 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/80">
          <CardContent className="p-8">
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800"
                >
                  <CheckSquare className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
