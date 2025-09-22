import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import * as Icons from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="font-bold text-2xl text-gradient-primary">
                {portfolioData.personal.name}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {portfolioData.personal.title} & Software Engineer💻
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Made with</span>
                <span>using React & Tailwind CSS</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Quick Links</h3>
              <nav className="space-y-2">
                {portfolioData.navigation.map((item) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Social Links & Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Connect</h3>
              <div className="space-y-3">
                {portfolioData.social.map((social) => {
                  const IconComponent = Icons[social.icon as keyof typeof Icons] as any;
                  
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Hire Me
              </button>
              <button
                onClick={() => window.open("mailto:" + portfolioData.personal.email)}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Say Hello
              </button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2 glass-card rounded-radius hover:shadow-glow transition-all"
              >
                <ArrowUp className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;