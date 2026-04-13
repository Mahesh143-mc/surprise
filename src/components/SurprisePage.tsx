import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { memories, reasons, poem } from "../data/content";
import { Countdown } from "./Countdown";
import { GiftBox } from "./GiftBox";
import { HeartCatchGame } from "./HeartCatchGame";
import {
  Calendar,
  Camera,
  Heart,
  Mail,
  MessageSquare,
  Sparkles,
  Star,
  Clock,
  ChevronRight,
  ChevronLeft,
  Mic,
  Video,
  Play, Feather, Gift
} from "lucide-react";

interface SurprisePageProps {
  onNavigateToMemories: () => void;
  onNavigateToPoem: () => void;
  onNavigateToGift: () => void;
  onNavigateToStory: () => void;
}

export const SurprisePage = ({ 
  onNavigateToMemories, 
  onNavigateToPoem, 
  onNavigateToGift, 
  onNavigateToStory 
}: SurprisePageProps) => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-32 px-6 max-w-4xl mx-auto space-y-24 relative z-10">
      {/* Hero Section */}
       <section className="text-center space-y-10 py-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-pink-400 text-xs font-bold tracking-[0.2em] uppercase"
        >
          <Sparkles size={14} />
          It's Your Special Day
          <Sparkles size={14} />
        </motion.div>
        
        <div className="space-y-6">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight"
          >
            இனிய பிறந்தநாள் நல்வாழ்த்துகள், <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 animate-gradient">
              என் அன்புத் தோழி சித்ரா தேவி! 💖
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 font-medium italic max-w-2xl mx-auto"
          >
            "To the person who knows me best and loves me anyway—cheers to another year of being inseparable!"
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 text-pink-500/50"
        >
          <Star size={24} className="animate-pulse" />
          <Heart size={24} className="animate-bounce" />
          <Star size={24} className="animate-pulse delay-75" />
        </motion.div>
      </section>
     
     {/* Navigation Buttons Grid */}
      <section className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
        {/* 1. Memories Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNavigateToMemories}
          className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 to-violet-500 p-1 rounded-3xl w-full md:w-auto"
        >
          <div className="bg-slate-900 px-10 py-6 rounded-[1.4rem] flex items-center gap-4 group-hover:bg-transparent transition-colors duration-300 w-full">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Camera size={24} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-xl">View Our Memories</p>
              <p className="text-white/50 text-sm">Polaroids, Timeline & Gallery</p>
            </div>
            <ChevronRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </motion.button>

        {/* 2. Birthday Poem Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNavigateToPoem}
          className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-amber-400 to-orange-600 p-1 rounded-3xl w-full md:w-auto"
        >
          <div className="bg-slate-900 px-10 py-6 rounded-[1.4rem] flex items-center gap-4 group-hover:bg-transparent transition-colors duration-300 w-full">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Feather size={24} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-xl">Decate To You</p>
              <p className="text-white/50 text-sm">A special verse just for you</p>
            </div>
            <ChevronRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </motion.button>

        {/* 3. Send a Gift Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNavigateToGift}
          className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-400 to-teal-600 p-1 rounded-3xl w-full md:w-auto"
        >
          <div className="bg-slate-900 px-10 py-6 rounded-[1.4rem] flex items-center gap-4 group-hover:bg-transparent transition-colors duration-300 w-full">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Gift size={24} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-xl">Send a Gift</p>
              <p className="text-white/50 text-sm">Surprise them with joyfull</p>
            </div>
            <ChevronRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </motion.button>

        
      </section>

      {/* Reasons & AI Poem */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl space-y-6"
        >
          <div className="flex items-center gap-3 text-pink-400">
            <Heart size={24} fill="currentColor" />
            <h2 className="text-2xl font-bold text-white">
              Why You're Special
            </h2>
          </div>
          <ul className="space-y-4">
            {reasons.map((reason, idx) => (
              <motion.li
                key={idx}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 text-white/70 text-sm"
              >
                <span className="text-pink-500 mt-1">•</span>
                {reason}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-violet-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Star size={120} />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 text-violet-400">
              <Sparkles size={24} />
              <h2 className="text-2xl font-bold text-white">A Poem for You</h2>
            </div>

            <ul className="space-y-3 italic text-white/80 font-serif">
              {poem.map((line, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: 10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm"
                >
                  {line}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Mini Game */}
      <section>
        <HeartCatchGame />
      </section>

      {/* Secret Letter Section */}
      <section className="text-center space-y-8">
        <div className="flex flex-col items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLetterOpen(!isLetterOpen)}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center gap-3 bg-slate-900 px-8 py-4 rounded-full border border-white/10 text-white font-bold">
              <Mail size={20} className="text-pink-400" />
              {isLetterOpen ? "Close the Letter" : "Open Secret Letter"}
            </div>
          </motion.button>

          <AnimatePresence>
            {isLetterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden w-full"
              >
                <div className="glass p-10 rounded-[2rem] text-left space-y-6 max-w-2xl mx-auto shadow-inner">
                  <h3 className="text-3xl font-serif font-bold text-white italic">
                    Hey 😄
                  </h3>

                  <p className="text-white/80 leading-relaxed text-lg font-serif">
                    உனக்கு பிறந்தநாள் னு கேள்விப்பட்டேன்…
                    <br />
                    <br />
                    வேற ஒன்னும் இல்ல....
                    <br />
                    <br />
                    Happy Birthday! 🎂
                    <br />
                    <br />
                    Treat பாக்கி மறந்துராதே! 😜
                    <br />
                    <br />
                    வரட்டா மாமே டூர்! 😆
                  </p>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-pink-400 font-serif italic text-xl">
                      — உன் Friend 😎
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Gift Box Section */}
      <section className="pt-12">
        <GiftBox />
      </section>

      {/* Final Message */}
      <section className="text-center py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-serif font-bold text-white">
            The Best is Yet to Come
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            இந்த சிறிய surprise இன்று உன் முகத்தில் ஒரு அழகான புன்னகையை கொண்டு
            வந்திருக்கும் என்று நம்புகிறேன். 😊✨🌸🎉
            <br />
            உன் வாழ்க்கை முழுவதும் வெற்றியும் மகிழ்ச்சியும் நிரம்பியதாக இருக்க
            என் மனமார்ந்த வாழ்த்துக்கள். 🌟💫🌺🎊 இப்படிக்கு, உன் நல்ல நண்பன்.
            🤝💖✨🎂
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Heart
              className="text-pink-500 animate-bounce"
              fill="currentColor"
            />
            <Heart
              className="text-violet-500 animate-bounce delay-100"
              fill="currentColor"
            />
            <Heart
              className="text-pink-500 animate-bounce delay-200"
              fill="currentColor"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};
