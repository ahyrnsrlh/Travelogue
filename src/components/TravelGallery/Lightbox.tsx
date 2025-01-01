import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  image: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const Lightbox = ({ image, onClose, onPrev, onNext, hasPrev, hasNext }: LightboxProps) => {
  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition"
      >
        <X className="w-8 h-8" />
      </button>

      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      <img
        src={image}
        alt="Foto perjalanan"
        className="max-w-[90vw] max-h-[90vh] object-contain"
      />
    </div>
  );
};