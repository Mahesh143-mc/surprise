import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  School, 
  GraduationCap, 
  Home, 
  Star, 
  Heart, 
  Play, 
  Camera,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Video as VideoIcon
} from 'lucide-react';

interface StoryPageProps {
  onBack: () => void;
}

const lifeChapters = [
  {
    id: 'home',
    title: 'Home & Beyond',
    description: 'The comfort of family and the warmth of home. The foundation of everything we are.',
    icon: <Home size={24} />,
    accent: 'text-orange-400',
    images: [
      'https://picsum.photos/seed/home1/600/400',
      'https://picsum.photos/seed/home2/600/400'
    ],
    videos: [
      { url: 'https://picsum.photos/seed/homevid/600/400', title: 'Family Dinner' }
    ]
  },
  {
    id: 'school',
    title: 'School Days',
    description: 'Where it all began. The uniforms, the lunch breaks, and the endless laughter in the hallways.',
    icon: <School size={24} />,
    accent: 'text-blue-400',
    images: [
      'https://picsum.photos/seed/school1/600/400',
      'https://picsum.photos/seed/school2/600/400',
      'https://picsum.photos/seed/school3/600/400',
      'https://picsum.photos/seed/school1/600/400',
      'https://picsum.photos/seed/school2/600/400',
      'https://picsum.photos/seed/school3/600/400'
    ],
    videos: [
      { url: 'https://picsum.photos/seed/schoolvid/600/400', title: 'Recess Fun' }
    ]
  },
  {
    id: 'college',
    title: 'College Life',
    description: 'The years of discovery. Late night studies, canteen treats, and finding our true selves.',
    icon: <GraduationCap size={24} />,
    accent: 'text-purple-400',
    images: [
      'https://picsum.photos/seed/college1/600/400',
      'https://picsum.photos/seed/college2/600/400'
    ],
    videos: [
      { url: 'https://picsum.photos/seed/collegevid/600/400', title: 'Graduation Prep' }
    ]
  },
  
];

const bestMoments = [
  {
    title: "The Midnight Surprise",
    description: "That time we stayed up until 3 AM just talking about our dreams. It was the moment I realized we'd be friends forever.",
    image: "https://picsum.photos/seed/moment1/800/500",
    tag: "Most Emotional"
  },
  {
    title: "The Graduation Day",
    description: "Seeing you walk across that stage was one of my proudest moments. Your hard work and dedication finally paid off.",
    image: "https://picsum.photos/seed/moment2/800/500",
    tag: "Proudest Moment"
  },
  {
    title: "Our First Trip",
    description: "The chaos, the laughter, and the beautiful views. We learned so much about each other and created a bond that can't be broken.",
    image: "https://picsum.photos/seed/moment3/800/500",
    tag: "Best Adventure"
  }
];

export const StoryPage = ({ onBack }: StoryPageProps) => {
  const [openSections, setOpenSections] = useState<Record<string, { images: boolean, videos: boolean }>>({});

  const toggleSection = (chapterId: string, type: 'images' | 'videos') => {
    setOpenSections(prev => ({
      ...prev,
      [chapterId]: {
        ...prev[chapterId],
        [type]: !prev[chapterId]?.[type]
      }
    }));
  };

  return (
    <div className="min-h-screen pt-20 pb-32 px-6 max-w-5xl mx-auto space-y-32 relative z-10">
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
        <h1 className="text-3xl font-serif font-bold text-white">Our Story</h1>
      </div>

      {/* Best Moments Section (The Big Three) - NOW FIRST */}
      <section className="space-y-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
            <Star size={24} />
          </div>
          <h2 className="text-4xl font-bold text-white">The Big Three</h2>
        </div>

        <div className="space-y-24">
          {bestMoments.map((moment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative glass rounded-[2rem] overflow-hidden border-white/10">
                  <img 
                    src={moment.image} 
                    alt={moment.title}
                    className="w-full aspect-[16/10] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                      {moment.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 text-pink-400">
                  <Camera size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest">Captured Moment</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">{moment.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed italic">
                  "{moment.description}"
                </p>
                <div className="flex justify-center md:justify-start gap-2">
                  <Heart size={20} className="text-pink-500" fill="currentColor" />
                  <Heart size={20} className="text-pink-500/50" fill="currentColor" />
                  <Heart size={20} className="text-pink-500/20" fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Life Chapters Section - NOW SECOND, NO BOXES, ACCORDION STYLE */}
      <section className="space-y-24">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Camera size={24} />
          </div>
          <h2 className="text-4xl font-bold text-white">Life Chapters</h2>
        </div>

        {lifeChapters.map((chapter, idx) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Chapter Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-white/10 pb-8">
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${chapter.accent} shrink-0`}>
                {chapter.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-white">{chapter.title}</h3>
                <p className="text-white/50 text-lg max-w-2xl">{chapter.description}</p>
              </div>
            </div>

            {/* Accordion Controls */}
            <div className="space-y-4">
              {/* Images Accordion */}
              <div className="space-y-4">
                <button
                  onClick={() => toggleSection(chapter.id, 'images')}
                  className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <ImageIcon className="text-pink-400" size={24} />
                    <span className="text-xl font-bold text-white">Captured Images</span>
                    <span className="text-white/30 text-sm font-mono">({chapter.images.length})</span>
                  </div>
                  {openSections[chapter.id]?.images ? <ChevronUp className="text-white/50" /> : <ChevronDown className="text-white/50" />}
                </button>

                <AnimatePresence>
                  {openSections[chapter.id]?.images && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {chapter.images.map((img, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="aspect-[4/3] rounded-2xl overflow-hidden group relative"
                          >
                            <img 
                              src={img} 
                              alt={`${chapter.title} ${i}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Videos Accordion */}
              <div className="space-y-4">
                <button
                  onClick={() => toggleSection(chapter.id, 'videos')}
                  className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <VideoIcon className="text-violet-400" size={24} />
                    <span className="text-xl font-bold text-white">Video Memories</span>
                    <span className="text-white/30 text-sm font-mono">({chapter.videos.length})</span>
                  </div>
                  {openSections[chapter.id]?.videos ? <ChevronUp className="text-white/50" /> : <ChevronDown className="text-white/50" />}
                </button>

                <AnimatePresence>
                  {openSections[chapter.id]?.videos && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {chapter.videos.map((vid, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="aspect-video rounded-2xl overflow-hidden group relative bg-white/5 border border-white/10"
                          >
                            <img 
                              src={vid.url} 
                              alt={vid.title}
                              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Play size={32} fill="currentColor" />
                              </div>
                              <span className="text-white font-bold tracking-wide">{vid.title}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
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
