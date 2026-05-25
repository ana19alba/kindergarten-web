import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp } from '../animations/variants';
import { services } from '../data/services';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../sections/CTABanner';

export default function Services() {
  return (
    <motion.div {...pageTransition}>
      <section className="pt-32 pb-16 text-center" style={{ background:'linear-gradient(135deg,#E8F4FD,#EDE9FE)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Shërbimet</span>
          <h1 className="section-title mt-2 mb-4">Gjithçka që Fëmija Juaj <span className="text-primary">Ka Nevojë</span></h1>
          <p className="section-sub mx-auto">Shërbime gjithëpërfshirëse që mbështesin çdo aspekt të rritjes, sigurisë dhe lumturisë së fëmijës tuaj.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s,i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{y:-6,scale:1.02}}
                className={`flex gap-5 p-6 rounded-3xl border-2 ${s.color} bg-white hover:shadow-card transition-all duration-300`}>
                <div className="text-5xl shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-extrabold text-dark text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto">
          <SectionHeader label="Angazhimi Ynë" title="Pse Çdo Shërbim Ka Rëndësi" sub="Çdo shërbim është projektuar me kujdes për të mbështetur fëmijën e plotë — trupin, mendjen dhe shpirtin."/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { emoji:'🌡️', title:'Shëndeti Së Pari',      desc:'Infermierja jonë në kampus monitoron shëndetin çdo ditë. Prindërit njoftohen menjëherë për çdo shqetësim.' },
              { emoji:'🔒', title:'Siguria Gjithmonë',      desc:'Ambiente me tre bravë, verifikim identiteti për marrje, monitorim CCTV 24/7.' },
              { emoji:'📱', title:'Qëndroni të Lidhur',     desc:'Njoftime në kohë reale nëpërmjet aplikacionit prindëror — foto, ushqime, aktivitete dhe raporte shëndetësore.' },
              { emoji:'🚌', title:'Nga Dera në Derë',       desc:'Autobuza me GPS dhe shoqërues të trajnuar sigurojnë transport të sigurt dhe pa stres çdo ditë.' },
            ].map((f,i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}
                className="flex gap-4 card">
                <div className="text-4xl shrink-0">{f.emoji}</div>
                <div>
                  <h4 className="font-extrabold text-dark text-lg mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </motion.div>
  );
}
