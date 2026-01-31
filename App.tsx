
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  School, 
  Layers, 
  Camera, 
  UserPlus, 
  Mail, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

import HomePage from './pages/Home.tsx';
import SchoolPage from './pages/School.tsx';
import CyclesPage from './pages/Cycles.tsx';
import SchoolLifePage from './pages/SchoolLife.tsx';
import AdmissionsPage from './pages/Admissions.tsx';
import ContactPage from './pages/Contact.tsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Accueil', path: '/', icon: <HomeIcon size={20} /> },
    { name: "L'École", path: '/ecole', icon: <School size={20} /> },
    { name: 'Nos Cycles', path: '/cycles', icon: <Layers size={20} /> },
    { name: 'Vie Scolaire', path: '/vie-scolaire', icon: <Camera size={20} /> },
    { name: 'Admissions', path: '/admissions', icon: <UserPlus size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-14 h-14 transition-transform group-hover:scale-110">
                <img 
                  src="Le Jardin de Joly.jpg" 
                  alt="Logo Le Jardin de Joly" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl text-joly-blue">Le Jardin de Joly</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1 font-semibold px-3 py-2 rounded-full transition-all duration-200 ${
                  location.pathname === link.path 
                  ? 'bg-joly-blue text-white shadow-md transform -translate-y-0.5' 
                  : 'text-gray-600 hover:text-joly-blue hover:bg-joly-blue/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-joly-greenDeep hover:bg-joly-green/10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-semibold ${
                  location.pathname === link.path
                    ? 'bg-joly-blue text-white'
                    : 'text-gray-600 hover:bg-joly-blue/10 hover:text-joly-blue'
                }`}
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-joly-green/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="Le Jardin de Joly.jpg" alt="Logo" className="w-10 h-10 object-contain" />
            <h3 className="font-display font-bold text-2xl text-joly-blue">Le Jardin de Joly</h3>
          </div>
          <p className="text-gray-600 leading-relaxed italic">
            « L’endroit le plus sûr et épanouissant pour vos enfants »
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-joly-blue/10 flex items-center justify-center text-joly-blue hover:bg-joly-blue hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-joly-peach/10 flex items-center justify-center text-joly-peach hover:bg-joly-peach hover:text-white transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-display font-bold text-lg text-gray-800 uppercase tracking-wider">Liens rapides</h4>
          <ul className="space-y-2">
            <li><Link to="/ecole" className="text-gray-600 hover:text-joly-blue transition-colors">Notre Vision</Link></li>
            <li><Link to="/cycles" className="text-gray-600 hover:text-joly-blue transition-colors">Nos Cycles</Link></li>
            <li><Link to="/admissions" className="text-gray-600 hover:text-joly-blue transition-colors">S'inscrire</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-joly-blue transition-colors">Nous Contacter</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-bold text-lg text-gray-800 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-600">
              <MapPin size={20} className="text-joly-green shrink-0 mt-1" />
              <span>Adidogomé Douane, Lomé, Togo</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Phone size={20} className="text-joly-green shrink-0" />
              <span>(+228) 98737303 | 91203020</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Mail size={20} className="text-joly-green shrink-0" />
              <span>lejardindejoly@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-bold text-lg text-gray-800 uppercase tracking-wider">Horaires</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-joly-peach shrink-0" />
              <span>Lun - Ven : 06h00 - 18h00</span>
            </li>
            <li className="flex items-center gap-3 opacity-60">
              <Clock size={20} className="text-joly-peach shrink-0" />
              <span>Sam - Dim : Fermé</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Le Jardin de Joly. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/22898737303"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
  >
    <MessageCircle size={32} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
      Besoin d'aide ?
    </span>
  </a>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-joly-blue selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ecole" element={<SchoolPage />} />
            <Route path="/cycles" element={<CyclesPage />} />
            <Route path="/vie-scolaire" element={<SchoolLifePage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}
