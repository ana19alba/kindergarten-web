import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, scaleIn } from '../animations/variants';
import SectionHeader from '../components/SectionHeader';

const images = [
  { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80', label: 'Koha e Leximit',      span: 'lg:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', label: 'Klasa e Artit',       span: '' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', label: 'Fëmijë të Lumtur',   span: '' },
  { src: 'https://images.unsplash.com/photo-1617471346061-5d329ab9c574?w=400&q=80', label: 'Lojë Jashtë',        span: '' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80', label: 'Mësojmë Bashkë',     span: 'lg:col-span-2' },
];

export default function GalleryPreview() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Galeria"
          title="Momente Gëzimi & Mësimi"
          sub="Një glimpsë në botën magjike të Yjet e Vegjël — ku çdo ditë është një aventurë."
        />
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div key={i} variants={scaleIn}
              className={`relative overflow-hidden rounded-3xl ${img.span} group cursor-pointer`}
              style={{ height: i === 0 || i === 4 ? '280px' : '220px' }}>
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-secondary inline-flex items-center gap-2">
            Shiko Galerinë e Plotë →
          </Link>
        </div>
      </div>
    </section>
  );
}
