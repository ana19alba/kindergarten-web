import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeUp } from '../animations/variants';
import { events } from '../data/events';
import SectionHeader from '../components/SectionHeader';

export default function EventsPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Ngjarjet & Lajmet"
          title="Ngjarjet & Aktivitetet e Ardhshme"
          sub="Qëndroni të lidhur me jetën e gjallë të Yjet e Vegjël. Gjithmonë ka diçka emocionuese në vazhdim!"
        />
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((e) => (
            <motion.div key={e.id} variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`rounded-3xl border-2 p-6 ${e.color} cursor-pointer hover:shadow-card transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{e.emoji}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${e.badge}`}>{e.category}</span>
              </div>
              <h3 className="font-extrabold text-dark text-lg mb-2">{e.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{e.desc}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold border-t border-gray-100 pt-3">
                <span>📅 {e.date}</span>
                <span>🕐 {e.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/events" className="btn-secondary inline-flex items-center gap-2">
            Shiko të Gjitha Ngjarjet →
          </Link>
        </div>
      </div>
    </section>
  );
}
