
import React, { useState } from 'react';
import { PlayCircle, Image as ImageIcon, Calendar, Music, Palette, Utensils } from 'lucide-react';

const ActivityItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all">
    <div className="w-16 h-16 rounded-full bg-joly-yellow/10 text-joly-yellow flex items-center justify-center">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-display font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function SchoolLife() {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1566315282520-21d95015b60e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <div className="pb-32">
      <header className="bg-joly-peach/5 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <h1 className="text-5xl font-display font-extrabold text-joly-greenDeep">Vie Scolaire</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Chaque jour est une nouvelle aventure riche en émotions et en apprentissages au Jardin de Joly.</p>
        </div>
      </header>

      {/* Daily Activities */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-joly-greenDeep mb-4">Activités Quotidiennes</h2>
          <p className="text-gray-600">Un emploi du temps équilibré entre éveil et repos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ActivityItem 
            icon={Palette}
            title="Arts & Création"
            desc="Peinture, modelage et bricolage pour stimuler l'imagination débordante des enfants."
          />
          <ActivityItem 
            icon={Music}
            title="Musique & Danse"
            desc="Éveil musical et expression corporelle pour développer le rythme et la coordination."
          />
          <ActivityItem 
            icon={Utensils}
            title="Pause Gourmet"
            desc="Des moments conviviaux pour apprendre à bien manger et découvrir de nouvelles saveurs."
          />
          <ActivityItem 
            icon={Calendar}
            title="Événements"
            desc="Sorties pédagogiques, fêtes de fin d'année et anniversaires célébrés ensemble."
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-joly-beige py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <h2 className="text-4xl font-display font-bold text-joly-greenDeep">Galerie Vivante</h2>
            <div className="flex bg-white p-2 rounded-full shadow-inner border border-gray-100">
              <button 
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-2 rounded-full font-bold transition-all ${activeTab === 'photos' ? 'bg-joly-blue text-white shadow-md' : 'text-gray-500 hover:text-joly-blue'}`}
              >
                Photos
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-2 rounded-full font-bold transition-all ${activeTab === 'videos' ? 'bg-joly-blue text-white shadow-md' : 'text-gray-500 hover:text-joly-blue'}`}
              >
                Vidéos
              </button>
            </div>
          </div>

          {activeTab === 'photos' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {photos.map((src, i) => (
                <div key={i} className="group relative overflow-hidden rounded-[24px] aspect-square shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <img src={src} alt="Galerie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-joly-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="text-white" size={32} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((v) => (
                <div key={v} className="relative aspect-video rounded-[32px] overflow-hidden group shadow-xl">
                  <img src={v === 1 ? "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"} alt="Vidéo" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="text-white w-20 h-20 opacity-80 group-hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                    {v === 1 ? "Spectacle de fin d'année" : "Atelier potager 2024"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
