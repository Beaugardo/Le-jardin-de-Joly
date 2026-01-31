
import React, { useState } from 'react';
import { FileText, ClipboardCheck, Info, HelpCircle, Send, CheckCircle } from 'lucide-react';

const Step = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="flex gap-6 items-start">
    <div className="shrink-0 w-12 h-12 rounded-full bg-joly-green text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-joly-green/20">
      {number}
    </div>
    <div className="space-y-1">
      <h3 className="text-xl font-display font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-32">
      <header className="bg-joly-green/5 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <h1 className="text-5xl font-display font-extrabold text-joly-greenDeep">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Rejoindre la famille du Jardin de Joly est simple. Suivez les étapes ci-dessous.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Information & Process */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-gray-800">Processus d'Inscription</h2>
            <div className="space-y-6">
              <Step number="1" title="Visite de l'école" desc="Prenez rendez-vous pour découvrir nos locaux et rencontrer l'équipe." />
              <Step number="2" title="Dossier d'inscription" desc="Remplissez le formulaire en ligne ou sur place." />
              <Step number="3" title="Entretien pédagogique" desc="Un moment d'échange pour mieux connaître votre enfant et ses besoins." />
              <Step number="4" title="Validation & Paiement" desc="Confirmation de la place après réception des frais d'inscription." />
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border-2 border-joly-yellow/20 space-y-6 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-gray-800 flex items-center gap-3">
              <FileText className="text-joly-yellow" /> Documents Requis
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3"><ClipboardCheck size={20} className="text-joly-green" /> Extrait de naissance de l'enfant</li>
              <li className="flex items-center gap-3"><ClipboardCheck size={20} className="text-joly-green" /> Carnet de vaccination à jour</li>
              <li className="flex items-center gap-3"><ClipboardCheck size={20} className="text-joly-green" /> 2 photos d'identité</li>
              <li className="flex items-center gap-3"><ClipboardCheck size={20} className="text-joly-green" /> Pièce d'identité des parents</li>
              <li className="flex items-center gap-3"><ClipboardCheck size={20} className="text-joly-green" /> Certificat médical d'aptitude</li>
            </ul>
          </div>

          <div className="bg-joly-blue/10 p-6 rounded-2xl flex gap-4 items-start">
            <Info className="text-joly-blue shrink-0 mt-1" />
            <p className="text-sm text-joly-blue font-medium leading-relaxed">
              Note : Les inscriptions sont ouvertes toute l'année scolaire sous réserve de places disponibles. Nous vous conseillons de réserver tôt pour la rentrée de septembre.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-joly-peach/5 rounded-full -mr-16 -mt-16"></div>
          
          {submitted ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 bg-joly-green rounded-full flex items-center justify-center text-white mx-auto shadow-xl animate-bounce">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-800">Merci beaucoup !</h2>
              <p className="text-gray-600 text-lg">Votre demande d'inscription a bien été reçue. Notre équipe vous contactera sous 48h pour fixer un rendez-vous.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-joly-blue text-white font-bold rounded-full hover:bg-joly-blue/80 transition-all"
              >
                Envoyer un autre dossier
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-display font-bold text-gray-800">Formulaire d'Intérêt</h2>
                <p className="text-gray-500">Remplissez ces quelques champs, nous nous occupons du reste.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nom du parent</label>
                    <input required type="text" className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-joly-blue focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none" placeholder="Ex: Mme Koffi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Téléphone</label>
                    <input required type="tel" className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-joly-blue focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none" placeholder="+228..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nom & Prénom de l'enfant</label>
                  <input required type="text" className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-joly-blue focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Âge de l'enfant</label>
                    <select required className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-joly-blue focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none bg-white">
                      <option value="">Sélectionner</option>
                      <option>Moins de 1 an</option>
                      <option>1 - 2 ans</option>
                      <option>2 - 3 ans</option>
                      <option>3 - 4 ans</option>
                      <option>4 - 5 ans</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Cycle souhaité</label>
                    <select required className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-joly-blue focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none bg-white">
                      <option value="">Sélectionner</option>
                      <option>Garderie</option>
                      <option>Crèche</option>
                      <option>Maternelle</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Questions ou besoins particuliers ?</label>
                  <textarea rows={4} className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-joly-blue focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none resize-none" placeholder="Une allergie ? Une préférence ? Dites-nous tout."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-joly-green hover:bg-joly-greenDeep text-white font-bold rounded-2xl shadow-xl shadow-joly-green/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                  Envoyer ma demande <Send size={18} />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
