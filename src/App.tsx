import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quiz } from './components/Quiz';
import { PreQuizCountdown } from './components/PreQuizCountdown';
import { SurprisePage } from './components/SurprisePage';
import { LoadingScreen } from './components/LoadingScreen';
import { FloatingHearts } from './components/FloatingHearts';

import { MemoriesPage } from './components/MemoriesPage';
import { PoemPage } from './components/PoemPage';
import { GiftPage } from './components/GiftPage';
import { StoryPage } from './components/StoryPage';

type Page = 'surprise' | 'memories' | 'poem' | 'gift' | 'story';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('surprise');

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowCountdown(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'surprise':
        return (
          <SurprisePage 
            onNavigateToMemories={() => setCurrentPage('memories')} 
            onNavigateToPoem={() => setCurrentPage('poem')}
            onNavigateToGift={() => setCurrentPage('gift')}
            onNavigateToStory={() => setCurrentPage('story')}
          />
        );
      case 'memories':
        return <MemoriesPage onBack={() => setCurrentPage('surprise')} />;
      case 'poem':
        return <PoemPage onBack={() => setCurrentPage('surprise')} />;
      case 'gift':
        return <GiftPage onBack={() => setCurrentPage('surprise')} />;
      case 'story':
        return <StoryPage onBack={() => setCurrentPage('surprise')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-sans selection:bg-pink-500/30">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950 animate-gradient" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : showCountdown ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PreQuizCountdown onComplete={() => setShowCountdown(false)} />
          </motion.div>
        ) : !isUnlocked ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <Quiz onComplete={() => setIsUnlocked(true)} />
          </motion.div>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            {renderPage()}
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-20" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20" />
    </div>
  );
}
