// src/components/Services.tsx (or similar)
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";

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

export function Services() {
  return (
    <motion.section
      className="py-20 px-4"
      style={{ background: "linear-gradient(180deg, #000000, #1a1a1a)" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% of the section is visible
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What we <span className="text-[color:var(--brand-cyan)]">Do</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#cfe8ee" }}>
            “At Agilium, we guide organizations through every step of their
            digital transformation journey. From strategy to execution, we help
            clients embrace a digital-first approach, optimize their online
            presence, and implement the latest technologies—AI, blockchain, IoT,
            and beyond. Our tailored solutions enhance efficiency, strengthen
            data security, and empower teams with the tools and training they
            need to adapt and thrive. By aligning technology with business
            strategy, we deliver measurable impact and long-term growth.”
          </p>
          <div className="mt-16">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Help clients shift to a digital-first approach to their business
                operations.
              </li>

              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Develop strategies to optimize clients’ online presence and
                improve customer engagement.
              </li>

              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Implement new digital tools and technologies to enhance
                productivity and efficiency.
              </li>

              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Aid in the adoption of emerging technologies (AI, Blockchain,
                IoT).
              </li>

              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Ensure data security and compliance with industry standards.
              </li>

              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Provide training and education for employees to adapt to new
                processes.
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Streamline supply chains and logistics for better results.
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Deliver customized solutions for unique business needs and
                challenges.
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Help clients measure and optimize digital transformation
                outcomes.
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                Drive results by aligning digital technologies, data analysis,
                and business strategy.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants} // Reuse to stagger the cards themselves
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="bg-zinc-900/50 border border-cyan-500/20 backdrop-blur-sm transition-all duration-300 group h-full flex flex-col hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10">
                <CardHeader className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-[color:var(--brand-cyan)] transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="font-medium text-cyan-400">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  {/* Features and Benefits can be complex; for this example, we'll keep them static. 
                      A more advanced version could use an accordion. */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-1 text-gray-300">
                        {service.features.map(
                          (
                            feature,
                            idx // Show first 3 features for brevity
                          ) => (
                            <li key={idx} className="text-sm flex items-start">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1" style={{ color: "#cfe8ee" }}>
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-[color:var(--brand-cyan)]/50 text-[color:var(--brand-cyan)] hover:bg-[color:var(--brand-cyan)]/10 bg-transparent"
                  >
                    <Link to="/services/$slug" params={{ slug: service.slug }}>
                      <span className="flex">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
