import { motion, useScroll, useSpring } from 'motion/react';
import { EASE_APPLE } from '../lib/utils';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE_APPLE }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none"
      >
        <div className="text-xl font-display font-bold tracking-tighter pointer-events-auto">NAKIB</div>
        
        <div className="flex gap-8 items-center bg-white/5 backdrop-blur-2xl px-8 py-3 rounded-full border border-white/10 pointer-events-auto">
          {['Work', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="group relative text-xs uppercase tracking-widest font-medium text-apple-muted hover:text-white transition-colors duration-500"
            >
              {item}
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-px bg-white origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-apple"
              />
            </a>
          ))}
        </div>

        <div className="w-20" /> {/* Spacer for balance */}
      </motion.nav>
    </>
  );
};
