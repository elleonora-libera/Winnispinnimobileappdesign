import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Sparkles, BookOpen, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Sparkles,
    title: 'Welcome to WinniSpinni',
    description: 'Your Window into the Vintage World',
    gradient: 'from-vintage-cream via-vintage-rose/20 to-vintage-mint/10'
  },
  {
    icon: BookOpen,
    title: 'Explore Eras',
    description: 'Journey through decades of timeless style, from Art Deco elegance to Bohemian charm',
    gradient: 'from-vintage-mint/10 via-vintage-gold/10 to-vintage-rose/20'
  },
  {
    icon: Heart,
    title: 'Save Your Favorites',
    description: 'Curate your personal collection of vintage inspiration and timeless stories',
    gradient: 'from-vintage-rose/20 via-vintage-cream to-vintage-gold/10'
  }
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const skipToEnd = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-sm"
          >
            {currentSlide === 0 ? (
              <Logo size="large" showTagline={false} />
            ) : (
              <div className="mb-8">
                {slides[currentSlide].icon && (
                  <slides[currentSlide].icon className="w-16 h-16 mx-auto text-vintage-gold dark:text-vintage-gold-light mb-4" strokeWidth={1.5} />
                )}
              </div>
            )}
            
            <h2 className="text-3xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
              {slides[currentSlide].title}
            </h2>
            
            <p className="text-vintage-text-light dark:text-vintage-text-dark leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 space-y-4">
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-vintage-gold dark:bg-vintage-gold-light' 
                  : 'w-2 bg-vintage-beige dark:bg-vintage-text-dark/30'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {currentSlide < slides.length - 1 && (
            <button
              onClick={skipToEnd}
              className="flex-1 py-3 px-6 rounded-full border border-vintage-gold/30 dark:border-vintage-gold-light/30 text-vintage-text-light dark:text-vintage-text-dark transition-all hover:border-vintage-gold dark:hover:border-vintage-gold-light"
            >
              Skip
            </button>
          )}
          
          <button
            onClick={nextSlide}
            className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-vintage-gold to-vintage-rose text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            {currentSlide < slides.length - 1 ? (
              <>
                Next <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              'Enter App'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
