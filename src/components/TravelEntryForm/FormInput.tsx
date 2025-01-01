import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: LucideIcon;
  error?: string;
  rows?: number;
}

export const FormInput = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  rows
}: FormInputProps) => {
  const inputClasses = `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${
    error ? 'border-red-500' : 'border-gray-300'
  }`;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {label}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          rows={rows || 4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};