import React from 'react';
import { Compass, Map, Camera, Book } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Catat Perjalanan',
    description: 'Dokumentasikan setiap momen perjalanan Anda'
  },
  {
    icon: Camera,
    title: 'Koleksi Foto',
    description: 'Simpan dan atur foto-foto perjalanan dengan mudah'
  },
  {
    icon: Book,
    title: 'Cerita Perjalanan',
    description: 'Bagikan pengalaman unik dari setiap petualangan'
  }
];

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-lg"></div>
          <Compass className="w-20 h-20 text-indigo-600 animate-pulse relative" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Travelogue
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl">
          Abadikan setiap momen perjalanan Anda dengan cara yang indah dan bermakna
        </p>
        
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transform transition hover:scale-105 shadow-lg hover:shadow-xl">
          Mulai Perjalanan Anda
        </button>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="mb-4 text-indigo-600 group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};