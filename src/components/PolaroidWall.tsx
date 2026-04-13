import React from 'react';
import { motion } from 'motion/react';

const photos = [
  { url: "src/images/b1.jpeg", caption: "That one sunset..." },
  { url: "src/images/b2.jpeg", caption: "Coffee dates ☕" },
  { url: "src/images/b3.jpeg", caption: "Bestie vibes ✨" },
  { url: "src/images/b5.jpeg", caption: "Forever smiling" },
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
