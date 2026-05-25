import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';

const activities = [
  { time: '7:30',  emoji: '🌅', title: 'Mirëseardhja e Mëngjesit', desc: 'Përshëndetje, pranim, rreth mëngjesi dhe tregim', color: 'bg-orange-100 border-orange-300' },
  { time: '8:30',  emoji: '📚', title: 'Aktivitete Mësimore',      desc: 'Mësim i strukturuar: lexim, matematikë & projekte grupore', color: 'bg-blue-100 border-blue-300' },
  { time: '10:00', emoji: '🥛', title: 'Rostiçeri Mëngjesi',       desc: 'Rostiçeri organike e shëndetshme dhe pushim hidratimi', color: 'bg-green-100 border-green-300' },
  { time: '10:30', emoji: '🎨', title: 'Sesion Kreativ',           desc: 'Art, muzikë, dramë dhe lojë e lirë imagjinative', color: 'bg-purple-100 border-purple-300' },
  { time: '12:00', emoji: '🥗', title: 'Koha e Drekës',            desc: 'Drekë e nxehtë ushqyese e shërbyer në sallën e ngrënies', color: 'bg-yellow-100 border-yellow-300' },
  { time: '13:00', emoji: '😴', title: 'Pushim / Gjumë Pasdite',   desc: 'Pushim i qetë ose gjumë për fëmijët e vegjël', color: 'bg-indigo-100 border-indigo-300' },
  { time: '14:00', emoji: '🌿', title: 'Lojë Jashtë',              desc: 'Lojëra të mbikëqyrura jashtë, eksplorimi i natyrës & sport', color: 'bg-teal-100 border-teal-300' },
  { time: '15:30', emoji: '📖', title: 'Tregim & Relaks',          desc: 'Tregime, ditarë dhe reflektim i fundit të ditës', color: 'bg-pink-100 border-pink-300' },
];

export default function DailyActivities() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Rutina Ditore"
          title="Një Ditë në Yjet e Vegjël"
          sub="Një ditë e menduar me kujdes që balanaon mësimin, lojën, pushimin dhe ushqimin për zhvillim të plotë."
        />
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((a, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`rounded-3xl border-2 p-5 ${a.color} transition-all duration-300 hover:shadow-card`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{a.emoji}</span>
                <span className="font-bold text-xs text-gray-500 bg-white/60 px-2 py-1 rounded-full">{a.time}</span>
              </div>
              <h4 className="font-extrabold text-dark mb-1">{a.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              <div className="mt-3 flex items-center gap-1">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-primary/40 rounded-full"
                      initial={{ width: 0 }} whileInView={{ width: `${[80,60,90][j]}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}/>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
