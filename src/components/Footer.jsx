import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const quickLinks = [
  { to: '/about',      label: 'Rreth Nesh' },
  { to: '/programs',   label: 'Programet' },
  { to: '/services',   label: 'Shërbimet' },
  { to: '/teachers',   label: 'Mësuesit' },
  { to: '/gallery',    label: 'Galeria' },
  { to: '/events',     label: 'Ngjarjet & Lajmet' },
  { to: '/enrollment', label: 'Regjistrim' },
  { to: '/contact',    label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container-max px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-violet-400 rounded-2xl flex items-center justify-center text-xl">⭐</div>
              <div>
                <span className="font-extrabold text-lg block leading-none">Yjet e Vegjël</span>
                <span className="text-xs text-primary font-semibold tracking-wider">Akademia</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Një qendër premium e mësimit të hershëm ku potenciali i çdo fëmije shkëlqen. Duke ushqyer mendjet kuriozë që nga viti 2010.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook />,  href: '#', color: 'hover:bg-blue-600' },
                { icon: <FaInstagram />, href: '#', color: 'hover:bg-pink-500' },
                { icon: <FaYoutube />,   href: '#', color: 'hover:bg-red-600' },
                { icon: <FaTwitter />,   href: '#', color: 'hover:bg-sky-500' },
              ].map((s, i) => (
                <a key={i} href={s.href}
                  className={`w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-sm ${s.color} transition-all duration-300 hover:scale-110`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Lidhje të Shpejta</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-gray-400 text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-5">Programet Tona</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['🍼 Çerdhe (6m–1vit)', '🧸 Fëmijë të Vegjël (1–2vj)', '🎨 Parashkollor (3–4vj)', '📚 Para-Klasa (4–5vj)', '🌟 Pas Shkollës', '☀️ Kamp Veror'].map(p => (
                <li key={p} className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-5">Na Kontakto</h4>
            <ul className="space-y-3 text-gray-400 text-sm mb-6">
              <li className="flex items-start gap-2"><MdLocationOn className="text-primary mt-0.5 shrink-0" size={16}/> Rruga e Diellit 123, Tiranë</li>
              <li className="flex items-center gap-2"><MdPhone className="text-primary shrink-0" size={16}/> +355 69 123 4567</li>
              <li className="flex items-center gap-2"><MdEmail className="text-primary shrink-0" size={16}/> info@yjetevegjelakademia.al</li>
            </ul>
            <h4 className="font-bold text-sm mb-3">Buletini</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email-i juaj"
                className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 border border-white/10"/>
              <button className="bg-primary rounded-xl px-3 py-2 text-sm font-bold hover:bg-primary/80 transition-colors">→</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>© 2026 Akademia Yjet e Vegjël. Të gjitha të drejtat e rezervuara.</p>
          <p className="flex items-center gap-1">Bërë me <span className="text-primary">❤️</span> për mësuesit e vegjël</p>
        </div>
      </div>
    </footer>
  );
}
