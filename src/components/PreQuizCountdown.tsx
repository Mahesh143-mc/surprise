import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Sparkles, Gift } from 'lucide-react';

interface PreQuizCountdownProps {
  onComplete: () => void;
}

export const PreQuizCountdown = ({ onComplete }: PreQuizCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false
  });

  useEffect(() => {
    const targetDate = new Date('April 14, 2026 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isFinished: true }));
        clearInterval(timer);
        // Automatically proceed if finished
        setTimeout(() => onComplete(), 2000);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isFinished: false
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-20 h-24 md:w-28 md:h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center mb-3 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-4xl md:text-6xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-bold">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      <AnimatePresence mode="wait">
        {!timeLeft.isFinished ? (
          <motion.div
            key="countdown-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center space-y-12 max-w-4xl w-full"
          >
            <div className="space-y-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-500/20 text-pink-400 mb-4"
              >
                <Calendar size={40} />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
                The Grand Surprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Begins In...</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="pt-12 space-y-6">
              <div className="flex items-center justify-center gap-3 text-white/30 text-sm font-medium uppercase tracking-widest">
                <Clock size={16} />
                Counting down to April 14th
              </div>
              
              {/* Skip Button for Testing - Hidden in production if needed, but useful for user now */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/80 border border-white/10 transition-all text-sm font-bold flex items-center gap-2 mx-auto"
              >
                <Sparkles size={16} />
                Unlock Early (For Testing)
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="finished"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow-2xl shadow-pink-500/50"
            >
              <Gift size={64} />
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white">IT'S TIME!</h2>
            <p className="text-white/60 text-xl italic">The wait is over. Let the magic begin...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
