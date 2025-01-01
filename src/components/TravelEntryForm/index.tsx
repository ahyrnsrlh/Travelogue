import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { CategorySelect } from './CategorySelect';
import { ImageUpload } from './ImageUpload';
import { FormInput } from './FormInput';
import { SuccessModal } from './SuccessModal';
import { validateTravelEntry } from '../../utils/validation';

interface FormData {
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
}

interface FormErrors {
  [key: string]: string;
}

export const TravelEntryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    location: '',
    date: '',
    category: ''
  });
  
  const [images, setImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi form
    const validationErrors = validateTravelEntry(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulasi pengiriman data ke server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form setelah berhasil
      setFormData({
        title: '',
        description: '',
        location: '',
        date: '',
        category: ''
      });
      setImages([]);
      setErrors({});
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Tambah Catatan Perjalanan</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Judul"
          value={formData.title}
          onChange={(value) => setFormData({ ...formData, title: value })}
          placeholder="Berikan judul untuk perjalanan Anda"
          error={errors.title}
        />

        <FormInput
          label="Cerita Perjalanan"
          type="textarea"
          value={formData.description}
          onChange={(value) => setFormData({ ...formData, description: value })}
          placeholder="Ceritakan pengalaman perjalanan Anda..."
          error={errors.description}
          rows={4}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Lokasi"
            value={formData.location}
            onChange={(value) => setFormData({ ...formData, location: value })}
            placeholder="Di mana lokasi perjalanan Anda?"
            icon={MapPin}
            error={errors.location}
          />

          <FormInput
            label="Tanggal"
            type="date"
            value={formData.date}
            onChange={(value) => setFormData({ ...formData, date: value })}
            icon={Calendar}
            error={errors.date}
          />
        </div>

        <CategorySelect
          value={formData.category}
          onChange={(category) => setFormData({ ...formData, category })}
          error={errors.category}
        />

        <ImageUpload
          images={images}
          onImageAdd={(newImages) => setImages([...images, ...newImages])}
          onImageRemove={(index) => setImages(images.filter((_, i) => i !== index))}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg transition shadow-lg hover:shadow-xl ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan Catatan Perjalanan'}
        </button>
      </form>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </div>
  );
};