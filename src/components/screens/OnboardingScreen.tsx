import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Sparkles, BookOpen, Heart } from 'lucide-react';
import { AppContextType } from '../../App';

interface OnboardingScreenProps {
  context: AppContextType;
}

const slides = [
  {
    icon: Sparkles,
    title: 'Welcome to WinniSpinni',
    subtitle: 'Your Window into the Vintage World',
    description: 'Explore timeless elegance, forgotten eras, and the art of vintage living.',
    gradient: 'from-vintage-cream via-vintage-rose/30 to-vintage-cream'
  },
  {
    icon: BookOpen,
    title: 'Explore Eras & Collections',
    subtitle: 'From Art Deco to Bohemian Chic',
    description: 'Discover curated stories, fashion highlights, and cultural treasures from every decade.',
    gradient: 'from-vintage-cream via-vintage-mint/20 to-vintage-cream'
  },
  {
    icon: Heart,
    title: 'Save Your Favorites',
    subtitle: 'Build Your Personal Collection',
    description: 'Bookmark the looks, stories, and moments that inspire you most.',
    gradient: 'from-vintage-cream via-vintage-gold/10 to-vintage-cream'
  }
];

export function OnboardingScreen({ context }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      context.navigateTo('home');
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${slide.gradient} flex flex-col items-center justify-between p-8 py-16`}>
      <div className="flex gap-2 mt-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-vintage-gold' : 'w-4 bg-vintage-gold/30'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 p-6 rounded-full bg-vintage-gold/10"
          >
            <Icon className="w-16 h-16 text-vintage-gold" />
          </motion.div>

          <h2 className="text-vintage-gold mb-2 font-serif">
            {slide.title}
          </h2>
          <p className="text-vintage-gold/70 mb-6 font-serif italic">
            {slide.subtitle}
          </p>
          <p className="text-vintage-text dark:text-vintage-cream/80 max-w-sm leading-relaxed">
            {slide.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handleNext}
        className="bg-vintage-gold text-vintage-cream px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <span className="tracking-wide">
          {currentSlide === slides.length - 1 ? 'Enter App' : 'Continue'}
        </span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
