import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { EASE_APPLE } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export const ScrollNarrative = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-black">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[300vw] flex flex-row relative"
        >
          {/* Slide 1 */}
          <div className="h-screen w-screen flex items-center justify-center p-20">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: EASE_APPLE }}
              className="max-w-4xl text-center"
            >
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 text-gradient leading-[0.9]">
                Simplicity is the <br /> ultimate sophistication.
              </h2>
              <p className="text-xl text-apple-muted max-w-xl mx-auto font-light leading-relaxed">
                Every detail is considered. Every pixel has a purpose. We don't just build websites; we engineer digital artifacts.
              </p>
            </motion.div>
          </div>

          {/* Slide 2 */}
          <div className="h-screen w-screen flex items-center justify-center p-20 bg-apple-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: EASE_APPLE }}
                className="relative aspect-video rounded-[40px] overflow-hidden glass group"
              >
                 <img 
                  src="https://picsum.photos/seed/tech1/1200/800" 
                  alt="Process" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s] ease-apple"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[40px]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: EASE_APPLE }}
              >
                <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Built for Performance.</h3>
                <p className="text-lg text-apple-muted mb-10 font-light leading-relaxed">
                  Using cutting-edge technologies like GSAP and Framer Motion, we create fluid interactions that feel natural and responsive.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Speed', 'Motion', 'Scale'].map((tag) => (
                    <div key={tag} className="px-6 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-apple-muted hover:text-white hover:border-white/30 transition-all duration-500">
                      {tag}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="h-screen w-screen flex items-center justify-center p-20 relative overflow-hidden">
             <div className="text-center">
                <motion.h2 
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 0.05, scale: 1 }}
                  transition={{ duration: 2, ease: EASE_APPLE }}
                  className="text-[15vw] md:text-[20vw] font-display font-bold tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                >
                  IMMERSIVE
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: EASE_APPLE }}
                  className="relative z-10"
                >
                  <h3 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">The Future of Web.</h3>
                  <p className="text-apple-muted text-xl font-light">Experience the next generation of digital storytelling.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
