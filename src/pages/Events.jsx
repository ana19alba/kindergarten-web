import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition, staggerContainer, fadeUp } from '../animations/variants';
import { events } from '../data/events';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../sections/CTABanner';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const newsItems = [
  {
    date: '10 Maj 2025',
    tag: 'Çmim',
    emoji: '🏆',
    title: 'Yjet e Vegjël Fitojnë Çmimin e Kopshtit më të Mirë 2025',
    excerpt: 'Jemi të entuziazmuar të njoftojmë se Akademia Yjet e Vegjël është njohur si institucioni kryesor i fëmijërisë së hershme në rajon për vitin e tretë radhazi.',
    color: 'bg-sunshine/10 border-sunshine',
  },
  {
    date: '22 Prill 2025',
    tag: 'Mjedisi',
    emoji: '🌍',
    title: 'Dita e Tokës: Fëmijët Tanë Mbjellën 200 Pemë',
    excerpt: 'Në shënimin e Ditës së Tokës, e gjithë komuniteti ynë shkollor u bashkua për të mbjellë 200 pemë në kampusin tonë dhe lagjen përreth.',
    color: 'bg-mint/10 border-mint',
  },
  {
    date: '15 Mars 2025',
    tag: 'Partneritet',
    emoji: '🤝',
    title: 'Partneritet i Ri me Muzeun e Fëmijëve',
    excerpt: 'Akademia Yjet e Vegjël është e gëzuar të njoftojë një partneritet të ri edukativ me Muzeun e Fëmijëve të Qytetit, duke ofruar ekskursione dhe punëtori mujore.',
    color: 'bg-lavender/10 border-lavender',
  },
  {
    date: '28 Shkurt 2025',
    tag: 'Kurrikula',
    emoji: '📚',
    title: 'Lansimi i Kurrikulës së Re STEM për Fëmijët e Vegjël',
    excerpt: 'Jemi duke zbatuar një kurrikul emocionuese STEM të bazuar në lojë, të projektuar posaçërisht për mësuesit tanë më të vegjël, moshat 1.5 deri 3 vjeç.',
    color: 'bg-sky/10 border-sky',
  },
];

export default function Events() {
  const [filter, setFilter]     = useState('Të Gjitha');
  const [expanded, setExpanded] = useState(null);
  const tags = ['Të Gjitha', ...new Set(events.map(e => e.category))];
  const filtered = filter === 'Të Gjitha' ? events : events.filter(e => e.category === filter);

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{ background:'linear-gradient(135deg,#FFF0E6,#EDE9FE)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Ngjarjet & Lajmet</span>
          <h1 className="section-title mt-2 mb-4">Çfarë Po <span className="text-primary">Ndodh</span> në Yjet e Vegjël</h1>
          <p className="section-sub mx-auto">Ngjarje emocionuese, festa dhe lajme nga komuniteti ynë i gjallë shkollor.</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <SectionHeader label="Ngjarjet e Ardhshme" title="Shëno Kalendarin Tënd" sub="Bashkohu me ne në këto ngjarje të mrekullueshme dhe festa të ardhshme." />

          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {tags.map(tag => (
              <button key={tag} onClick={() => setFilter(tag)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  filter === tag ? 'bg-primary text-white shadow-glow' : 'bg-cream text-dark hover:bg-primary/10'
                }`}>
                {tag}
              </button>
            ))}
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e, i) => (
              <motion.div key={e.id} variants={fadeUp} whileHover={{y:-6}}
                className={`rounded-3xl overflow-hidden shadow-soft border-2 ${e.color} bg-white transition-all duration-300 hover:shadow-card`}>
                {/* Top */}
                <div className={`p-5 ${e.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full text-white ${e.badge}`}>{e.category}</span>
                    <span className="text-3xl">{e.emoji}</span>
                  </div>
                  <h3 className="font-extrabold text-dark text-xl mb-1">{e.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
                {/* Footer */}
                <div className="p-5 bg-white flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaCalendarAlt className="text-primary shrink-0" />
                    <span>{e.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaClock className="text-secondary shrink-0" />
                    <span>{e.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaMapMarkerAlt className="text-sunshine shrink-0" />
                    <span>Kampusi Yjet e Vegjël</span>
                  </div>
                  <Link to="/enrollment" className="mt-3 btn-primary text-sm py-2.5 w-full text-center block">
                    Regjistro Interesin →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News & Blog */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto">
          <SectionHeader label="Lajmet e Shkollës" title="Të Fundit nga Yjet e Vegjël" sub="Qëndroni të informuar me lajmet, arritjet dhe historitë e fundit nga shkolla jonë." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((n, i) => (
              <motion.article key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}
                className={`p-6 rounded-3xl border-2 ${n.color} hover:shadow-card transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{n.emoji}</span>
                  <div>
                    <span className="text-xs font-extrabold text-primary uppercase tracking-widest">{n.tag}</span>
                    <p className="text-gray-400 text-xs mt-0.5">{n.date}</p>
                  </div>
                </div>
                <h3 className="font-extrabold text-dark text-lg mb-2">{n.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {expanded === i ? n.excerpt : `${n.excerpt.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="inline-block mt-4 text-primary font-bold text-sm hover:underline focus:outline-none transition-colors">
                  {expanded === i ? 'Mbyll ↑' : 'Lexo Më Shumë →'}
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto max-w-2xl text-center">
          <span className="text-4xl">📬</span>
          <h2 className="section-title mt-3 mb-3">Mos Humbisni Asnjë Ngjarje</h2>
          <p className="section-sub mb-8">Abonohuni në buletinin tonë dhe jini të parët që të mësoni për ngjarjet, lajmet dhe njoftimet e ardhshme.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Adresa juaj e email-it"
              className="flex-1 px-5 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark font-semibold text-sm transition-colors"/>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Abonohu 🎉
            </button>
          </form>
          <p className="text-gray-400 text-xs mt-4">Pa spam, çabonohuni kurdo që doni.</p>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
