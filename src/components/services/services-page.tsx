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
      className="py-20 px-4 bg-gradient-to-b from-[#b1c7e9] to-[#759cd8]"
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
            Our <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-gray-800">
            Comprehensive technology solutions designed to drive innovation and
            accelerate your digital transformation.
          </p>
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
              <Card className="bg-white/70 border border-blue-300 backdrop-blur-sm transition-all duration-300 group h-full flex flex-col hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <CardHeader className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="font-medium text-blue-600">
                    {service.subtitle}
                  </p>
                  <div className="h-48">
                    <p className="text-gray-800 text-sm">
                      {service.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  {/* Features and Benefits can be complex; for this example, we'll keep them static.
                      A more advanced version could use an accordion. */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Services:
                      </h4>
                      <ul className="space-y-1 text-gray-800">
                        {service.features.map(
                          (
                            feature,
                            idx // Show first 3 features for brevity
                          ) => (
                            <li key={idx} className="text-sm flex items-start">
                              <span className="text-blue-500 mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1 text-gray-800">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-blue-400 text-blue-700  bg-white"
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
