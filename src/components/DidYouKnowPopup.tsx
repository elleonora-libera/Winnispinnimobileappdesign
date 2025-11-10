import { motion } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

interface DidYouKnowPopupProps {
  fact: string;
  onClose: () => void;
}

export function DidYouKnowPopup({ fact, onClose }: DidYouKnowPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-vintage-cream dark:bg-vintage-dark rounded-2xl shadow-2xl max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-vintage-gold/20 via-vintage-rose/20 to-vintage-gold/20 p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-vintage-gold/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-vintage-gold" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-vintage-gold/20 rounded-full">
              <Sparkles className="w-6 h-6 text-vintage-gold" />
            </div>
            <h2 className="text-vintage-gold font-serif">Did You Know?</h2>
          </div>
        </div>

        <div className="p-6">
          <p className="text-vintage-text dark:text-vintage-cream leading-relaxed">
            {fact}
          </p>
          <button
            onClick={onClose}
            className="w-full mt-6 py-3 bg-vintage-gold text-vintage-cream rounded-full hover:shadow-lg transition-all"
          >
            Got It
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
