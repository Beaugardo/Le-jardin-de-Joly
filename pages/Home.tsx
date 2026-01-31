
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, Star, Quote, ArrowRight } from 'lucide-react';

const Hero = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-white via-joly-beige to-white pt-10 pb-24">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-joly-blue/10 text-joly-blue rounded-full font-bold text-sm">
          <Sparkles size={16} /> Élu meilleur établissement 2024
        </div>
        <h1 className="text-6xl lg:text-7xl font-display font-extrabold text-gray-800 leading-tight">
          Bienvenue au <span className="text-joly-blue">Jardin de Joly</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
          L’endroit le plus sûr et épanouissant pour vos enfants. Nous offrons un cadre bienveillant pour la garderie, la crèche et la maternelle.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/admissions" className="px-8 py-4 bg-joly-blue text-white font-bold rounded-full shadow-lg shadow-joly-blue/30 hover:scale-105 transition-all flex items-center gap-2">
            Inscrire mon enfant <ArrowRight size={20} />
          </Link>
          <Link to="/ecole" className="px-8 py-4 bg-white text-joly-greenDeep font-bold rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all">
            Découvrir l'école
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-joly-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <img 
          src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800" 
          alt="Enfants heureux au Jardin de Joly" 
          className="rounded-[60px] shadow-2xl border-8 border-white floating"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce">
          <div className="w-12 h-12 bg-joly-green rounded-full flex items-center justify-center text-white">
            <Heart fill="currentColor" />
          </div>
          <div>
            <p className="font-bold text-gray-800">100% Bienveillant</p>
            <p className="text-sm text-gray-500">Épanouissement garanti</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <section className="py-24 max-w-7xl mx-auto px-4">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-4xl font-display font-bold text-gray-800">Pourquoi nous choisir ?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Un environnement pensé exclusivement pour le bonheur et la sécurité de vos tout-petits.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        { icon: ShieldCheck, title: "Sécurité Maximale", desc: "Locaux sécurisés et personnel formé aux premiers secours.", color: "joly-blue" },
        { icon: Heart, title: "Amour & Soins", desc: "Une équipe passionnée qui traite chaque enfant comme un trésor.", color: "joly-peach" },
        { icon: Star, title: "Éveil Créatif", desc: "Des activités stimulantes pour révéler le génie de chaque enfant.", color: "joly-yellow" }
      ].map((f, i) => (
        <div key={i} className="p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-50 group">
          <div className={`w-16 h-16 rounded-2xl bg-${f.color}/10 text-${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <f.icon size={32} />
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">{f.title}</h3>
          <p className="text-gray-600 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-joly-blue/5 py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-gray-800">Paroles de Parents</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { text: "Le Jardin de Joly est une bénédiction. Ma fille y va avec le sourire chaque matin !", author: "Mme Koffi, maman de l'adorable Aïcha" },
          { text: "La propreté et la pédagogie sont irréprochables. Je recommande les yeux fermés.", author: "Mr. Amégan, papa de David" }
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm relative">
            <Quote className="absolute top-6 right-8 text-joly-blue/10" size={64} />
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-joly-yellow text-joly-yellow" />)}
            </div>
            <p className="text-xl text-gray-700 italic mb-6">"{t.text}"</p>
            <p className="font-bold text-joly-blue">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg mt-8" alt="Enfant africain heureux" />
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Bébé africain" />
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Enfant lisant" />
              <img src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg -mt-8" alt="Activités manuelles" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-gray-800">Une vie scolaire épanouissante</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Au Jardin de Joly, chaque journée est une fête. Nous combinons jeux, découvertes sensorielles et apprentissages fondamentaux pour préparer vos enfants au monde de demain.
              </p>
              <ul className="space-y-4">
                {["Repas sains et équilibrés", "Activités artistiques et musicales", "Sorties pédagogiques sécurisées"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-joly-green text-white flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/vie-scolaire" className="inline-block pt-4 text-joly-blue font-bold hover:underline">Voir notre galerie photo &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
