import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '../animations/variants';

const points = [
  { emoji: '🏡', title: 'Mjedis i Sigurt',           desc: 'Ambiente plotësisht të sigurta me CCTV, staf të trajnuar dhe protokolle strikte sigurie.' },
  { emoji: '🧠', title: 'Mësim i Fokusuar tek Fëmija', desc: 'Kurrikul e përshtatur me stilin dhe ritmin unik të mësimit të çdo fëmije.' },
  { emoji: '💛', title: 'Mirëqenia Emocionale',       desc: 'Këshilltarë të dedikuar sigurojnë që çdo fëmijë të ndihet i dashur, i dëgjuar dhe i sigurt.' },
  { emoji: '🌿', title: 'Integrimi me Natyrën',       desc: 'Klasa jashtë, kopshtarë dhe shëtitje në natyrë të integruara në mësimin ditor.' },
];

export default function AboutPreview() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative">
            <div className="relative rounded-4xl overflow-hidden shadow-card aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&q=80"
                alt="Fëmijë duke mësuar" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent"/>
            </div>
            {/* Floating stat cards */}
            <motion.div animate={{ y: [0,-8,0] }} transition={{ duration:3, repeat:Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">⭐</div>
              <div><p className="font-extrabold text-xl text-dark">4.9/5</p><p className="text-gray-500 text-xs">Vlerësim Prindëror</p></div>
            </motion.div>
            <motion.div animate={{ y: [0,8,0] }} transition={{ duration:3.5, repeat:Infinity, delay:0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-mint/20 rounded-xl flex items-center justify-center text-2xl">🌱</div>
              <div><p className="font-extrabold text-xl text-dark">100%</p><p className="text-gray-500 text-xs">Ushqime Organike</p></div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}>
              <span className="section-label">Rreth Yjet e Vegjël</span>
              <h2 className="section-title mt-2 mb-4">
                Duke Ushqyer <span className="text-primary">të Ardhmen e Ndritur</span> të Çdo Fëmije
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                E themeluar në vitin 2010, Akademia Yjet e Vegjël është një qendër mësimi e hershëm me çmime, e dedikuar për të ofruar një mjedis të ngrohtë, të sigurt dhe stimulues për fëmijët nga 6 muaj deri në 10 vjeç. Qasja jonë e frymëzuar nga Montessori siguron që çdo fëmijë të mësojë me ritmin e tij, të zhvillojë besimin dhe të ndërtojë dashuri të përjetshme për mësimin.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((p, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex gap-3 p-4 bg-white rounded-2xl shadow-soft hover:shadow-card transition-shadow">
                  <div className="text-2xl shrink-0">{p.emoji}</div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{p.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Zbulo Historinë Tonë →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
