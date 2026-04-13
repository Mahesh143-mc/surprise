import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FF69B4', '#87CEEB']
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        animate={isOpen ? { scale: [1, 1.1, 1] } : { y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={handleOpen}
        className="relative cursor-pointer group"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, rotate: 20, opacity: 0 }}
              className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-1/2" />
              <div className="absolute w-full h-4 bg-yellow-400 top-1/2 -translate-y-1/2" />
              <div className="absolute h-full w-4 bg-yellow-400 left-1/2 -translate-x-1/2" />
              <Gift size={48} className="text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-32 h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles size={48} className="text-yellow-400 animate-pulse" />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass p-6 rounded-3xl max-w-xs"
              >
                <h3 className="text-xl font-bold text-white mb-2">Your Digital Gift!</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  என் முடிவில்லா ஆதரவு, முடிவில்லா சிரிப்புகள், மற்றும் எப்போதும் உன் #1 ரசிகனாக இருக்கும் ஒரு வாழ்நாள் subscription! 💖
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {!isOpen && (
        <p className="mt-6 text-white/50 text-sm font-medium animate-bounce">
          Tap to open your gift!
        </p>
      )}
    </div>
  );
};
