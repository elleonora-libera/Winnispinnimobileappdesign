import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vintage-cream via-vintage-rose to-vintage-cream flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        {/* Logo */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-vintage-gold font-serif mb-0" style={{ fontSize: '3.5rem', lineHeight: '1' }}>
              Winni
            </h1>
            <p className="text-vintage-gold/70 font-serif -mt-1" style={{ fontSize: '1.5rem', letterSpacing: '0.1em' }}>
              Spinni
            </p>
          </motion.div>
          
          <motion.div
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 180, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6"
          >
            <Sparkles className="w-8 h-8 text-vintage-gold" />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-vintage-gold/80 tracking-widest"
          style={{ fontSize: '0.875rem', letterSpacing: '0.2em' }}
        >
          Discover Timeless Charm
        </motion.p>

        {/* Shimmer effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
          className="absolute top-1/2 left-0 w-full h-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ transform: 'translateY(-50%)' }}
        />
      </motion.div>
    </div>
  );
}
