export const validateTravelEntry = (data: {
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
}) => {
  const errors: Record<string, string> = {};

  if (!data.title.trim()) {
    errors.title = 'Judul harus diisi';
  }

  if (!data.description.trim()) {
    errors.description = 'Deskripsi harus diisi';
  }

  if (!data.location.trim()) {
    errors.location = 'Lokasi harus diisi';
  }

  if (!data.date) {
    errors.date = 'Tanggal harus diisi';
  }

  if (!data.category) {
    errors.category = 'Kategori harus dipilih';
  }

  return errors;
};