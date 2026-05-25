import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeUp } from '../animations/variants';
import { teachers } from '../data/teachers';
import SectionHeader from '../components/SectionHeader';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function TeachersPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Mësuesit Tanë"
          title="Njihuni me Edukatorët Tanë të Pasionuar"
          sub="Profesionistë të certifikuar, me eksperiencë dhe me zemër, të dedikuar për rritjen dhe lumturinë e çdo fëmije."
        />
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.slice(0, 4).map((t) => (
            <motion.div key={t.id} variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden shadow-card bg-white group">
              <div className={`relative h-56 bg-gradient-to-br ${t.color} overflow-hidden`}>
                <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-2 py-1 text-lg">{t.emoji}</div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <FaLinkedinIn size={14}/>
                  </a>
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <FaEnvelope size={14}/>
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-extrabold text-dark">{t.name}</h3>
                <p className="text-primary font-semibold text-sm">{t.role}</p>
                <p className="text-gray-400 text-xs mt-1">{t.speciality}</p>
                <div className="mt-3 bg-cream rounded-xl px-3 py-1.5 inline-block">
                  <span className="text-xs font-bold text-dark">⏱ {t.experience} exp.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/teachers" className="btn-secondary inline-flex items-center gap-2">
            Njihu me të Gjithë Mësuesit →
          </Link>
        </div>
      </div>
    </section>
  );
}
