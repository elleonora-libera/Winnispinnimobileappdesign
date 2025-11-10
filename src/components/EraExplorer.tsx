import { ArrowLeft, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { BottomNav } from './BottomNav';
import type { Screen, Era } from '../App';
import { mockEras } from '../data/mockData';

interface EraExplorerProps {
  navigateTo: (screen: Screen) => void;
  viewEra: (era: Era) => void;
  selectedEra: Era | null;
  onBack: () => void;
}

export function EraExplorer({ navigateTo, viewEra, selectedEra, onBack }: EraExplorerProps) {
  const [showTrivia, setShowTrivia] = useState(false);

  if (selectedEra) {
    return (
      <div className="min-h-screen pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-vintage-cream/80 dark:bg-vintage-dark/80 backdrop-blur-lg border-b border-vintage-gold/20 dark:border-vintage-gold-light/20">
          <div className="px-6 py-4 flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-vintage-gold/10 dark:hover:bg-vintage-gold-light/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-vintage-gold dark:text-vintage-gold-light" />
            </button>
            <h1 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light">
              {selectedEra.name}
            </h1>
          </div>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden bg-gradient-to-br from-vintage-beige to-vintage-rose/30 dark:from-vintage-dark-alt dark:to-vintage-gold/10 p-8 text-center"
          >
            <div className="text-6xl mb-4">
              {selectedEra.id === 'era1' ? '🎭' : 
               selectedEra.id === 'era2' ? '💄' :
               selectedEra.id === 'era3' ? '👗' :
               selectedEra.id === 'era4' ? '🕶️' :
               selectedEra.id === 'era5' ? '🌻' : '💎'}
            </div>
            <h2 className="text-2xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-2">
              {selectedEra.decade}
            </h2>
            <p className="text-vintage-text-light dark:text-vintage-text-dark leading-relaxed">
              {selectedEra.description}
            </p>
          </motion.div>

          {/* Timeline Facts */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif text-vintage-gold dark:text-vintage-gold-light">
                Historical Timeline
              </h3>
              <button
                onClick={() => setShowTrivia(true)}
                className="flex items-center gap-2 text-sm text-vintage-rose dark:text-vintage-mint"
              >
                <Info className="w-4 h-4" />
                Did You Know?
              </button>
            </div>
            
            <div className="space-y-3">
              {selectedEra.facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-vintage-gold dark:bg-vintage-gold-light mt-2 flex-shrink-0" />
                  <p className="text-vintage-text-light dark:text-vintage-text-dark">
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Style Notes */}
          <section>
            <h3 className="text-lg font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
              Signature Styles
            </h3>
            
            <div className="grid gap-3">
              {selectedEra.styleNotes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/50 dark:bg-vintage-dark-alt/50 backdrop-blur-sm rounded-xl p-4 border border-vintage-gold/10 dark:border-vintage-gold-light/10"
                >
                  <p className="text-vintage-text-light dark:text-vintage-text-dark">
                    {note}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Trivia Pop-up */}
        <AnimatePresence>
          {showTrivia && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowTrivia(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto bg-white dark:bg-vintage-dark-alt rounded-2xl p-6 shadow-2xl z-50 border border-vintage-gold/20 dark:border-vintage-gold-light/20"
              >
                <h3 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
                  Did You Know?
                </h3>
                <p className="text-vintage-text-light dark:text-vintage-text-dark mb-6">
                  {selectedEra.facts[Math.floor(Math.random() * selectedEra.facts.length)]}
                </p>
                <button
                  onClick={() => setShowTrivia(false)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-vintage-gold to-vintage-rose text-white"
                >
                  Got it!
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <BottomNav currentScreen="eras" navigateTo={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-vintage-cream via-vintage-rose/10 to-vintage-mint/10 dark:from-vintage-dark dark:via-vintage-dark-alt dark:to-vintage-dark px-6 pt-8 pb-6 border-b border-vintage-gold/20 dark:border-vintage-gold-light/20">
        <h1 className="text-2xl font-serif text-vintage-gold dark:text-vintage-gold-light">
          Explore Eras
        </h1>
        <p className="text-sm text-vintage-text-light dark:text-vintage-text-dark mt-2">
          Journey through decades of timeless style
        </p>
      </div>

      <div className="px-6 py-6 space-y-4">
        {mockEras.map((era, index) => (
          <motion.div
            key={era.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => viewEra(era)}
            className="bg-white/50 dark:bg-vintage-dark-alt/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="p-6 flex gap-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-vintage-beige to-vintage-rose/30 dark:from-vintage-dark-alt dark:to-vintage-gold/10 flex items-center justify-center flex-shrink-0 text-3xl">
                {era.id === 'era1' ? '🎭' : 
                 era.id === 'era2' ? '💄' :
                 era.id === 'era3' ? '👗' :
                 era.id === 'era4' ? '🕶️' :
                 era.id === 'era5' ? '🌻' : '💎'}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg text-vintage-gold dark:text-vintage-gold-light mb-1">
                  {era.name}
                </h3>
                <p className="text-sm text-vintage-text-light dark:text-vintage-text-dark line-clamp-2">
                  {era.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-vintage-gold dark:text-vintage-gold-light opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav currentScreen="eras" navigateTo={navigateTo} />
    </div>
  );
}
