import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Variants (defined once)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
          <IconComponent className="w-6 h-6" />
        </div>
        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );
};

const skillCategories = [
  { title: "Languages", skills: portfolioData.skills.languages, gradient: "text-gradient-primary" },
  { title: "Frontend", skills: portfolioData.skills.frontend, gradient: "text-gradient-accent" },
  { title: "Backend", skills: portfolioData.skills.backend, gradient: "text-gradient-primary" },
  { title: "Tools", skills: portfolioData.skills.tools, gradient: "text-gradient-accent" },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-7xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className={`text-2xl font-bold mb-8 text-center ${category.gradient}`}>
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill: any) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="glass-card p-8 rounded-radius-large max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground mb-6">
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

export default Skills;
