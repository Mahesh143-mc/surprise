import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Trophy } from 'lucide-react';

export const HeartCatchGame = () => {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; left: number }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 90 }
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const catchHeart = (id: number) => {
    setScore(s => s + 1);
    setHearts(prev => prev.filter(h => h.id !== id));
  };

  return (
    <div className="glass rounded-3xl p-6 overflow-hidden relative min-h-[400px] flex flex-col items-center">
      <div className="flex justify-between w-full mb-4 z-10">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Heart size={20} className="text-pink-500 fill-pink-500" />
          Catch the Hearts!
        </h3>
        <div className="bg-white/10 px-4 py-1 rounded-full text-sm font-bold text-white flex items-center gap-2">
          <Trophy size={16} className="text-yellow-400" />
          Score: {score}
        </div>
      </div>

      {!isPlaying ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 z-10">
          <p className="text-white/70 text-center max-w-xs">
            How many hearts can you catch for our friendship?
          </p>
          <button
            onClick={() => setIsPlaying(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-2xl transition-all"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div ref={gameRef} className="absolute inset-0 pt-16">
          <AnimatePresence>
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 450, opacity: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 3, ease: 'linear' }}
                onMouseEnter={() => catchHeart(heart.id)}
                onClick={() => catchHeart(heart.id)}
                className="absolute cursor-pointer text-pink-500 hover:text-pink-400 transition-colors p-2"
                style={{ left: `${heart.left}%` }}
              >
                <Heart size={32} fill="currentColor" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {score >= 10 && !isPlaying && (
        <div className="mt-4 text-pink-400 font-bold animate-bounce">
          You're a pro at catching love! ❤️
        </div>
      )}
    </div>
  );
};
