import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { testimonials } from '../data/testimonials';
import SectionHeader from '../components/SectionHeader';

function Stars({ n = 5 }) {
  return <div className="flex gap-0.5">{[...Array(n)].map((_, i) => <span key={i} className="text-sunshine text-lg">★</span>)}</div>;
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-gradient-to-br from-primary/5 via-cream to-secondary/5">
      <div className="container-max mx-auto">
        <SectionHeader
          label="Vlerësime Prindërore"
          title="Çfarë Thonë Familjet Tona"
          sub="Mos u mbështetni vetëm tek fjalët tona — dëgjoni nga familjet që na besojnë të dashurit e tyre më të çmuar."
        />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12">
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-3xl p-6 shadow-card h-full flex flex-col">
                  <Stars n={t.rating} />
                  <p className="text-gray-600 text-sm leading-relaxed my-4 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"/>
                    <div>
                      <p className="font-bold text-dark text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
