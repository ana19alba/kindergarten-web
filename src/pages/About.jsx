import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp, fadeLeft, fadeRight } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../sections/CTABanner';

const values = [
  { emoji:'❤️', title:'Dashuri & Kujdes',       desc:'Çdo fëmijë trajtohet me dashuri të vërtetë, durim dhe vëmendje individuale çdo ditë.' },
  { emoji:'🧠', title:'Rritje Gjithëpërfshirëse',desc:'Ne ushqejmë zhvillimin intelektual, emocional, fizik dhe social njëkohësisht.' },
  { emoji:'🌍', title:'Qytetarë Globalë',        desc:'Programet shumëgjuhëshe dhe ekspozimi kulturor i përgatisin fëmijët për botën e ndërlidhur.' },
  { emoji:'🌱', title:'Bazuar në Natyrë',        desc:'Kampusi ynë ekologjik lidh fëmijët me natyrën nëpërmjet kopshtarisë dhe klasave jashtë.' },
  { emoji:'🤝', title:'Partneritet Familjar',    desc:'Prindërit janë pjesë integrale e komunitetit tonë — komunikojmë hapur dhe ju përfshijmë në udhëtimin e fëmijës tuaj.' },
  { emoji:'🏆', title:'Ekselencë',               desc:'Kurrikul dhe metoda mësimorë me çmime, të rafinuara gjatë 15 viteve ekselence edukative.' },
];

const milestones = [
  { year:'2010', event:'Akademia Yjet e Vegjël u themelua me 30 nxënës' },
  { year:'2013', event:'U zgjerua me programe të plota parashkollore dhe Para-Klasa' },
  { year:'2015', event:'Fitoi Çmimin e Kopshtit Privat më të Mirë në Rajon' },
  { year:'2018', event:'Lansoi programin STEM & Shumëgjuhësh' },
  { year:'2021', event:'Kampusi i ri modern u hap' },
  { year:'2024', event:'500+ nxënës të regjistruar, 40+ anëtarë stafi' },
];

export default function About() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background:'linear-gradient(135deg,#EDE9FE,#F5F3FF,#E0E7FF)' }}>
        <div className="container-max px-4 md:px-8 mx-auto text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}><span className="section-label">Historia Jonë</span></motion.div>
            <motion.h1 variants={fadeUp} className="section-title mt-2 mb-4">
              15 Vite <span className="text-primary">Ushqyerjeje</span> të Mendjet e Vogla
            </motion.h1>
            <motion.p variants={fadeUp} className="section-sub mx-auto">
              E themeluar me një ëndërr të thjeshtë — të krijojë një vend ku çdo fëmijë të ndihet i sigurt, i dashur dhe i frymëzuar të mësojë.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="rounded-4xl overflow-hidden shadow-card">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80" alt="Mësuese me fëmijë" className="w-full h-80 object-cover"/>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <span className="section-label">Misioni Ynë</span>
            <h2 className="section-title mt-2 mb-4">Besojmë se Çdo Fëmijë është një <span className="text-primary">Yll</span></h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Qasja jonë e frymëzuar nga Montessori e vendos fëmijën në qendër të përvojës mësimore. Besojmë se fëmijët mësojnë më mirë kur ndihen të sigurt, të respektuar dhe me interes të vërtetë për atë që eksplorojnë.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Ekipi ynë i dedikuar i edukatorëve të certifikuar, terapistëve dhe stafit mbështetës punon së bashku për të krijuar një udhëtim mësimor të pandërprerë dhe të gëzueshëm nga muajt e parë deri tek gatishmëria për shkollën fillore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto">
          <SectionHeader label="Vlerat Tona" title="Çfarë Përfaqësojmë" sub="Parimet që udhëheqin çdo vendim që marrim në Akademinë Yjet e Vegjël."/>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v,i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{y:-6}} className="card text-center">
                <div className="text-4xl mb-3">{v.emoji}</div>
                <h3 className="font-extrabold text-dark text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <SectionHeader label="Rruga Jonë" title="Arritjet që na Formuan" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"/>
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}
                className={`flex items-start gap-6 mb-8 ${i%2===0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i%2===0 ? 'md:text-right' : 'md:text-left'} pl-10 md:pl-0`}>
                  <div className="card inline-block p-4">
                    <span className="text-primary font-extrabold text-lg">{m.year}</span>
                    <p className="text-dark font-semibold text-sm mt-1">{m.event}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:relative md:left-auto w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-glow z-10">
                  <div className="w-3 h-3 bg-white rounded-full"/>
                </div>
                <div className="hidden md:block flex-1"/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner/>
    </motion.div>
  );
}
