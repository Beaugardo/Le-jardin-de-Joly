
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-32">
      <header className="bg-joly-yellow/5 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <h1 className="text-5xl font-display font-extrabold text-joly-greenDeep">Nous Contacter</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Nous sommes à votre écoute pour toute question ou demande de visite.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-gray-800">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-joly-blue/10 text-joly-blue flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Adresse</h4>
                    <p className="text-gray-600">Adidogomé Douane, non loin du Lycée Moderne 1, Lomé, Togo</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-joly-green/10 text-joly-green flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Téléphone</h4>
                    <p className="text-gray-600">(+228) 98737303</p>
                    <p className="text-gray-600">(+228) 91203020</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-joly-peach/10 text-joly-peach flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">lejardindejoly@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-gray-800">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-joly-blue hover:bg-joly-blue hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-joly-peach hover:bg-joly-peach hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/22898737303" target="_blank" className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-2 rounded-[40px] shadow-2xl overflow-hidden h-[400px] border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.303102170364!2d1.19895115!3d6.15189745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c51203595d%3A0x6283b63234d0800d!2sLom%C3%A9!5e0!3m2!1sfr!2stg!4v1708800000000!5m2!1sfr!2stg" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '32px' }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-[40px] shadow-lg p-10 border border-gray-50">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Votre nom complet" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none" />
                  <input type="email" placeholder="Votre adresse email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none" />
                </div>
                <input type="text" placeholder="Sujet" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none" />
                <textarea rows={5} placeholder="Votre message..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-joly-blue/10 transition-all outline-none resize-none"></textarea>
                <button type="submit" className="px-10 py-4 bg-joly-blue text-white font-bold rounded-2xl hover:bg-joly-blue/80 transition-all flex items-center gap-3">
                  Envoyer le message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
