import React, { useState } from 'react';
import { GalleryGrid } from './GalleryGrid';
import { Lightbox } from './Lightbox';

interface TravelGalleryProps {
  images: string[];
}

export const TravelGallery = ({ images }: TravelGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedImageIndex(null);
  const handlePrev = () => setSelectedImageIndex(prev => prev !== null ? Math.max(0, prev - 1) : null);
  const handleNext = () => setSelectedImageIndex(prev => prev !== null ? Math.min(images.length - 1, prev + 1) : null);

  return (
    <>
      <GalleryGrid
        images={images}
        onImageClick={(image) => setSelectedImageIndex(images.indexOf(image))}
      />

      {selectedImageIndex !== null && (
        <Lightbox
          image={images[selectedImageIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedImageIndex > 0}
          hasNext={selectedImageIndex < images.length - 1}
        />
      )}
    </>
  );
};