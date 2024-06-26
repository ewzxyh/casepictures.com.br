// app/page.tsx
import React from 'react';
import ImageUpload from '../components/ImageUpload';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Upload de Imagens com Cloudinary</h1>
      <ImageUpload />
    </div>
  );
};

export default HomePage;
