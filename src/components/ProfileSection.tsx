import React from 'react';
import { User } from '../types';
import { MapPin, Calendar, Image as ImageIcon } from 'lucide-react';

interface ProfileSectionProps {
  user: User;
  entries: Array<{
    id: string;
    title: string;
    location: string;
    date: string;
    coverImage: string;
  }>;
}

export const ProfileSection = ({ user, entries }: ProfileSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        
        <div className="relative px-6 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 mb-8">
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 mt-1">{user.bio || 'Travel enthusiast'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entries.map(entry => (
              <div
                key={entry.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={entry.coverImage}
                  alt={entry.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {entry.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{entry.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mt-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{entry.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};