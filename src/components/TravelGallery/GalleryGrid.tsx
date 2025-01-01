import React from 'react';

interface GalleryGridProps {
  images: string[];
  onImageClick: (image: string) => void;
}

export const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image}
            alt={`Foto perjalanan ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
};