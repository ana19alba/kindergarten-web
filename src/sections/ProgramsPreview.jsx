import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, scaleIn } from '../animations/variants';
import { programs } from '../data/programs';
import SectionHeader from '../components/SectionHeader';

export default function ProgramsPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Programet Tona"
          title="Programe të Dizajnuara për Çdo Fazë"
          sub="Nga foshnjat deri tek fëmijët e moshës shkollore, kemi programin perfekt të mësimit të përshtatur me fazën zhvillimore të fëmijës tuaj."
        />
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <motion.div key={p.id} variants={scaleIn}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`rounded-3xl p-6 border-2 ${p.color} ${p.border} cursor-pointer group`}>
              <div className="text-5xl mb-4">{p.icon}</div>
              <div className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full ${p.badge} mb-3`}>
                {p.age}
              </div>
              <h3 className="font-extrabold text-xl text-dark mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
                🕐 {p.schedule}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/programs" className="btn-secondary inline-flex items-center gap-2">
            Shiko të Gjitha Programet →
          </Link>
        </div>
      </div>
    </section>
  );
}
