import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeUp } from '../animations/variants';
import { services } from '../data/services';
import SectionHeader from '../components/SectionHeader';

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Çfarë Ofrojmë"
          title="Shërbime Gjithëpërfshirëse për Fëmijën Tuaj"
          sub="Gjithçka që fëmija juaj ka nevojë për të lulëzuar — nën një çati të bukur dhe të kujdesshme."
        />
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`flex flex-col items-center text-center p-5 rounded-3xl border-2 ${s.color} bg-white cursor-pointer transition-shadow hover:shadow-card`}>
              <div className="text-4xl mb-3">{s.icon}</div>
              <h4 className="font-bold text-dark text-xs mb-1 leading-tight">{s.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed hidden sm:block">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            Eksploro të Gjitha Shërbimet →
          </Link>
        </div>
      </div>
    </section>
  );
}
