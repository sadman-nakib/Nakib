import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { EASE_APPLE } from '../lib/utils';

const projects = [
  {
    title: "Vision Pro Interface",
    category: "Spatial Design",
    image: "https://picsum.photos/seed/vision/1600/900",
    tags: ["SwiftUI", "Unity", "ARKit"]
  },
  {
    title: "Lumina Dashboard",
    category: "Fintech",
    image: "https://picsum.photos/seed/lumina/1600/900",
    tags: ["React", "D3.js", "Node.js"]
  },
  {
    title: "Aether Mobile App",
    category: "E-Commerce",
    image: "https://picsum.photos/seed/aether/1600/900",
    tags: ["Next.js", "Stripe", "Framer"]
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-60 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: EASE_APPLE }}
            className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_APPLE }}
            className="text-apple-muted text-xl md:text-2xl max-w-2xl font-light leading-relaxed"
          >
            A collection of projects where design meets engineering excellence. Each piece is a testament to our commitment to quality.
          </motion.p>
        </div>

        <div className="space-y-60">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: EASE_APPLE }}
              className="group relative"
            >
              <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden bg-apple-secondary border border-white/5 cursor-pointer">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-[2s] ease-apple"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 + (i * 0.1), ease: EASE_APPLE }}
                        className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-semibold text-white/80"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xs font-semibold text-apple-muted uppercase tracking-[0.3em] mb-4 block"
                      >
                        {project.category}
                      </motion.span>
                      <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight">{project.title}</h3>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-white/10 transition-transform duration-500"
                    >
                      <ArrowUpRight size={40} />
                    </motion.button>
                  </div>
                </div>

                {/* Inner Border Glow */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[48px] group-hover:ring-white/30 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
