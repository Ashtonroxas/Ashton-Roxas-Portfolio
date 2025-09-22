import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Calendar, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section-padding">
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
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous growth and impactful contributions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />

            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-hero rounded-full border-4 border-background shadow-glow z-10" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 pl-12 md:pl-0" : "md:pl-8 pl-12 md:pr-0"
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 rounded-radius-large hover:shadow-large transition-all duration-300 group"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-hero rounded-radius-small text-primary-foreground">
                            <Building className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm">Key Achievements:</h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.3 + achIndex * 0.1 + 0.5 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-4">
                Education 
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-radius-large hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-radius-small text-primary-foreground">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Bachelor of Computer Science</h4>
                    <p className="text-accent">Univeristy of Massachusetts Lowell</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {/*Insert any description here*/ }
                  Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering, Operating Systems.
                  <br />
                </p>
              </motion.div>

              {/* Certifications */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-radius-large hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-accent rounded-radius-small text-accent-foreground">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground"> </h4>
                    <p className="text-accent"> </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    " " 
                  ].map((cert, index) => (
                    <div key={cert} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;