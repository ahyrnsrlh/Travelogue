import React, { useCallback, useState } from 'react';
import { Image as ImageIcon, Upload } from 'lucide-react';
import { ImagePreview } from './ImagePreview';
import { validateImage, compressImage } from '../../utils/imageUtils';

interface ImageUploadProps {
  images: File[];
  onImageAdd: (files: File[]) => void;
  onImageRemove: (index: number) => void;
  error?: string;
}

export const ImageUpload = ({
  images,
  onImageAdd,
  onImageRemove,
  error
}: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(async (files: FileList) => {
    setUploadError(null);
    const validFiles: File[] = [];

    for (const file of Array.from(files)) {
      const error = validateImage(file);
      if (error) {
        setUploadError(error);
        continue;
      }

      try {
        const compressedFile = await compressImage(file);
        validFiles.push(compressedFile);
      } catch (err) {
        console.error('Error compressing image:', err);
        setUploadError('Gagal memproses gambar');
      }
    }

    if (validFiles.length > 0) {
      onImageAdd(validFiles);
    }
  }, [onImageAdd]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  return (
    <div className="space-y-4">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
          ${isDragging
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-gray-300 hover:border-indigo-500'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="space-y-4">
          <Upload className="w-12 h-12 mx-auto text-gray-400" />
          <div>
            <p className="text-gray-600">
              Tarik dan lepas foto Anda di sini, atau{' '}
              <span className="text-indigo-600 font-medium">pilih file</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              JPG, PNG, atau WebP (max. 5MB)
            </p>
          </div>
        </div>
      </div>

      {(error || uploadError) && (
        <p className="text-sm text-red-500">{error || uploadError}</p>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((file, index) => (
            <ImagePreview
              key={`${file.name}-${index}`}
              file={file}
              onRemove={() => onImageRemove(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};