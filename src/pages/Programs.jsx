import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, scaleIn } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';
import { programs } from '../data/programs';
import CTABanner from '../sections/CTABanner';
import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center"
        style={{ background:'linear-gradient(135deg,#FFF0E6,#E8F4FD)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Programet & Klasat</span>
          <h1 className="section-title mt-2 mb-4">Programe Mësimore për <span className="text-primary">Çdo Moshë</span></h1>
          <p className="section-sub mx-auto">Programe të menduar me kujdes që i plotësojnë fëmijët në fazën e tyre zhvillimore.</p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <motion.div key={p.id} variants={scaleIn} whileHover={{scale:1.02,y:-6}}
                className={`rounded-4xl border-2 overflow-hidden ${p.color} ${p.border} shadow-soft hover:shadow-card transition-all duration-300`}>
                <div className="p-8">
                  <div className="text-6xl mb-4">{p.icon}</div>
                  <div className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full ${p.badge} mb-4`}>{p.age}</div>
                  <h2 className="font-extrabold text-2xl text-dark mb-3">{p.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="space-y-2 text-xs text-gray-500 font-semibold">
                    <div className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2">🕐 {p.schedule}</div>
                    <div className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2">👶 Mosha: {p.age}</div>
                    <div className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2">📍 Në Kampus</div>
                  </div>
                  <Link to="/enrollment" className="btn-primary w-full text-center block mt-6 text-sm py-3">
                    Apliko Tani →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum highlights */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto">
          <SectionHeader label="Kurrikula" title="Qasja Jonë Mësimore" sub="Kurrikul e përzier Montessori dhe e bazuar në lojë, e themeluar në shkencën e zhvillimit."/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji:'🎯', title:'Mësim i Udhëhequr nga Fëmija', desc:'Fëmijët zgjedhin aktivitetet që i interesojnë, duke zhvilluar motivim të brendshëm dhe pavarësi.' },
              { emoji:'🤝', title:'Lojë Bashkëpunuese',            desc:'Aktivitetet grupore ndërtojnë aftësi sociale, empati, komunikim dhe punë ekipore që në moshë të hershme.' },
              { emoji:'📊', title:'Ndjekja e Progresit',           desc:'Vlerësimet e rregullta dhe raportet prindërore sigurojnë që çdo fëmijë po progredon me ritmin e duhur.' },
            ].map((c,i) => (
              <motion.div key={i} variants={scaleIn} initial="hidden" whileInView="visible" viewport={{once:true}} className="card text-center">
                <div className="text-5xl mb-4">{c.emoji}</div>
                <h3 className="font-extrabold text-xl text-dark mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
