import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  onClose: () => void;
}

export const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Berhasil Disimpan!
        </h3>
        
        <p className="text-gray-600 mb-4">
          Catatan perjalanan Anda telah berhasil disimpan. Anda dapat melihatnya di galeri perjalanan.
        </p>
        
        <button
          onClick={onClose}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};