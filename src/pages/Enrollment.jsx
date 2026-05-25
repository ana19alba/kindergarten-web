import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeUp, staggerContainer } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../sections/CTABanner';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';

const steps = [
  { n:'01', emoji:'📋', title:'Dërgo Aplikimin',        desc:'Plotëso formularin tonë online të regjistrimit me të dhënat e fëmijës tënd dhe programin e preferuar.' },
  { n:'02', emoji:'📞', title:'Thirrje Konsultuese',    desc:'Ekipi ynë i pranimeve do t\'ju kontaktojë brenda 24 orëve për të planifikuar një turne të kampusit dhe sesion pyetje-përgjigje.' },
  { n:'03', emoji:'🏫', title:'Vizitë në Kampus',       desc:'Përjetoni ambientet tona, takoni mësuesit dhe shihni mjedisin e ardhshëm mësimor të fëmijës tuaj.' },
  { n:'04', emoji:'📄', title:'Dërgo Dokumentet',       desc:'Jepni dokumentacionin e nevojshëm: certifikatë lindjeje, regjistrim vaksinash, certifikatë shëndetësore dhe foto.' },
  { n:'05', emoji:'✅', title:'Regjistrimi i Konfirmuar', desc:'Merrni konfirmimin zyrtar të regjistrimit dhe paketën e mirëseardhjes me të gjitha detajet e programit.' },
  { n:'06', emoji:'🌟', title:'Dita e Parë e Shkollës',  desc:'Aventura e fëmijës tuaj fillon! Ekipi ynë është aty në çdo hap për të siguruar një tranzicion të qetë.' },
];

const tuition = [
  { plan:'Çerdhe',     age:'6–18 muaj',   price:'45 000',  period:'/ muaj', color:'bg-pink-50 border-pink-200',        badge:'bg-pink-400',     features:['Kujdes gjithë ditën','Vëmendje individuale','Aktivitete zhvillimore','Plan ushqimi i përfshirë','Raporte mujore'] },
  { plan:'Fëmijë i Vogël', age:'18m–3 vjet', price:'52 000', period:'/ muaj', color:'bg-sky/10 border-sky',            badge:'bg-sky',          features:['Mësim i bazuar në lojë','Zhvillim social','Sesione arti & muzike','Lojë jashtë çdo ditë','Qasje aplikacion prindëror'], popular:true },
  { plan:'Parashkollor', age:'3–4 vjet',   price:'48 000',  period:'/ muaj', color:'bg-mint/10 border-mint',          badge:'bg-mint',         features:['Para-lexim & para-matematikë','Eksplorimi STEM','Dramë & lëvizje','Ekskursione mujore','Portofol progresi'] },
  { plan:'Para-Klasa', age:'4–5 vjet',     price:'51 000',  period:'/ muaj', color:'bg-lavender/10 border-lavender',  badge:'bg-lavender',     features:['Fokus në gatishmëri shkollore','Lexim & shkrim','Program dygjuhësh','Laboratore shkencore','Aftësi lidership'] },
];

const faqs = [
  { q:'Cilat janë oraret e funksionimit?',          a:'Jemi të hapur nga e hëna deri të premten, 7:30 – 18:00. Opsione kujdesi të zgjatur disponohen për marrje të hershme (7:00) dhe marrje të vonë (18:30).' },
  { q:'Cili është numri maksimal i nxënësve për klasë?', a:'Mbajmë raport të ulët mësues-fëmijë: 1:4 për Çerdhe, 1:6 për Fëmijë të Vegjël dhe 1:8 për Parashkollor dhe Para-Klasa, për të siguruar vëmendje të personalizuar.' },
  { q:'A ofron zbritje për vëllezërit?',             a:'Po! Ofrojmë 10% zbritje në tarifat e shkollimit për fëmijën e dytë të regjistruar dhe 15% për fëmijën e tretë. Kontaktoni ekipin tonë të pranimeve për detaje.' },
  { q:'A ka tarifë regjistrimi?',                    a:'Aplikohet një tarifë regjistrimi njëherësh prej 15 000 lekë, e cila mbulon paketën e mirëseardhjes, vlerësimin dhe kostot administrative.' },
  { q:'Cilat dokumente nevojiten për regjistrim?',   a:'Do t\'ju duhet: certifikatë lindjeje, regjistrim vaksinash i përditësuar, certifikatë ekzaminimi shëndetësor, foto pasaporte (2) dhe çdo raport i mëparshëm kopshti.' },
  { q:'A mund të vizitojmë shkollën para regjistrimit?', a:'Absolutisht! Inkurajojmë të gjitha familjet të planifikojnë një turne kampusi. Turnet zhvillohen të hënën–të enjten në 9:00 dhe 14:00. Kontaktoni ne për të rezervuar.' },
  { q:'Çfarë ndodh nëse fëmija im sëmuret?',         a:'Infermierja jonë në kampus monitoron të gjithë fëmijët çdo ditë. Nëse fëmija juaj shfaq shenja sëmundjeje, do t\'ju kontaktojmë menjëherë. Ndjekim protokolle strikte shëndetësore.' },
  { q:'A pranoni fëmijë me nevoja të posaçme?',      a:'Po. Kemi specialistë të trajnuar për përfshirje dhe punojmë me familjet për të krijuar plane mbështetjeje individuale. Besojmë se çdo fëmijë meriton edukim cilësor të hershëm.' },
];

export default function Enrollment() {
  const [openFaq, setOpenFaq]     = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [form, setForm] = useState({ parentName:'', email:'', phone:'', childName:'', dob:'', program:'', message:'' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '7846bf4a-c99b-4ac7-af64-1d683008578d',
          subject: `🎓 Regjistrim i Ri — ${form.childName}`,
          from_name: form.parentName,
          email: form.email,
          message: [
            `👨‍👩‍👧 Prindi/Kujdestari: ${form.parentName}`,
            `📧 Email: ${form.email}`,
            `📞 Telefon: ${form.phone}`,
            `👶 Emri i Fëmijës: ${form.childName}`,
            `🎂 Datëlindja: ${form.dob}`,
            `📚 Programi i Zgjedhur: ${form.program}`,
            `💬 Mesazh Shtesë: ${form.message || '—'}`,
          ].join('\n'),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ parentName:'', email:'', phone:'', childName:'', dob:'', program:'', message:'' });
      } else {
        setError('Ndodhi një gabim. Ju lutemi provoni sërish.');
      }
    } catch {
      setError('Nuk mund të dërgohej aplikimi. Kontrolloni lidhjen e internetit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{ background:'linear-gradient(135deg,#EDE9FE,#F5F3FF,#E0E7FF)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Pranimet</span>
          <h1 className="section-title mt-2 mb-4">Filloni <span className="text-primary">Udhëtimin</span> e Fëmijës Tuaj me Ne</h1>
          <p className="section-sub mx-auto">Regjistrimi i fëmijës tuaj në Yjet e Vegjël është i thjeshtë dhe pa stres. Ju udhëheqim në çdo hap.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {['📆 Regjistrimi i Hapur 2025–2026', '🎓 Hapësirat janë të Kufizuara', '✅ Turne Disponibël Hën–Enj'].map((b,i) => (
              <span key={i} className="bg-white shadow-soft px-5 py-2.5 rounded-full font-bold text-dark text-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Enroll — Steps */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <SectionHeader label="Procesi" title="Si të Regjistroheni në 6 Hapa të Thjeshtë" sub="Procesi ynë i pranimeve është projektuar të jetë i hapur, transparent dhe pa stres." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{y:-6}}
                className="card text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 font-extrabold text-5xl text-gray-100 select-none">{s.n}</div>
                <div className="text-5xl mb-4">{s.emoji}</div>
                <h3 className="font-extrabold text-dark text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tuition Plans */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto">
          <SectionHeader label="Tarifat Shkollore" title="Planet Tona të Çmimeve" sub="Çmime transparente pa tarifa të fshehura. Disponohen zbritje për vëllezërit dhe asistencë financiare." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tuition.map((t, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{y:-8}}
                className={`rounded-4xl border-2 ${t.color} p-6 relative bg-white hover:shadow-card transition-all duration-300`}>
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-glow whitespace-nowrap">
                    ⭐ Më i Popullarizuari
                  </div>
                )}
                <div className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full ${t.badge} mb-4`}>{t.plan}</div>
                <p className="text-gray-400 text-xs mb-3">{t.age}</p>
                <div className="flex items-end gap-1 mb-5">
                  <span className="font-extrabold text-4xl text-dark">{t.price}</span>
                  <span className="text-gray-400 text-sm mb-1 ml-1">L{t.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {t.features.map((f,j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-mint shrink-0 text-base" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#enroll-form" className="btn-primary text-sm py-2.5 w-full text-center block">
                  Apliko Tani
                </a>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-gray-400 text-sm mt-6">* Çmimet e treguara janë indikative. Kontaktoni ne për informacionin më të fundit dhe zbritjet e disponueshme.</p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll-form" className="section-pad bg-white">
        <div className="container-max mx-auto max-w-2xl">
          <SectionHeader label="Apliko Tani" title="Fillo Aplikimin Tënd" sub="Plotëso formularin më poshtë dhe ekipi ynë i pranimeve do t'ju kthejë përgjigje brenda një dite pune." />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}}
                className="text-center card p-12">
                <div className="text-7xl mb-4">🎉</div>
                <h3 className="font-extrabold text-2xl text-dark mb-2">Aplikimi u Pranua!</h3>
                <p className="text-gray-500 leading-relaxed">Faleminderit që aplikuat në Akademinë Yjet e Vegjël. Ekipi ynë i pranimeve do t'ju kontaktojë brenda 24 orëve për të diskutuar hapat e ardhshëm.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">Dërgo një Aplikim Tjetër</button>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{opacity:0}} animate={{opacity:1}}
                onSubmit={handleSubmit}
                className="card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Emri i Prindit / Kujdestarit *</label>
                    <input required name="parentName" value={form.parentName} onChange={handleChange}
                      placeholder="Jonida Hoxha"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Adresa Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="jonida@email.com"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Numri i Telefonit *</label>
                    <input required name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+355 69 000 0000"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Emri i Plotë i Fëmijës *</label>
                    <input required name="childName" value={form.childName} onChange={handleChange}
                      placeholder="Ema Hoxha"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Data e Lindjes së Fëmijës *</label>
                    <input required type="date" name="dob" value={form.dob} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1.5">Programi i Preferuar *</label>
                    <select required name="program" value={form.program} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors bg-white">
                      <option value="">Zgjidhni një program...</option>
                      <option value="Çerdhe">Çerdhe (6–18 muaj)</option>
                      <option value="Fëmijë të Vegjël">Fëmijë të Vegjël (18 muaj – 3 vjet)</option>
                      <option value="Parashkollor">Parashkollor (3–4 vjet)</option>
                      <option value="Para-Klasa">Para-Klasa (4–5 vjet)</option>
                      <option value="Pas Shkollës">Pas Shkollës</option>
                      <option value="Kamp Veror">Kamp Veror</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-1.5">Mesazh Shtesë (Opsional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tregoni për nevojat, interesat e fëmijës tuaj ose çdo pyetje që keni..."
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors resize-none"/>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" required id="agree" className="mt-1 accent-primary w-4 h-4"/>
                  <label htmlFor="agree" className="text-sm text-gray-500">
                    Pajtohem me <span className="text-primary font-bold">Politikën e Privatësisë</span> të Akademisë Yjet e Vegjël dhe pranoj të kontaktohem për aplikimin tim.
                  </label>
                </div>
                {error && (
                  <p className="text-red-500 text-sm font-semibold text-center bg-red-50 px-4 py-3 rounded-2xl">
                    ⚠️ {error}
                  </p>
                )}
                <button type="submit" disabled={loading}
                  className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? '⏳ Duke dërguar...' : '🚀 Dërgo Aplikimin'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-cream">
        <div className="container-max mx-auto max-w-3xl">
          <SectionHeader label="Pyetjet e Shpeshta" title="Pyetje të Shpeshta" sub="Gjithçka që duhet të dini për regjistrimin e fëmijës tuaj në Yjet e Vegjël." />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}
                className="bg-white rounded-3xl overflow-hidden shadow-soft">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-extrabold text-dark pr-4">{faq.q}</span>
                  <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration:0.3 }}
                    className="shrink-0 text-primary">
                    <FaChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }}
                      exit={{ height:0, opacity:0 }} transition={{ duration:0.3 }}
                      className="overflow-hidden">
                      <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
