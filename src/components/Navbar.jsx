import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdPhone, MdAccessTime, MdLocationOn } from 'react-icons/md';

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
    <>
      {/* ── Top info bar ── */}
      <div className="bg-primary text-white text-xs font-semibold hidden md:block">
        <div className="container-max px-4 md:px-8 mx-auto flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MdAccessTime size={14}/> E Hënë – E Premte: 7:30 – 18:00
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5">
              <MdPhone size={14}/> +355 69 123 4567
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5">
              <MdLocationOn size={14}/> Tiranë, Shqipëri
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: <FaFacebook size={13}/>, href: '#' },
              { icon: <FaInstagram size={13}/>, href: '#' },
              { icon: <FaYoutube size={13}/>, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href}
                className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'shadow-soft' : ''} bg-white`}>
        <div className="container-max px-4 md:px-8 mx-auto flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-violet-400 rounded-2xl flex items-center justify-center text-2xl shadow-glow group-hover:scale-110 transition-transform">
              ⭐
            </div>
            <div>
              <span className="font-extrabold text-lg text-dark leading-none block">Yjet e Vegjël</span>
              <span className="text-xs text-primary font-bold tracking-wider">Akademia</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                  ${isActive
                    ? 'text-primary bg-primary/10 font-bold'
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
              className="lg:hidden p-2 rounded-xl text-primary hover:bg-primary/10 transition-colors">
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
                {/* Mobile top info */}
                <div className="bg-primary/5 rounded-2xl p-3 mb-2 space-y-1.5">
                  <p className="text-xs text-primary font-semibold flex items-center gap-1.5"><MdAccessTime/> Hën–Pre: 7:30 – 18:00</p>
                  <p className="text-xs text-primary font-semibold flex items-center gap-1.5"><MdPhone/> +355 69 123 4567</p>
                </div>
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
    </>
  );
}
