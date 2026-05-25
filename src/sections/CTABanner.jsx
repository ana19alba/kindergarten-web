import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #A855F7 100%)' }}>

      {/* Floating shapes */}
      {['⭐','🌈','🎈','🎨','🌸'].map((e, i) => (
        <motion.div key={i}
          className="absolute text-4xl opacity-20 pointer-events-none select-none"
          style={{ top: `${10 + i * 18}%`, left: i % 2 === 0 ? `${5 + i * 4}%` : undefined, right: i % 2 !== 0 ? `${5 + i * 3}%` : undefined }}
          animate={{ y: [0, -16, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}>
          {e}
        </motion.div>
      ))}

      <div className="container-max px-4 md:px-8 mx-auto relative z-10">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center text-white">
          <motion.div variants={fadeUp} className="text-6xl mb-4">🎓</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Jepni Fëmijës Tuaj Fillimin<br/>Më të Mirë në Jetë
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Hapësirat janë të kufizuara për vitin akademik 2026/27. Regjistroni interesin tuaj sot!
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link to="/enrollment"
              className="bg-white text-primary font-extrabold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl">
              🎓 Fillo Regjistrimin
            </Link>
            <Link to="/contact"
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all">
              📞 Na Kontakto
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-8 text-white/60 text-sm">
            Pa asnjë angazhim · Vizitë falas në kampus e disponueshme
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
