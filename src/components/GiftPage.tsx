import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, ArrowLeft, Heart, Sparkles, Package, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GiftPageProps {
  onBack: () => void;
}

const magazinePages = [
  {
    title: "The Chitra Devi Edition",
    subtitle: "ஒரு சிறப்பு பிறந்தநாள் பதிப்பு",
    content: "என் மிகச் சிறந்த தோழி சித்ரா தேவி காக அர்ப்பணிப்பு. நம்முடைய சிரிப்புகள், நினைவுகள் மற்றும் நம் நட்பின் அழகான பயணத்தை கொண்ட ஒரு சிறிய தொகுப்பு.",
    image: "/src/images/1.png",
    color: "from-amber-200 to-yellow-500"
  },
  {
    title: "ஒரு தூங்கும் தேவதை",
    subtitle: "அழகான ஆரம்பங்கள்",
    content: "அமைதியாக தூங்கும் ஒரு குழந்தையிலிருந்து, அனைவரையும் தனது அன்பால் கவரும் ஒரு அழகான மனிதராக வளர்ந்துள்ளாய். உன் தூய்மையான மனசு இன்னும் அதேபோல தான் இருக்கிறது.",
    image: "/src/images/2.png",
    color: "from-purple-400 to-indigo-500"
  },
  {
    title: "மகிழ்ச்சி தருணங்கள்",
    subtitle: "நினைவுகளின் படம்",
    content: "நம்முடைய சிறந்த நாட்களின் ஒரு தொகுப்பு. சில்லறை முகங்கள் முதல் அழகான சிரிப்புகள் வரை, இங்கே இருக்கும் ஒவ்வொரு படமும் ஒரு உண்மையான நட்பின் கதையை சொல்கிறது.",
    image: "/src/images/3.png",
    color: "from-rose-400 to-pink-500"
  },
  {
    title: "அன்பின் தூண்கள்",
    subtitle: "குடும்பமும் வேர்களும்",
    content: "குடும்பம் என்பது முடிவில்லாத அன்பு ஓடும் இடம். உன் குடும்பத்துடன் இருக்கும் தருணங்களை பார்க்கும்போது, உன் அழகான மனசு எங்கிருந்து வந்தது என்று புரிகிறது.",
    image: "/src/images/4.png",
    color: "from-violet-400 to-purple-600"
  },
  {
    title: "நகைச்சுவை தருணங்கள்",
    subtitle: "மகிழ்ச்சி & கலாட்டா",
    content: "நாம் சிரிக்கும் போது வாழ்க்கை இன்னும் அழகாக இருக்கும். அந்த inside jokes, funny filters மற்றும் எப்போதும் சிரிக்க வைத்த தருணங்களுக்கு நன்றி.",
    image: "/src/images/5.png",
    color: "from-brown-400 to-orange-600"
  },
  {
    title: "Digital-ல தொடங்கி Real ஆனது",
    subtitle: "எப்படி ஆரம்பமானது",
    content: "ஒரு late admission, ஒரு Instagram follow… அதிலிருந்து ஆரம்பித்த 'Hi' இன்று பிரிக்க முடியாத நட்பாக மாறிவிட்டது.",
    image: "/src/images/6.png",
    color: "from-stone-300 to-gray-500"
  },
  {
    title: "எப்போதும் ஒன்றாக",
    subtitle: "Exams, Labs & Support",
    content: "3 வருடங்களாக notes, dreams எல்லாம் share பண்ணிய நாட்கள். கடினமான exam இருந்தாலும், கஷ்டமான நாள் இருந்தாலும் நாம எப்போதும் ஒருவருக்கொருவர் துணையாக இருந்தோம்.",
    image: "/src/images/7.png",
    color: "from-orange-200 to-red-400"
  },
  {
    title: "என்றும் உன் ரசிகன்",
    subtitle: "புதிய உயரங்களுக்கு",
    content: "உன் கனவுகள் எல்லாம் வானத்தை தொடட்டும். உன் ஒவ்வொரு வெற்றிக்கும் முன்னிலையில் நின்று உற்சாகமாக கைகொட்டும் நண்பனாக நான் எப்போதும் இருப்பேன். இனிய பிறந்தநாள் வாழ்த்துகள்!",
    image: "/src/images/8.png",
    color: "from-amber-500 to-rose-400"
  }
];

export const GiftPage = ({ onBack }: GiftPageProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = () => {
    if (!isOpened) {
      setIsOpened(true);
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#10b981', '#34d399', '#ffffff']
      });
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % magazinePages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + magazinePages.length) % magazinePages.length);
  };

  return (
    <div className="min-h-screen pt-20 pb-32 px-6 max-w-4xl mx-auto space-y-12 relative z-10">
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </motion.button>
        <h1 className="text-3xl font-serif font-bold text-white">Birthday Gift</h1>
      </div>

      <div className="flex flex-col items-center justify-center py-6">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="box-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                onClick={handleOpen}
                className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2rem] shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-500" />
                <div className="absolute w-full h-6 bg-emerald-400/50 top-1/2 -translate-y-1/2" />
                <div className="absolute h-full w-6 bg-emerald-400/50 left-1/2 -translate-x-1/2" />
                <Package size={80} className="text-white relative z-10 drop-shadow-lg" />
                <div className="absolute bottom-4 text-white/50 text-xs font-bold tracking-widest uppercase">Tap to Open</div>
              </motion.div>
              <p className="text-white/60 italic">A little something special for you...</p>
            </motion.div>
          ) : (
            <motion.div
              key="magazine-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full space-y-12"
            >
              {/* Virtual Hug Message (Original Content) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass p-8 rounded-3xl max-w-2xl mx-auto border-emerald-500/20 text-center flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Heart size={32} fill="currentColor" className="animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">A Virtual Hug!</h3>
                  <p className="text-white/70 text-sm">Sending you all the love and happiness today.</p>
                </div>
              </motion.div>

              {/* Magazine Section */}
              <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 text-white/80">
                  <BookOpen size={24} className="text-emerald-400" />
                  <h2 className="text-2xl font-serif font-bold tracking-wide">The Bestie Magazine</h2>
                </div>

                <div className="relative group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="glass overflow-hidden rounded-[2.5rem] border-white/10 shadow-2xl flex flex-col md:flex-row min-h-[500px]"
                    >
                      <div className="md:w-1/2 relative">
                        <img 
                          src={magazinePages[currentPage].image} 
                          alt={magazinePages[currentPage].title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${magazinePages[currentPage].color} opacity-20`} />
                      </div>
                      
                      <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6 relative">
                        <div className="space-y-2">
                          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
                            {magazinePages[currentPage].subtitle}
                          </span>
                          <h3 className="text-4xl font-serif font-bold text-white leading-tight">
                            {magazinePages[currentPage].title}
                          </h3>
                        </div>
                        
                        <p className="text-white/70 leading-loose text-lg font-serif italic">
                          "{magazinePages[currentPage].content}"
                        </p>

                        <div className="pt-8 flex items-center justify-between text-white/30 text-xs font-mono">
                          <span>ISSUE #01 - 2026</span>
                          <span>PAGE {currentPage + 1} OF {magazinePages.length}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Controls */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12">
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevPage}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
                    >
                      <ChevronLeft size={32} />
                    </motion.button>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12">
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextPage}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
                    >
                      <ChevronRight size={32} />
                    </motion.button>
                  </div>
                </div>

                {/* Page Indicators */}
                <div className="flex justify-center gap-2">
                  {magazinePages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentPage ? 'w-8 bg-emerald-500' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
