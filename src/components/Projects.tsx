import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ExternalLink, Github, Star, FileDown, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useQuery } from "@tanstack/react-query";

// --- Types for GitHub API ---
interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

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

  // 1. EXTRACT USERNAME DYNAMICALLY
  const githubEntry = portfolioData.social.find(s => s.name === "GitHub");
  const username = githubEntry?.username.replace('@', '') || "Ashtonroxas"; 

  // 2. FETCH GITHUB REPOS
  const { data: githubProjects, isLoading, error } = useQuery({
    queryKey: ["github-repos", username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (!response.ok) throw new Error("Failed to fetch from GitHub");
      const data: GitHubRepo[] = await response.json();
      
      // Filter: Only show repos that have the topic "featured"
      return data.filter(repo => repo.topics.includes("featured"));
    },
    enabled: !!username,
  });

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
          {/* --- FEATURED PROJECTS (Dynamic from GitHub) --- */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Highlights from my GitHub (tagged 'featured')
            </p>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-accent" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-10 text-destructive">
              Unable to load projects from GitHub.
            </div>
          )}

          {/* Dynamic Grid */}
          {!isLoading && githubProjects && (
            <motion.div
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-8 mb-20"
            >
              {githubProjects.map((repo) => (
                <motion.div
                  key={repo.id}
                  variants={itemVariants}
                >
                  <SpotlightCard className="rounded-radius-large hover:shadow-large transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="glass-card border-0 bg-transparent h-full flex flex-col p-8">
                      
                      {/* Top Row: Title & Icons */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {repo.name}
                        </h3>
                        <div className="flex gap-2 z-20">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-card/50 rounded-full hover:bg-accent/20 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                          {repo.homepage && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-card/50 rounded-full hover:bg-accent/20 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed grow">
                        {repo.description || "No description provided."}
                      </p>

                      {/* Footer: Tech & Stars */}
                      <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                           {/* Use GitHub Topics as Tech Stack */}
                           {repo.topics.slice(0, 4).map(topic => (
                             <span key={topic} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md uppercase tracking-wider">
                               {topic}
                             </span>
                           ))}
                           {/* Fallback if no topics */}
                           {repo.topics.length === 0 && repo.language && (
                              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md uppercase tracking-wider">
                                {repo.language}
                              </span>
                           )}
                        </div>
                        
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>

                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          )}


          {/* --- OTHER PROJECTS (Static from portfolio.ts) --- */}
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