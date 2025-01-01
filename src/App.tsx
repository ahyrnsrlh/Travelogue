import React from 'react';
import { Hero } from './components/Hero';
import { TravelEntryForm } from './components/TravelEntryForm';
import { TravelGallery } from './components/TravelGallery';
import { ProfileSection } from './components/ProfileSection';

// Sample data
const sampleUser = {
  id: '1',
  name: 'Budi Santoso',
  email: 'budi@example.com',
  bio: 'Pecinta petualangan yang senang menjelajahi keindahan Indonesia.',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
};

const sampleEntries = [
  {
    id: '1',
    title: 'Keindahan Pantai Nusa Penida',
    location: 'Nusa Penida, Bali',
    date: '2024-03-15',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3',
  },
  {
    id: '2',
    title: 'Pendakian Gunung Rinjani',
    location: 'Gunung Rinjani, Lombok',
    date: '2024-02-20',
    coverImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3',
  },
  {
    id: '3',
    title: 'Wisata Budaya Borobudur',
    location: 'Magelang, Jawa Tengah',
    date: '2024-01-10',
    coverImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3',
  },
];

const sampleGalleryImages = [
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3',
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Galeri Perjalanan Anda</h2>
        <TravelGallery images={sampleGalleryImages} />
      </div>
      
      <div className="bg-white py-16">
        <TravelEntryForm />
      </div>
      
      <ProfileSection user={sampleUser} entries={sampleEntries} />
    </div>
  );
}

export default App;