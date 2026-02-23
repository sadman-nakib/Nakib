import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scene3D } from './Scene3D';
import { EASE_APPLE } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const title = "Design. Engineered to Move.";
  
  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black z-10"
    >
      {/* 3D Scene */}
      <motion.div style={{ opacity }} className="absolute inset-0 z-0">
        <Scene3D scrollProgress={scrollYProgress} />
      </motion.div>

      {/* Background Elements */}
      <motion.div 
        style={{ scale, opacity, y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </motion.div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6"
      >
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tight leading-[0.85] text-gradient mb-12"
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.1, 
                  ease: EASE_APPLE 
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 1, ease: EASE_APPLE }}
        >
          <p className="text-apple-muted text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            I craft immersive digital experiences that bridge the gap between imagination and reality.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
};
