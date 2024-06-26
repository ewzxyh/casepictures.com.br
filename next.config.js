// next.config.js

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Usar o SWC para minificação
    images: {
      domains: ['res.cloudinary.com'], // Adicione 'res.cloudinary.com' à lista de domínios permitidos
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    experimental: {
      serverComponentsExternalPackages: ['@cloudinary/url-gen'], // Para suportar pacotes externos no lado do servidor
    },
    webpack(config, { isServer }) {
      if (!isServer) {
        // Configurações específicas para o lado do cliente
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }
  
      // Adicione suas outras configurações do Webpack aqui
      return config;
    },
    env: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    },
  };
  
  module.exports = nextConfig;
  