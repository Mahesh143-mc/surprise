import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Film, Music, Play, Heart, Star, Clapperboard, Disc } from 'lucide-react';

interface PoemPageProps {
  onBack: () => void;
}

const movieDedications = [
  {
    title: "Priyamaana Thozhi ",
    year: "2003",
    reason: "This movie reminds me of our friendship — pure, caring, and always supportive. Just like the story, our bond is filled with trust, laughter, and memories that will never fade.",
    image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105825/movie1_rcahfs.png",
    tag: "Friendship Goals"
  },
  {
    title: "Thiruchitrambalam",
    year: "2022",
    reason: "A beautiful story that shows how a simple friendship can slowly become the most important part of life. Just like in the movie, your presence makes every ordinary moment special.",
    image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105826/movie2_ldmljs.avif",
    tag: "Heartwarming"
  }
];

const songDedications = [
  {
    title: "Yaele Yaele Dosthu Da",
    artist: "",
    reason: "This song perfectly describes our friendship. No matter what happens, our bond stays strong and full of fun. A true dosthu like you is rare in life.",
    image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105826/song1_ibfa8v.jpg",
    icon: <Music size={24} />
  },
  {
    title: "Kattukuyilu",
    artist: "",
    reason: "This song brings joy and energy, just like you. Your laughter and lively nature make every moment brighter. Life feels more colorful with a friend like you.",
    image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1776105826/song_rzyfry.jpg",
    icon: <Disc size={24} />
  }
];

export const PoemPage = ({ onBack }: PoemPageProps) => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-6 max-w-5xl mx-auto space-y-24 relative z-10">
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
        <h1 className="text-3xl font-serif font-bold text-white">Dedications</h1>
      </div>

      {/* Intro Section */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/20 text-amber-400 mb-4"
        >
          <Film size={40} />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
          Cinema & Songs <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Dedicated to You</span>
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto text-lg italic">
          "Sometimes movies and music say what my heart feels better than I ever could."
        </p>
      </section>

      {/* Movies Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Clapperboard size={24} />
          </div>
          <h3 className="text-3xl font-bold text-white">Movie Dedications</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {movieDedications.map((movie, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass rounded-[2.5rem] overflow-hidden border-white/5 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
                    {movie.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-2xl font-bold text-white">{movie.title}</h4>
                  <p className="text-white/60 text-sm">{movie.year}</p>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed italic">
                  "{movie.reason}"
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Songs Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400">
            <Music size={24} />
          </div>
          <h3 className="text-3xl font-bold text-white">Song Dedications</h3>
        </div>

        <div className="space-y-6">
          {songDedications.map((song, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-3xl border-white/5 flex flex-col md:flex-row items-center gap-8 group hover:bg-white/10 transition-all"
            >
              <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden shrink-0 relative">
                <img 
                  src={song.image} 
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-white">{song.title}</h4>
                  <p className="text-orange-400 font-medium">{song.artist}</p>
                </div>
                <p className="text-white/60 leading-relaxed italic">
                  "{song.reason}"
                </p>
                <div className="flex justify-center md:justify-start gap-2">
                  <Heart size={18} className="text-orange-500" fill="currentColor" />
                  <Heart size={18} className="text-orange-500/50" fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="text-center pt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-white/10 hover:bg-white/20 text-white px-12 py-4 rounded-2xl transition-all font-bold border border-white/10"
        >
          Back to Main Page
        </motion.button>
      </div>
    </div>
  );
};
