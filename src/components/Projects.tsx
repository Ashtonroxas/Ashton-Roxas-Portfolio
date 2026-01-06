import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ExternalLink, Github, Star, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// --- Spotlight Card Component ---
const SpotlightCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-card/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding">
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
              Featured Projects
            </h2>
          </motion.div>

          {/* Featured Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8 mb-12"
          >
            {portfolioData.projects
              .filter((project) => project.featured)
              .map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                >
                  <SpotlightCard className="rounded-radius-large hover:shadow-large transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Inner Glass Card Content */}
                    <div className="glass-card border-0 bg-transparent h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative overflow-hidden h-64 shrink-0">
                        {project.image ? (
                           <img 
                             src={project.image} 
                             alt={project.title} 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                           />
                        ) : (
                          // Fallback if no image
                          <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                            <span className="text-muted-foreground">No Image</span>
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center space-x-4 z-20">
                          {project.github && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-card/90 backdrop-blur-sm rounded-full hover:shadow-glow transition-all"
                            >
                              <Github className="w-6 h-6 text-foreground" />
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-card/90 backdrop-blur-sm rounded-full hover:shadow-glow transition-all"
                            >
                              <ExternalLink className="w-6 h-6 text-foreground" />
                            </motion.a>
                          )}
                        </div>
                        <div className="absolute top-4 right-4 z-20">
                          <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <Star className="w-4 h-4 text-accent fill-accent" />
                            <span className="text-sm font-medium text-foreground">
                              Featured
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col grow">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed grow">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 mt-auto">
                          {project.github && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors relative z-20"
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors relative z-20"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Other Projects
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {portfolioData.projects
              .filter((project) => !project.featured)
              .map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                >
                  <SpotlightCard className="rounded-radius h-full hover:-translate-y-1 transition-transform duration-300">
                    <div className="glass-card border-0 bg-transparent p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h4>
                        <div className="flex gap-2 relative z-20">
                          {project.github && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-accent/10 rounded-radius-small transition-colors"
                            >
                              <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-accent/10 rounded-radius-small transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-accent" />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-radius-small"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs text-muted-foreground">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 flex flex-col items-center gap-4"
          >
            {/* GitHub CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={portfolioData.social.find((s) => s.name === "GitHub")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>

            {/* Resume CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/AshtonRoxas_Resume.pdf"
              download
              className="btn-hero inline-flex items-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;