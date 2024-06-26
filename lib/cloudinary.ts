// lib/cloudinary.ts
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Substitua pelo seu cloudName
  },
  url: {
    secure: true, // Use HTTPS para URLs
  },
});

export default cld;
