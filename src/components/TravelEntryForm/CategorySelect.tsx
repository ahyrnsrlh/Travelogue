import React from 'react';
import { Tag } from 'lucide-react';

const categories = [
  { value: 'beach', label: 'Pantai' },
  { value: 'mountain', label: 'Pegunungan' },
  { value: 'culture', label: 'Budaya' },
  { value: 'city', label: 'Kota' },
  { value: 'nature', label: 'Alam' }
];

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const CategorySelect = ({ value, onChange, error }: CategorySelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Tag className="w-4 h-4 mr-2" />
        Kategori
      </label>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Pilih kategori</option>
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};