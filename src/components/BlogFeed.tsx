import { motion, useInView } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { Badge } from './ui/badge';
import { WaveVisualization } from './WaveVisualization';
import posts from '../data/posts.json';
import { useRef } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const BlogFeed = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <WaveVisualization />
          <motion.p
            className="text-sm sm:text-base text-slate-400 mb-3 relative z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Welcome to
          </motion.p>
          <motion.div
            className="flex justify-center mb-4 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.img
              src="https://mikltjgbvxrxndtszorb.supabase.co/storage/v1/object/public/sacred-assets/uploads/Logo-MainSacredShifter-removebg-preview.png"
              alt="Sacred Shifter"
              className="h-24 sm:h-32 lg:h-40 w-auto invert"
              animate={{
                filter: [
                  'invert(1) drop-shadow(0 0 20px rgba(217, 70, 239, 0.3))',
                  'invert(1) drop-shadow(0 0 40px rgba(6, 182, 212, 0.5))',
                  'invert(1) drop-shadow(0 0 20px rgba(217, 70, 239, 0.3))',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl text-slate-300 mb-4 max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            The Living Resonance Field
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto relative z-10 leading-snug"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            A collective journey into consciousness, frequency, and the sacred geometry of transformation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {posts.map((post, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, amount: 0.2 });

            return (
            <motion.div
              key={post.id}
              ref={cardRef}
              variants={item}
              className="relative group"
              style={{ perspective: '1000px' }}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={cardInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div
                  className="relative bg-slate-950/80 backdrop-blur-xl border-2 overflow-hidden"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    borderImageSource: 'linear-gradient(135deg, rgba(217, 70, 239, 0.5), rgba(6, 182, 212, 0.5))',
                    borderImageSlice: 1,
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="60" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />

                    <circle cx="100" cy="40" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="152" cy="70" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="152" cy="130" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="100" cy="160" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="48" cy="130" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <circle cx="48" cy="70" r="20" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />

                    <line x1="100" y1="100" x2="100" y2="40" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="152" y2="70" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="152" y2="130" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="100" y2="160" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="48" y2="130" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="48" y2="70" stroke={`url(#grad-${index})`} strokeWidth="0.5" />

                    <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" fill="none" stroke={`url(#grad-${index})`} strokeWidth="0.5" />
                  </svg>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative flex flex-col h-full px-8 pt-6 pb-8">
                    <div className="flex flex-col items-center text-center max-w-[240px] mx-auto">
                      <Badge className="mb-1.5 bg-gradient-to-r from-cyan-500/90 to-fuchsia-500/90 text-white border-0 text-[9px] px-1.5 py-0.5">
                        <Tag className="w-2 h-2 mr-0.5" />
                        {post.category}
                      </Badge>

                      <h3 className="text-xs font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-1.5 leading-tight">
                        {post.title}
                      </h3>

                      <div className="flex items-center justify-center gap-1 text-slate-500 text-[9px] mb-1.5">
                        <Calendar className="w-2 h-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>

                      <p className="text-slate-400 text-[9px] leading-tight mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div
                      className="relative mt-auto mx-auto overflow-hidden"
                      style={{
                        width: '80px',
                        height: '80px',
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      }}
                    >
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-cyan-600/20 mix-blend-overlay" />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </motion.div>
          );
          })}
        </motion.div>
      </div>
    </div>
  );
};
