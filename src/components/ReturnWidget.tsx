import { motion } from 'framer-motion';
import { Sparkles, Play, Compass, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { ReturnSession } from '../hooks/useReturnSession';

interface ReturnWidgetProps {
  session: ReturnSession;
  onResume: () => void;
  onExplore: () => void;
  onLatest: () => void;
}

export const ReturnWidget = ({ session, onResume, onExplore, onLatest }: ReturnWidgetProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
      className="fixed bottom-8 right-8 z-50 max-w-md"
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-fuchsia-500/20 blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative bg-slate-950/90 backdrop-blur-xl border border-fuchsia-500/30 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-start gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">
                Welcome back, traveller ✦
              </h3>
              <p className="text-sm text-slate-400">
                Last visited: <span className="text-fuchsia-400 font-medium">{session.lastModule}</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {new Date(session.lastVisit).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              onClick={onResume}
              className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25"
            >
              <Play className="w-4 h-4 mr-2" />
              Resume Journey
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={onExplore}
                variant="outline"
                className="border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-300 hover:text-cyan-200"
              >
                <Compass className="w-4 h-4 mr-1" />
                Explore
              </Button>
              <Button
                onClick={onLatest}
                variant="outline"
                className="border-fuchsia-500/50 hover:bg-fuchsia-500/10 text-fuchsia-300 hover:text-fuchsia-200"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                Latest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
