import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionHeader({ label, title, sub, center = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className={`section-sub ${center ? 'mx-auto' : ''}`}>{sub}</p>}
    </motion.div>
  );
}
