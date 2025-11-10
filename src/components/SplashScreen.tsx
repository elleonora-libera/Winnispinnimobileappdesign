import { motion } from 'motion/react';
import { Logo } from './Logo';

export function SplashScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-vintage-cream via-vintage-rose/20 to-vintage-mint/20 dark:from-vintage-dark dark:via-vintage-dark-alt dark:to-vintage-dark"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Logo size="large" showTagline={true} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-t from-vintage-gold/10 to-transparent pointer-events-none"
      />
    </motion.div>
  );
}
