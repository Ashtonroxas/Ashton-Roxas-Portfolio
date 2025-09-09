import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-radius-large blur opacity-75 group-hover:opacity-100 transition-opacity animate-glow" />
                <div className="relative glass-card p-1 rounded-radius-large">
                  <img
                    src="/me.jpg"
                    alt="My profile picture"
                    className="w-full max-w-md mx-auto rounded-radius-large object-cover aspect-square"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card p-4 rounded-radius hidden md:block"
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-accent"></div>
                  <div className="text-xs text-muted-foreground">Proud FILO!</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                I'm {portfolioData.personal.name}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioData.personal.bio}
              </p>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Available for new opportunities</span>
                </div>
              </div>

              {/* Highlights */}
              <motion.div
                variants={containerVariants}
                className="grid sm:grid-cols-2 gap-4 mt-8"
              >
                {[
                  { label: "Clean Code", value: "Always" },
                  { label: "Team Player", value: "100%" },
                  { label: "Problem Solver", value: "Expert" },
                  { label: "Innovation", value: "Core" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="glass-card p-4 rounded-radius text-center hover:shadow-glow transition-all group"
                  >
                    <div className="text-lg font-bold text-gradient-accent group-hover:scale-110 transition-transform">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-hero"
                >
                  Let's Work Together
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;