import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from '../data/content';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizProps {
  onComplete: () => void;
}

export const Quiz = ({ onComplete }: QuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [message, setMessage] = useState('');

  const currentQuestion = questions[currentStep];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (inputValue.toLowerCase().trim() === currentQuestion.answer.toLowerCase()) {
      setStatus('correct');
      setMessage(currentQuestion.successMessage);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#8b5cf6', '#3b82f6']
      });
    } else {
      setStatus('wrong');
      setMessage(currentQuestion.errorMessage);
    }
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setInputValue('');
      setStatus('idle');
      setMessage('');
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-1">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 w-8 rounded-full transition-colors duration-500 ${
                  idx <= currentStep ? 'bg-pink-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-white/50 uppercase tracking-widest">
            Question {currentStep + 1} of {questions.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white leading-tight">
              {currentQuestion.question}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={status === 'correct'}
                  placeholder="Type your answer..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {status === 'correct' && <CheckCircle2 className="text-green-400" />}
                  {status === 'wrong' && <XCircle className="text-red-400" />}
                </div>
              </div>

              {status === 'idle' && (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Check Answer
                </button>
              )}
            </form>

            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className={`p-4 rounded-2xl text-sm font-medium ${
                    status === 'correct' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            {status === 'correct' && (
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={nextQuestion}
                className="w-full flex items-center justify-center gap-2 text-pink-400 font-bold py-2 hover:text-pink-300 transition-colors"
              >
                {currentStep === questions.length - 1 ? 'Unlock Surprise' : 'Next Question'}
                <ArrowRight size={18} />
              </motion.button>
            )}

            <div className="flex items-center gap-2 text-white/30 text-xs justify-center mt-4">
              <HelpCircle size={14} />
              <span>Hint: {currentQuestion.hint}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
