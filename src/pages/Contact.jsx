import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeUp, fadeLeft, fadeRight, staggerContainer } from '../animations/variants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  { icon:<FaMapMarkerAlt className="text-2xl"/>, label:'Adresa',        value:'Rruga e Diellit 123\nTiranë, Shqipëri', color:'bg-primary/10 text-primary' },
  { icon:<FaPhone className="text-2xl"/>,        label:'Telefon',       value:'+355 69 123 4567', color:'bg-secondary/10 text-secondary' },
  { icon:<FaEnvelope className="text-2xl"/>,     label:'Email',         value:'info@yjetevegjelakademia.al', color:'bg-sunshine/20 text-yellow-600' },
  { icon:<FaClock className="text-2xl"/>,        label:'Orari i Zyrës', value:'Hën–Pre: 7:30 – 18:00\nSht: 9:00 – 13:00', color:'bg-mint/10 text-mint' },
];

export default function Contact() {
  const [form, setForm]           = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

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
          subject: `📩 Mesazh i Ri nga Faqja — ${form.subject}`,
          from_name: form.name,
          email: form.email,
          message: [
            `👤 Emri: ${form.name}`,
            `📧 Email: ${form.email}`,
            `📞 Telefon: ${form.phone || '—'}`,
            `📌 Subjekti: ${form.subject}`,
            `💬 Mesazhi: ${form.message}`,
          ].join('\n'),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name:'', email:'', phone:'', subject:'', message:'' });
      } else {
        setError('Ndodhi një gabim. Ju lutemi provoni sërish.');
      }
    } catch {
      setError('Nuk mund të dërgohej mesazhi. Kontrolloni lidhjen e internetit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{ background:'linear-gradient(135deg,#E8F4FD,#FFF0E6)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Na Kontakto</span>
          <h1 className="section-title mt-2 mb-4">Do të <span className="text-primary">Dëgjonim</span> me Kënaqësi</h1>
          <p className="section-sub mx-auto">Keni një pyetje, dëshironi të rezervoni një turne, ose thjesht dëshironi të thoni përshëndetje? Jemi gjithmonë të lumtur të ndihmojmë.</p>
        </div>
      </section>

      {/* Info cards */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((c,i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{y:-6}}
                className="card text-center hover:shadow-card transition-all duration-300">
                <div className={`w-14 h-14 ${c.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {c.icon}
                </div>
                <p className="font-extrabold text-dark text-base mb-1">{c.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{c.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form + Map row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <h2 className="font-extrabold text-3xl text-dark mb-2">Na Dërgoni një Mesazh</h2>
              <p className="text-gray-500 text-sm mb-8">Do t'ju kthejmë përgjigje brenda një dite pune.</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="ok" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}}
                    className="text-center card p-10">
                    <div className="text-6xl mb-4">💌</div>
                    <h3 className="font-extrabold text-xl text-dark mb-2">Mesazhi u Dërgua!</h3>
                    <p className="text-gray-500 text-sm">Faleminderit që na kontaktuat. Do t'ju kthejmë shpejt.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">Dërgo një Tjetër</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{opacity:0}} animate={{opacity:1}}
                    onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-dark mb-1.5">Emri i Plotë *</label>
                        <input required name="name" value={form.name} onChange={handleChange}
                          placeholder="Emri juaj i plotë"
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-dark mb-1.5">Adresa Email *</label>
                        <input required type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="ju@email.com"
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-dark mb-1.5">Telefon (Opsional)</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+355 69 000 0000"
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors"/>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-dark mb-1.5">Subjekti *</label>
                        <select required name="subject" value={form.subject} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors bg-white">
                          <option value="">Zgjidhni një subjekt...</option>
                          <option value="regjistrim">Pyetje Regjistrimi</option>
                          <option value="turne">Rezervim Turne Kampusi</option>
                          <option value="programe">Programet & Kurrikula</option>
                          <option value="tarifat">Tarifat Shkollore</option>
                          <option value="pergjithshme">Pyetje të Përgjithshme</option>
                          <option value="tjeter">Tjetër</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-dark mb-1.5">Mesazhi Juaj *</label>
                      <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                        placeholder="Shkruani mesazhin tuaj këtu..."
                        className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-dark text-sm transition-colors resize-none"/>
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm font-semibold text-center bg-red-50 px-4 py-3 rounded-2xl">
                        ⚠️ {error}
                      </p>
                    )}
                    <button type="submit" disabled={loading}
                      className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? '⏳ Duke dërguar...' : '✉️ Dërgo Mesazhin'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map placeholder + WhatsApp */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="space-y-6">
              {/* Map */}
              <div className="rounded-4xl overflow-hidden shadow-card h-72 bg-gradient-to-br from-sky/20 to-mint/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-3">🗺️</div>
                  <p className="font-extrabold text-dark text-lg">Akademia Yjet e Vegjël</p>
                  <p className="text-gray-500 text-sm">Rruga e Diellit 123, Tiranë</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                    className="inline-block mt-4 text-primary font-bold text-sm hover:underline">
                    Hap në Google Maps →
                  </a>
                </div>
                {/* Decorative dots */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-ping"/>
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full"/>
              </div>

              {/* WhatsApp button */}
              <a href="https://wa.me/355691234567" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-3xl bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg transition-colors shadow-soft hover:shadow-card">
                <FaWhatsapp className="text-2xl"/>
                Na Shkruaj në WhatsApp
              </a>

              {/* Quick info */}
              <div className="card space-y-4">
                <h3 className="font-extrabold text-dark text-lg">Informacion i Shpejtë</h3>
                {[
                  { emoji:'🅿️', label:'Parkim falas i disponueshëm në kampus' },
                  { emoji:'🚌', label:'Stacioni i autobusit 2 minuta ecje (Linja 14, 22)' },
                  { emoji:'♿', label:'Ambiente plotësisht të aksesueshme' },
                  { emoji:'📸', label:'Fotografimi lejohet gjatë turneve' },
                ].map((t,i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="text-xl">{t.emoji}</span>
                    {t.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tour booking CTA */}
      <section className="section-pad bg-primary">
        <div className="container-max mx-auto text-center text-white">
          <span className="text-5xl">🏫</span>
          <h2 className="font-extrabold text-4xl mt-4 mb-3">Rezervo një Turne Falas të Kampusit</h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Mënyra më e mirë për të përjetuar Yjet e Vegjël është të na vizitoni personalisht. Turnet zhvillohen të hënën – të enjten në 9:00 dhe 14:00.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+355691234567"
              className="inline-flex items-center gap-2 bg-white text-primary font-extrabold px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-glow">
              <FaPhone /> Telefono për të Rezervuar
            </a>
            <a href="mailto:info@yjetevegjelakademia.al"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-extrabold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
              <FaEnvelope /> Na Shkruaj Email
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
