import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.CLOUDINARY_API_KEY);
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
