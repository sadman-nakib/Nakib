import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EASE_APPLE } from '../lib/utils';

export const SplitSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-60 px-6 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <motion.div style={{ y: yText, opacity }}>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: EASE_APPLE }}
            className="text-6xl md:text-8xl font-display font-bold mb-10 leading-[0.9] tracking-tighter"
          >
            Crafting the <br /> <span className="text-gradient">Invisible.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_APPLE }}
            className="text-xl text-apple-muted mb-12 leading-relaxed max-w-lg font-light"
          >
            Good design is obvious. Great design is transparent. We focus on the subtle details that make an experience feel effortless and magical.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: EASE_APPLE }}
            className="flex items-center gap-8 origin-left"
          >
            <div className="w-16 h-px bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-apple-muted">Our Philosophy</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: EASE_APPLE }}
          className="relative rounded-[56px] overflow-hidden aspect-[4/5] glass"
        >
          <motion.img 
            style={{ scale: scaleImage }}
            src="https://picsum.photos/seed/abstract/800/1000" 
            alt="Abstract" 
            loading="lazy"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[56px]" />
        </motion.div>
      </div>
    </section>
  );
};
