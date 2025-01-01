import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  file: File;
  onRemove: () => void;
}

export const ImagePreview = ({ file, onRemove }: ImagePreviewProps) => {
  const imageUrl = React.useMemo(() => URL.createObjectURL(file), [file]);

  React.useEffect(() => {
    return () => URL.revokeObjectURL(imageUrl);
  }, [imageUrl]);

  return (
    <div className="group relative aspect-square">
      <img
        src={imageUrl}
        alt={file.name}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
        <button
          onClick={onRemove}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          title="Hapus gambar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="absolute bottom-2 left-2 right-2 text-xs text-white bg-black/50 rounded px-2 py-1 truncate">
        {file.name}
      </p>
    </div>
  );
};