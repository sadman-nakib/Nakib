import { useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { EASE_APPLE } from '../lib/utils';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-white text-black px-16 py-8 rounded-full text-2xl font-bold overflow-hidden transition-shadow hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
    >
      <span className="relative z-10 flex items-center gap-4">
        {children}
        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500 ease-apple" size={28} />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.button>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-80 px-6 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: EASE_APPLE }}
        >
          <h2 className="text-6xl md:text-9xl font-display font-bold mb-16 tracking-tight leading-[0.9]">
            Let’s build something <br /> <span className="text-gradient">extraordinary.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: EASE_APPLE }}
          className="flex justify-center"
        >
          <MagneticButton>Get in Touch</MagneticButton>
        </motion.div>

        <div className="mt-60 grid grid-cols-1 md:grid-cols-3 gap-20 text-apple-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.4em] text-[10px]">Email</h4>
            <a href="mailto:hello@nakib.design" className="text-xl hover:text-white transition-colors duration-500 font-light">hello@nakib.design</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.4em] text-[10px]">Social</h4>
            <div className="flex justify-center md:justify-start gap-8 text-lg font-light">
              {['Twitter', 'LinkedIn', 'Dribbble'].map((platform) => (
                <a key={platform} href="#" className="hover:text-white transition-colors duration-500">{platform}</a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.4em] text-[10px]">Location</h4>
            <p className="text-xl font-light">San Francisco, CA</p>
          </motion.div>
        </div>
      </div>

      <footer className="mt-80 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-apple-muted text-xs uppercase tracking-widest font-semibold">
        <p>© 2026 NAKIB Design Studio. All rights reserved.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors duration-500">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-500">Terms of Service</a>
        </div>
      </footer>
    </section>
  );
};
