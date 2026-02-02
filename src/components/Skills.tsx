import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
  exit: { opacity: 0, y: -20 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

// Reusable card
const SkillCard = ({ skill }: { skill: { name: string, icon: LucideIcon } }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="glass-card p-4 rounded-radius hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center gap-3"
    >
      <div className="p-3 bg-gradient-hero rounded-full text-primary-foreground group-hover:rotate-12 transition-transform">
        <IconComponent className="w-6 h-6" />
      </div>
      <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
        {skill.name}
      </h4>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  
  // These map to the keys in portfolioData.skills
  const categories = [
    { label: "Languages", key: "languages" },
    { label: "Cloud & DevOps", key: "cloud" },
    { label: "Frameworks", key: "frameworks" },
    { label: "Concepts", key: "concepts" },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
              Technical Arsenal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and secure applications.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => setActiveTab(category.label)}
                className={`px-6 py-2 rounded-full transition-all duration-300 border backdrop-blur-sm font-medium ${
                  activeTab === category.label
                    ? "bg-primary text-primary-foreground border-primary shadow-glow scale-105"
                    : "bg-card/30 text-muted-foreground border-card-border hover:border-primary/50 hover:bg-card/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Filtered Grid */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {portfolioData.skills[
                  categories.find(c => c.label === activeTab)?.key as keyof typeof portfolioData.skills
                ]?.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="glass-card p-8 rounded-radius-large max-w-2xl mx-auto bg-gradient-glass">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Constantly Evolving
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently exploring advanced LLM integration, Microservices patterns, and refining my System Design skills.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-hero"
              >
                Let's Build Something Amazing
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;