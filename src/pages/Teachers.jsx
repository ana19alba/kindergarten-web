import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp } from '../animations/variants';
import { teachers } from '../data/teachers';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../sections/CTABanner';
import { FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Teachers() {
  return (
    <motion.div {...pageTransition}>
      <section className="pt-32 pb-16 text-center" style={{ background:'linear-gradient(135deg,#FFF0E6,#EDE9FE)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Ekipi Ynë</span>
          <h1 className="section-title mt-2 mb-4">Njihuni me Mësuesit Tanë <span className="text-primary">të Mrekullueshëm</span></h1>
          <p className="section-sub mx-auto">Edukatorë të pasionuar, të certifikuar dhe të dedikuar që nxjerrin më të mirën nga çdo fëmijë.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((t) => (
              <motion.div key={t.id} variants={fadeUp} whileHover={{y:-8}}
                className="rounded-4xl overflow-hidden shadow-card bg-white group">
                {/* Image */}
                <div className={`relative h-64 bg-gradient-to-br ${t.color} overflow-hidden`}>
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {[<FaLinkedinIn/>, <FaEnvelope/>, <FaTwitter/>].map((icon,i) => (
                      <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-soft">
                        {icon}
                      </a>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-2xl p-2">{t.emoji}</div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <h3 className="font-extrabold text-xl text-dark">{t.name}</h3>
                  <p className="text-primary font-bold text-sm mt-1">{t.role}</p>
                  <p className="text-gray-400 text-sm mt-2 pb-4 border-b border-gray-100">{t.speciality}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-center">
                      <p className="font-extrabold text-dark text-lg">{t.experience}</p>
                      <p className="text-gray-400 text-xs">Eksperiencë</p>
                    </div>
                    <div className="text-center">
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} className="text-sunshine">★</span>)}</div>
                      <p className="text-gray-400 text-xs mt-0.5">Vlerësim</p>
                    </div>
                    <div className="text-center">
                      <p className="font-extrabold text-dark text-lg">✅</p>
                      <p className="text-gray-400 text-xs">Certifikuar</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join team */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto text-center max-w-2xl">
          <SectionHeader label="Bashkohu me Ne" title="Dëshiron të Bashkohesh me Ekipin Tonë?" sub="Ne jemi gjithmonë në kërkim të edukatorëve të pasionuar që ndajnë dashurinë tonë për edukimin e fëmijërisë së hershme."/>
          <a href="mailto:karriera@yjetevegjelakademia.al" className="btn-primary inline-flex items-center gap-2">
            📩 Apliko për të Mësuar me Ne
          </a>
        </div>
      </section>
      <CTABanner />
    </motion.div>
  );
}
