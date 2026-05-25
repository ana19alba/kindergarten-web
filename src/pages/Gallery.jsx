import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeUp, staggerContainer } from '../animations/variants';
import CTABanner from '../sections/CTABanner';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = ['Të Gjitha', 'Klasë', 'Jashtë', 'Ngjarje', 'Arte & Punë Dore', 'Sport'];

const galleryItems = [
  { id:1,  cat:'Klasë',           label:'Koha e Tregimeve',     img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80', span:'col-span-2' },
  { id:2,  cat:'Jashtë',          label:'Eksplorimi i Kopshtit', img:'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80' },
  { id:3,  cat:'Arte & Punë Dore',label:'Pikturë me Gishta',     img:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80' },
  { id:4,  cat:'Ngjarje',         label:'Dita Vjetore e Sportit', img:'https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&q=80' },
  { id:5,  cat:'Klasë',           label:'Zbulim Shkencor',       img:'https://images.unsplash.com/photo-1532009324734-20a7a5813719?w=700&q=80' },
  { id:6,  cat:'Jashtë',          label:'Argëtim në Lojë',       img:'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=700&q=80', span:'col-span-2' },
  { id:7,  cat:'Sport',           label:'Joga e Mëngjesit',      img:'https://images.unsplash.com/photo-1599751449318-8f6b4b4e0e91?w=700&q=80' },
  { id:8,  cat:'Arte & Punë Dore',label:'Skulpturë me Baltë',    img:'https://images.unsplash.com/photo-1544717302-de2d4265fba3?w=700&q=80' },
  { id:9,  cat:'Ngjarje',         label:'Koncert Krishtlindjesh', img:'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=700&q=80' },
  { id:10, cat:'Klasë',           label:'Blloqe Matematike',     img:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80' },
  { id:11, cat:'Jashtë',          label:'Shëtitje në Natyrë',    img:'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80' },
  { id:12, cat:'Sport',           label:'Lojëra Ekipore',        img:'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=700&q=80' },
];

export default function Gallery() {
  const [active, setActive]     = useState('Të Gjitha');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'Të Gjitha' ? galleryItems : galleryItems.filter(g => g.cat === active);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    const idx = filtered.findIndex(g => g.id === lightbox.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{ background:'linear-gradient(135deg,#EDE9FE,#F5F3FF,#E0E7FF)' }}>
        <div className="container-max px-4 mx-auto">
          <span className="section-label">Galeria e Fotove</span>
          <h1 className="section-title mt-2 mb-4">Momente <span className="text-primary">Gëzimi</span> &amp; Mësimi</h1>
          <p className="section-sub mx-auto">Një glimpsë në botën e mrekullueshme të Yjet e Vegjël — ku çdo ditë është një aventurë e re.</p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 bg-white sticky top-[72px] z-30 shadow-soft">
        <div className="container-max mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-cream text-dark hover:bg-primary/10'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="section-pad bg-white">
        <div className="container-max mx-auto">
          <motion.div
            variants={staggerContainer} initial="hidden" animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity:0, scale:0.9 }}
                  onClick={() => openLightbox(item)}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer group shadow-soft
                    ${item.span || ''}`}>
                  <img src={item.img} alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    flex items-end p-4">
                    <span className="text-white font-extrabold text-sm bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.cat}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            <button onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
              <FaTimes />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
              <FaChevronLeft />
            </button>
            <motion.div
              key={lightbox.id}
              initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.8, opacity:0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl">
              <img src={lightbox.img.replace('w=700','w=1200')} alt={lightbox.label} className="w-full max-h-[75vh] object-cover"/>
              <div className="bg-white p-4 flex items-center justify-between">
                <div>
                  <p className="font-extrabold text-dark">{lightbox.label}</p>
                  <p className="text-sm text-gray-400">{lightbox.cat}</p>
                </div>
                <span className="text-sm text-gray-400">
                  {filtered.findIndex(g => g.id === lightbox.id) + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats strip */}
      <section className="py-12 bg-primary">
        <div className="container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white px-4">
          {[
            { n:'500+', label:'Momente të Lumtura' },
            { n:'12',   label:'Albume' },
            { n:'50+',  label:'Ngjarje të Fotografuara' },
            { n:'∞',    label:'Kujtime të Bëra' },
          ].map((s,i) => (
            <div key={i}>
              <p className="font-extrabold text-4xl">{s.n}</p>
              <p className="text-white/80 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
