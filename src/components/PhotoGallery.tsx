import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = [
 "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105819/b1_a5hr55.jpg",
  "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105823/b2_ttwwnq.jpg",
  "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105824/b3_or2da2.jpg",
  "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105824/b4_mf8bzn.jpg",
  "",
  "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105825/b7_sb9rhs.jpg",
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(img)}
            className="aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-white/10"
          >
            <img 
              src={img} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 md:p-12"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
