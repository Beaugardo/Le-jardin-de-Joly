
import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, ToyBrick, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const CycleDetail = ({ 
  icon: Icon, 
  title, 
  age, 
  desc, 
  activities, 
  color, 
  image, 
  reverse = false 
}: { 
  icon: any, 
  title: string, 
  age: string, 
  desc: string, 
  activities: string[], 
  color: string, 
  image: string,
  reverse?: boolean
}) => (
  <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center py-20 border-b border-gray-100 last:border-0`}>
    <div className="flex-1 space-y-8">
      <div className="space-y-4">
        <div className={`w-16 h-16 rounded-2xl bg-${color}/10 text-${color} flex items-center justify-center`}>
          <Icon size={32} />
        </div>
        <div>
          <span className={`text-${color} font-bold uppercase tracking-widest text-sm`}>{age}</span>
          <h2 className="text-4xl font-display font-bold text-gray-800 mt-1">{title}</h2>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg">{desc}</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-gray-800 text-xl">Activités principales :</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.map((act, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 size={18} className={`text-${color} shrink-0`} />
              {act}
            </li>
          ))}
        </ul>
      </div>
      <Link 
        to="/admissions" 
        className={`inline-flex items-center gap-2 px-8 py-4 bg-${color} text-white font-bold rounded-full shadow-lg shadow-${color}/20 hover:scale-105 transition-all`}
      >
        Inscrire mon enfant <ArrowRight size={20} />
      </Link>
    </div>
    <div className="flex-1 w-full">
      <div className="relative">
        <div className={`absolute -inset-4 bg-${color}/10 rounded-[48px] -rotate-2`}></div>
        <img src={image} alt={title} className="relative z-10 w-full rounded-[40px] shadow-2xl aspect-[4/3] object-cover" />
      </div>
    </div>
  </section>
);

export default function Cycles() {
  return (
    <div className="pb-32">
      <header className="bg-joly-blue/5 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <h1 className="text-5xl font-display font-extrabold text-joly-greenDeep">Nos Programmes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Chaque cycle est pensé pour répondre aux besoins spécifiques de l'enfant à chaque stade de son développement.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 divide-y divide-gray-100">
        <CycleDetail 
          icon={Baby}
          title="Garderie"
          age="0 à 2 ans"
          desc="Un nid douillet où la priorité est la sécurité affective et l'éveil en douceur. Nous respectons le rythme de sommeil et les besoins alimentaires de chaque bébé."
          activities={[
            "Éveil sensoriel (musique, textures)",
            "Motricité libre et massages",
            "Contes et berceuses",
            "Jeux d'eau et de sable",
            "Exploration des couleurs",
            "Premières interactions sociales"
          ]}
          color="joly-peach"
          image="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
        />

        <CycleDetail 
          icon={ToyBrick}
          title="Crèche"
          age="2 à 3 ans"
          desc="L'âge de l'exploration ! Nous encourageons l'autonomie à travers le jeu libre et dirigé, tout en développant le langage et la motricité fine."
          activities={[
            "Ateliers de peinture et dessin",
            "Jeux de construction",
            "Parcours de motricité",
            "Chants et comptines",
            "Introduction au pot (autonomie)",
            "Découverte de la nature"
          ]}
          color="joly-green"
          image="https://images.unsplash.com/photo-1566315282520-21d95015b60e?auto=format&fit=crop&q=80&w=800"
          reverse
        />

        <CycleDetail 
          icon={GraduationCap}
          title="Maternelle"
          age="3 à 5 ans"
          desc="Préparation au CP avec un programme structuré. L'enfant apprend à structurer sa pensée, à enrichir son vocabulaire et à vivre sereinement en groupe."
          activities={[
            "Pré-lecture et graphisme",
            "Découverte des mathématiques",
            "Anglais ludique",
            "Expression corporelle / Danse",
            "Projets thématiques annuels",
            "Éducation civique et morale"
          ]}
          color="joly-blue"
          image="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=800"
        />
      </div>
    </div>
  );
}
