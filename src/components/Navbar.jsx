import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { to: '/',           label: 'Kryefaqja' },
  { to: '/about',      label: 'Rreth Nesh' },
  { to: '/programs',   label: 'Programet' },
  { to: '/services',   label: 'Shërbimet' },
  { to: '/teachers',   label: 'Mësuesit' },
  { to: '/gallery',    label: 'Galeria' },
  { to: '/events',     label: 'Ngjarjet' },
  { to: '/contact',    label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="container-max px-4 md:px-8 mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center text-xl shadow-glow group-hover:scale-110 transition-transform">
            ⭐
          </div>
          <div>
            <span className="font-extrabold text-lg text-dark leading-none block">Yjet e Vegjël</span>
            <span className="text-xs text-primary font-semibold tracking-wider">Akademia</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                ${isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-600 hover:text-primary hover:bg-primary/5'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link to="/enrollment"
            className="hidden md:inline-flex items-center gap-2 btn-primary text-sm px-5 py-2.5">
            🎓 Regjistrohu
          </Link>
          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-card overflow-hidden">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl font-semibold transition-all
                    ${isActive ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-primary/5'}`}>
                  {l.label}
                </NavLink>
              ))}
              <Link to="/enrollment" className="btn-primary text-center mt-2">
                🎓 Regjistrohu Tani
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
