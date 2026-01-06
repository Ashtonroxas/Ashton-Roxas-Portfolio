import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Reusable card
const SkillCard = ({ skill }: { skill: any }) => {
  const IconComponent = Icons[skill.icon as keyof typeof Icons] as any;
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="glass-card p-6 rounded-radius hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-hero rounded-radius-small text-primary-foreground">
          {IconComponent ? <IconComponent className="w-6 h-6" /> : <Icons.Code className="w-6 h-6" />}
        </div>
        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
          {skill.name}
        </h4>
      </div>
      
      {/* Optional: Add a progress bar if 'level' exists */}
      {skill.level && (
        <div className="w-full bg-muted/50 rounded-full h-1.5 mt-2 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full bg-gradient-accent"
          />
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  const categories = ["Languages", "Frontend", "Backend", "Tools"];

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
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 border backdrop-blur-sm ${
                  activeTab === category
                    ? "bg-primary text-primary-foreground border-primary shadow-glow scale-105"
                    : "bg-card/30 text-muted-foreground border-card-border hover:border-primary/50 hover:bg-card/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Filtered Grid */}
          <div className="min-h-[400px]"> {/* Min height prevents layout shift */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {portfolioData.skills[activeTab.toLowerCase() as keyof typeof portfolioData.skills]?.map((skill: any) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="glass-card p-8 rounded-radius-large max-w-2xl mx-auto bg-gradient-glass">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying at the forefront of innovation.
                Currently exploring AI/ML integration and Web3 technologies.
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