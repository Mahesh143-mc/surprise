import React from 'react';
import { motion } from 'motion/react';

const photos = [
  { url: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105819/b1_a5hr55.jpg", caption: "That one sunset..." },
  { url: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105823/b2_ttwwnq.jpg", caption: "Coffee dates ☕" },
  { url: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105824/b3_or2da2.jpg", caption: "Bestie vibes ✨" },
  { url: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105825/b7_sb9rhs.jpg", caption: "Forever smiling" },
];

export const PolaroidWall = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {photos.map((photo, idx) => (
        <motion.div
          key={idx}
          initial={{ rotate: idx % 2 === 0 ? -5 : 5, y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ rotate: 0, scale: 1.1, zIndex: 10 }}
          className="bg-white p-3 pb-10 shadow-xl rounded-sm transform transition-all duration-300"
        >
          <div className="w-48 h-57 overflow-hidden bg-gray-100">
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="mt-4 text-center font-serif text-gray-800 italic text-sm">
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
