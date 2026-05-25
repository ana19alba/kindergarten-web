import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';

const shapes = [
  { emoji: '⭐', size: 'text-5xl', top: '12%', left: '8%',  delay: 0 },
  { emoji: '🌈', size: 'text-4xl', top: '20%', right: '10%', delay: 0.5 },
  { emoji: '🎈', size: 'text-5xl', top: '65%', left: '5%',  delay: 1 },
  { emoji: '🌸', size: 'text-3xl', top: '75%', right: '8%', delay: 0.8 },
  { emoji: '🎨', size: 'text-4xl', top: '45%', right: '5%', delay: 0.3 },
  { emoji: '🦋', size: 'text-3xl', top: '30%', left: '3%',  delay: 1.2 },
  { emoji: '🌟', size: 'text-2xl', top: '85%', left: '25%', delay: 0.6 },
  { emoji: '🎵', size: 'text-3xl', top: '10%', left: '50%', delay: 0.9 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EDE9FE 0%, #F5F3FF 35%, #E0E7FF 70%, #FAF5FF 100%)' }}>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1,1.1,1], opacity:[0.15,0.25,0.15] }} transition={{ duration:6, repeat:Infinity }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"/>
        <motion.div animate={{ scale: [1,1.15,1], opacity:[0.1,0.2,0.1] }} transition={{ duration:8, repeat:Infinity, delay:2 }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-15"/>
        <motion.div animate={{ scale: [1,1.08,1], opacity:[0.1,0.18,0.1] }} transition={{ duration:7, repeat:Infinity, delay:1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lavender rounded-full blur-3xl opacity-10"/>
      </div>

      {/* Floating emojis */}
      {shapes.map((s, i) => (
        <motion.div key={i}
          className={`absolute ${s.size} select-none pointer-events-none`}
          style={{ top: s.top, left: s.left, right: s.right }}
          animate={{ y: [0, -18, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}>
          {s.emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-max px-4 md:px-8 mx-auto pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-primary font-bold text-sm px-5 py-2 rounded-full shadow-soft mb-6">
            🌟 Mirë se erdhe në Akademinë Yjet e Vegjël
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark leading-tight mb-6">
            Një Vend i Lumtur për të{' '}
            <span className="relative inline-block">
              <span className="text-primary">Mësuar</span>
              <motion.div className="absolute -bottom-1 left-0 right-0 h-3 bg-sunshine/60 rounded-full -z-10"
                initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.6, delay:0.8 }}/>
            </span>
            {' & '}
            <span className="text-secondary">Rritur</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Një mjedis ushqyes i frymëzuar nga Montessori ku fëmijët zhvillojnë kureshtjen, kreativitetin dhe besimin nëpërmjet mësimit të bazuar në lojë.
          </motion.p>

          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/enrollment" className="btn-primary text-base px-10 py-4">
              🎓 Regjistrohu Tani
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-10 py-4">
              📅 Cakto një Vizitë
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {['✅ Certifikuar & Licensuar', '🏆 Shkollë me Çmime', '👨‍👩‍👧 500+ Familje të Lumtura', '🌿 Mjedis i Sigurt'].map(b => (
              <span key={b} className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full font-semibold shadow-soft">{b}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-xs font-semibold tracking-wider uppercase">Zbulo</span>
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
