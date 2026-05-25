import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';
import Hero            from '../sections/Hero';
import Stats           from '../sections/Stats';
import AboutPreview    from '../sections/AboutPreview';
import ProgramsPreview from '../sections/ProgramsPreview';
import ServicesPreview from '../sections/ServicesPreview';
import DailyActivities from '../sections/DailyActivities';
import GalleryPreview  from '../sections/GalleryPreview';
import TeachersPreview from '../sections/TeachersPreview';
import Testimonials    from '../sections/Testimonials';
import EventsPreview   from '../sections/EventsPreview';
import CTABanner       from '../sections/CTABanner';

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Stats />
      <AboutPreview />
      <ProgramsPreview />
      <ServicesPreview />
      <DailyActivities />
      <GalleryPreview />
      <TeachersPreview />
      <Testimonials />
      <EventsPreview />
      <CTABanner />
    </motion.div>
  );
}
