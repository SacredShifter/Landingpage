import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, LogIn } from 'lucide-react';
import { BackgroundCanvas } from './BackgroundCanvas';
import { ParallaxStars } from './ParallaxStars';
import { MagneticCursor } from './MagneticCursor';
import { ReturnWidget } from './ReturnWidget';
import { BlogFeed } from './BlogFeed';
import { SubscribeModal } from './SubscribeModal';
import { useReturnSession } from '../hooks/useReturnSession';
import { Button } from './ui/button';

export const ResonanceGateway = () => {
  const { session, isReturning, loading } = useReturnSession();
  const [showSubscribe, setShowSubscribe] = useState(false);

  const handleResume = () => {
    console.log('Resuming:', session?.lastModule);
  };

  const handleExplore = () => {
    console.log('Exploring new modules');
  };

  const handleLatest = () => {
    console.log('Reading latest resonance log');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-fuchsia-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <BackgroundCanvas />
      <ParallaxStars />
      <MagneticCursor />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/50 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <img
              src="https://mikltjgbvxrxndtszorb.supabase.co/storage/v1/object/public/sacred-assets/uploads/Logo-MainSacredShifter-removebg-preview.png"
              alt="Sacred Shifter"
              className="h-12 w-auto invert"
            />

            <div className="flex items-center gap-3">
              <Button
                onClick={() => setShowSubscribe(true)}
                variant="outline"
                className="border-fuchsia-500/50 hover:bg-fuchsia-500/10 text-fuchsia-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
              <Button
                onClick={() => console.log('Login clicked')}
                variant="outline"
                className="border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </header>

        <main className="relative pt-20">
          <BlogFeed />
        </main>

        {isReturning && session && (
          <ReturnWidget
            session={session}
            onResume={handleResume}
            onExplore={handleExplore}
            onLatest={handleLatest}
          />
        )}

        <SubscribeModal
          isOpen={showSubscribe}
          onClose={() => setShowSubscribe(false)}
        />
      </motion.div>

      <footer className="relative z-10 border-t border-slate-800/50 mt-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              Sacred Shifter — Resonance Gateway
            </p>
            <p className="text-slate-500 text-sm">
              Awakening consciousness through the living field of resonance
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
