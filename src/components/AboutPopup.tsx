import { motion } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

interface AboutPopupProps {
  onClose: () => void;
}

export function AboutPopup({ onClose }: AboutPopupProps) {
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
        className="bg-vintage-cream dark:bg-vintage-dark rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-vintage-gold/20 via-vintage-rose/20 to-vintage-gold/20 p-6 rounded-t-2xl sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-vintage-gold/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-vintage-gold" />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-vintage-gold" />
            <div>
              <h1 className="text-vintage-gold font-serif mb-0" style={{ fontSize: '2rem', lineHeight: '1' }}>
                Winni
              </h1>
              <p className="text-vintage-gold/70 font-serif -mt-1" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
                Spinni
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-vintage-gold font-serif mb-3">About WinniSpinni</h2>
            <p className="text-vintage-text dark:text-vintage-cream/90 leading-relaxed mb-4">
              WinniSpinni is a celebration of timeless vintage inspiration. We curate stories, fashion, design, and cultural moments from bygone eras to inspire modern enthusiasts.
            </p>
            <p className="text-vintage-text dark:text-vintage-cream/90 leading-relaxed">
              Our mission is to preserve and share the elegance, craftsmanship, and spirit of vintage living — purely for education and appreciation.
            </p>
          </div>

          <div className="border-t border-vintage-gold/20 pt-6">
            <h3 className="text-vintage-gold font-serif mb-3">What We Offer</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-vintage-gold mt-1">✦</span>
                <span className="text-vintage-text dark:text-vintage-cream/90">
                  Curated articles exploring fashion and design eras
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-vintage-gold mt-1">✦</span>
                <span className="text-vintage-text dark:text-vintage-cream/90">
                  Visual galleries of timeless aesthetics
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-vintage-gold mt-1">✦</span>
                <span className="text-vintage-text dark:text-vintage-cream/90">
                  Historical context and cultural insights
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-vintage-gold mt-1">✦</span>
                <span className="text-vintage-text dark:text-vintage-cream/90">
                  A space to save and revisit your favorites
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-vintage-gold/20 pt-6">
            <p className="text-vintage-text/70 dark:text-vintage-cream/70 italic" style={{ fontSize: '0.875rem' }}>
              WinniSpinni is entirely non-commercial and educational. We celebrate the past to inspire the present.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-vintage-gold text-vintage-cream rounded-full hover:shadow-lg transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
