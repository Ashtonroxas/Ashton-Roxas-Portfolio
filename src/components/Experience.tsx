import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Calendar, CheckCircle, BookOpen, GraduationCap, Heart } from "lucide-react";
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
      <div className="container mx-auto max-w-7xl"> {/* Increased max-width for 3 cols */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
              Experience & Qualifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of professional growth, leadership, and academic milestones.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mb-20">
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

          {/* Education, Coursework & Volunteering Grid */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-4">
                Academic & Community Impact
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Education Card */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-radius-large hover:shadow-glow transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-radius-small text-primary-foreground">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">B.S. Computer Science</h4>
                    <p className="text-accent">UMass Lowell</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - 2026 (Expected)</span>
                </div>
                <div className="space-y-2 mt-auto">
                   <p className="text-muted-foreground text-sm">
                     <strong>GPA:</strong> 3.3 / 4.0
                   </p>
                   <p className="text-muted-foreground text-sm">
                     <strong>Honors:</strong> Dean's List & Honors Student
                   </p>
                </div>
              </motion.div>

              {/* 2. Relevant Coursework Card */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-radius-large hover:shadow-glow transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-accent rounded-radius-small text-accent-foreground">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Relevant Coursework</h4>
                    <p className="text-accent">Advanced Electives</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-auto">
                  {[
                    "Cloud Computing",
                    "Computer Security",
                    "Analysis of Algorithms",
                    "Operating Systems",
                    "Mobile App Programming",
                    "Computer Architecture"
                  ].map((course) => (
                    <div key={course} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span className="text-sm text-muted-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Volunteering Card (NEW) */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-radius-large hover:shadow-glow transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-hero rounded-radius-small text-primary-foreground">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Volunteering</h4>
                    <p className="text-accent">{portfolioData.leadership.organization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{portfolioData.leadership.duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {portfolioData.leadership.description}
                </p>
                <div className="space-y-2 mt-auto">
                  {portfolioData.leadership.achievements.slice(0, 2).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
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