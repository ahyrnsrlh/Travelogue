export interface TravelEntry {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  images: string[];
  category: 'beach' | 'mountain' | 'culture' | 'city' | 'nature';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}