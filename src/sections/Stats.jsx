import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

const stats = [
  { value: 500, suffix: '+', label: 'Fëmijë të Lumtur',   emoji: '😊', color: 'from-primary to-orange-400' },
  { value: 15,  suffix: '+', label: 'Vite Eksperiencë',   emoji: '🏆', color: 'from-secondary to-teal-400' },
  { value: 40,  suffix: '+', label: 'Mësues Ekspertë',    emoji: '👩‍🏫', color: 'from-lavender to-purple-400' },
  { value: 12,  suffix: '',  label: 'Çmime të Fituara',   emoji: '🥇', color: 'from-sunshine to-amber-400' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = value / 50;
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container-max px-4 md:px-8 mx-auto">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}
              className={`relative overflow-hidden rounded-3xl p-6 text-white text-center bg-gradient-to-br ${s.color} shadow-card`}>
              <div className="text-4xl mb-2">{s.emoji}</div>
              <div className="text-4xl font-extrabold mb-1">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/80 font-semibold text-sm">{s.label}</div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full"/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
