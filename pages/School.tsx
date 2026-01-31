
import React from 'react';
import { Target, Users, Shield, Apple, Sparkles, BookOpen } from 'lucide-react';

const ValueItem = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <div className="flex gap-6 items-start">
    <div className={`shrink-0 w-16 h-16 rounded-2xl bg-${color}/10 text-${color} flex items-center justify-center`}>
      <Icon size={32} />
    </div>
    <div className="space-y-2">
      <h3 className="text-2xl font-display font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function School() {
  return (
    <div className="pb-32">
      {/* Header */}
      <header className="bg-joly-green/5 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-display font-extrabold text-joly-greenDeep">Notre École</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fondée sur la passion de l'éducation, notre école est un havre de paix dédié au développement harmonieux des tout-petits.
          </p>
        </div>
      </header>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-joly-greenDeep flex items-center gap-3">
              <Target className="text-joly-peach" /> Notre Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous aspirons à être la référence en matière d'éducation préscolaire en offrant un cadre où l'innovation pédagogique rencontre la chaleur humaine. Notre vision est de former des enfants confiants, créatifs et respectueux, prêts à devenir les citoyens de demain.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-joly-greenDeep flex items-center gap-3">
              <Sparkles className="text-joly-yellow" /> Notre Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Assurer le bien-être, la sécurité et l'éveil de chaque enfant à à travers un programme éducatif équilibré, des activités ludiques et un accompagnement individualisé. Nous travaillons main dans la main avec les parents pour une transition sereine vers le monde scolaire.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" 
            alt="Activités au Jardin de Joly" 
            className="rounded-[48px] shadow-2xl border-4 border-white"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-joly-peach rounded-full flex items-center justify-center text-center p-4 text-white font-bold leading-tight shadow-xl floating">
            Un cadre<br/>idyllique<br/>pour grandir
          </div>
        </div>
      </section>

      {/* Method & Values */}
      <section className="bg-joly-beige py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-joly-greenDeep">Nos Fondements</h2>
            <p className="text-gray-600">Ce qui rend le Jardin de Joly unique et précieux pour votre famille.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <ValueItem 
              icon={BookOpen}
              title="Méthode Pédagogique"
              desc="Inspirée des meilleures pratiques mondiales (Montessori, Reggio), notre approche favorise l'apprentissage par l'expérience et la manipulation."
              color="joly-blue"
            />
            <ValueItem 
              icon={Users}
              title="Équipe Éducative"
              desc="Des professionnels passionnés, formés aux premiers secours et à la psychologie de l'enfant, dédiés au bonheur de vos petits."
              color="joly-peach"
            />
            <ValueItem 
              icon={Shield}
              title="Sécurité & Hygiène"
              desc="Un environnement ultra-propre, des locaux sécurisés avec surveillance vidéo et un contrôle strict des entrées/sorties."
              color="joly-green"
            />
            <ValueItem 
              icon={Apple}
              title="Alimentation Saine"
              desc="Des repas équilibrés et variés, préparés sur place avec des produits frais, adaptés aux besoins nutritionnels de chaque âge."
              color="joly-yellow"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-joly-greenDeep mb-4">Notre Équipe de Direction</h2>
          <p className="text-gray-600">Des visages familiers pour vous accueillir chaque matin.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: "Mme Marie Joly", role: "Fondatrice & Directrice", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" },
            { name: "Jean-Baptiste Koffi", role: "Responsable Pédagogique", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
            { name: "Aïcha Touré", role: "Coordinatrice Petite Enfance", img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=400" },
          ].map((member, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="relative overflow-hidden rounded-[32px] aspect-[4/5]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold text-gray-800">{member.name}</h4>
                <p className="text-joly-peach font-semibold uppercase text-sm tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
