import React from 'react';
import { motion } from 'motion/react';
import { PolaroidWall } from './PolaroidWall';
import { PhotoGallery } from './PhotoGallery';
import { memories } from '../data/content';
import { Camera, Clock, Star, ArrowLeft } from 'lucide-react';

interface MemoriesPageProps {
  onBack: () => void;
}

export const MemoriesPage = ({ onBack }: MemoriesPageProps) => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-6 max-w-4xl mx-auto space-y-24 relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </motion.button>
        <h1 className="text-3xl font-serif font-bold text-white">Our Memories</h1>
      </div>

      {/* Polaroid Wall */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400">
            <Camera size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Captured Moments</h2>
        </div>
        <PolaroidWall />
      </section>

      {/* Memory Timeline */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400">
            <Clock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Our Journey</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          
          <div className="space-y-12">
            {memories.map((memory, idx) => (
              <motion.div
                key={idx}
                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="glass rounded-3xl overflow-hidden group">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">{memory.date}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{memory.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{memory.description}</p>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] z-10 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Star size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Memory Gallery</h2>
        </div>
        <PhotoGallery />
      </section>

      {/* Footer */}
      <div className="text-center pt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-2xl transition-all"
        >
          Back to Main Page
        </motion.button>
      </div>
    </div>
  );
};
