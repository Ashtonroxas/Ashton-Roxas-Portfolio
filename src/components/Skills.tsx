import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    const IconComponent = Icons[skill.icon as keyof typeof Icons] as any;

    return (
      <motion.div
        variants={itemVariants}
        className="glass-card p-6 rounded-radius hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-hero rounded-radius-small text-primary-foreground">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
              {skill.name}
            </h4>
          </div>
        </div>
      </motion.div>
    );
  };

  const skillCategories = [
    { title: "Languages", skills: portfolioData.skills.languages, color: "primary" },
    { title: "Frontend", skills: portfolioData.skills.frontend, color: "accent" },
    { title: "Backend", skills: portfolioData.skills.backend, color: "primary" },
    { title: "Tools", skills: portfolioData.skills.tools, color: "accent" },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    category.color === "primary" ? "text-gradient-primary" : "text-gradient-accent"
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index + categoryIndex * 4}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          {/*<motion.div variants={itemVariants} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Additional Technologies</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "GraphQL", "Redux", "Webpack", "Jest", "Cypress", "Sass",
                "Material-UI", "Styled Components", "Nginx", "Redis",
                "Elasticsearch", "Jenkins", "Kubernetes", "Terraform"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 1, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass-card rounded-radius-small text-sm font-medium text-muted-foreground hover:text-accent hover:shadow-glow transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>*/}

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
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
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