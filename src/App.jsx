import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar      from './components/Navbar';
import Footer      from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home       from './pages/Home';
import About      from './pages/About';
import Programs   from './pages/Programs';
import Services   from './pages/Services';
import Teachers   from './pages/Teachers';
import Gallery    from './pages/Gallery';
import Events     from './pages/Events';
import Enrollment from './pages/Enrollment';
import Contact    from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/programs"   element={<Programs />} />
            <Route path="/services"   element={<Services />} />
            <Route path="/teachers"   element={<Teachers />} />
            <Route path="/gallery"    element={<Gallery />} />
            <Route path="/events"     element={<Events />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
