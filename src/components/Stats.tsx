import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE_APPLE } from '../lib/utils';

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Global Clients", value: 24, suffix: "" },
  { label: "Design Awards", value: 12, suffix: "" }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2500;
      const startTime = performance.now();
      
      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out expo
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = Math.floor(easedProgress * end);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      
      requestAnimationFrame(update);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-60 bg-apple-secondary border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.15, ease: EASE_APPLE }}
              className="text-center md:text-left"
            >
              <div className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-apple-muted font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
