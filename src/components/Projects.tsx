import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ExternalLink, Github, FileDown } from "lucide-react";
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
          {/* --- PROJECTS HEADER --- */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
              Projects
            </h2>
            <p className="text-muted-foreground">
              A collection of my work and experiments.
            </p>
          </motion.div>

          {/* --- PROJECTS GRID (Static from portfolio.ts) --- */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {portfolioData.projects.map((project) => (
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
              href="/AshtonRichRoxas_Resume .pdf"
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