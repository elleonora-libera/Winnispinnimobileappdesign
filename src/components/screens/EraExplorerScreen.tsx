import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AppContextType } from '../../App';
import { BottomNav } from '../BottomNav';

interface EraExplorerScreenProps {
  context: AppContextType;
}

const eras = [
  {
    id: '1920s',
    name: '1920s Art Deco',
    subtitle: 'The Roaring Twenties',
    description: 'Jazz, flappers, and geometric glamour defined this revolutionary decade.',
    image: 'https://images.unsplash.com/photo-1676040038506-0932c64a0223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFzaGlvbiUyMDE5MjBzfGVufDF8fHx8MTc2MjUyODQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '✨',
    color: 'from-amber-500/20 to-yellow-600/20'
  },
  {
    id: '1930s',
    name: '1930s Elegance',
    subtitle: 'The Age of Sophistication',
    description: 'Bias-cut gowns, Hollywood glamour, and refined elegance.',
    image: 'https://images.unsplash.com/photo-1558898434-af897d9ac0a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJ0JTIwZGVjb3xlbnwxfHx8fDE3NjI1Mjg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '🎭',
    color: 'from-rose-500/20 to-pink-600/20'
  },
  {
    id: '1940s',
    name: '1940s Wartime Style',
    subtitle: 'Utility & Resilience',
    description: 'Practical fashion with feminine touches during challenging times.',
    image: 'https://images.unsplash.com/photo-1579619312739-8d373e647330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFjY2Vzc29yaWVzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjI1Mjg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '🌹',
    color: 'from-red-500/20 to-rose-600/20'
  },
  {
    id: '1950s',
    name: '1950s Glamour',
    subtitle: 'The Golden Age',
    description: 'Full skirts, cinched waists, and the birth of modern femininity.',
    image: 'https://images.unsplash.com/photo-1488693236539-d8f00a91b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk1MHMlMjBnbGFtb3VyfGVufDF8fHx8MTc2MjUyODQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '💫',
    color: 'from-blue-500/20 to-indigo-600/20'
  },
  {
    id: '1960s',
    name: '1960s Mod',
    subtitle: 'Youth & Revolution',
    description: 'Bold prints, mini skirts, and the spirit of change.',
    image: 'https://images.unsplash.com/photo-1666689464534-11d437f06ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwaW50ZXJpb3IlMjB2aW50YWdlfGVufDF8fHx8MTc2MjUyODQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '🌸',
    color: 'from-purple-500/20 to-violet-600/20'
  },
  {
    id: '1970s',
    name: '1970s Boho',
    subtitle: 'Free Spirit',
    description: 'Flowing fabrics, earth tones, and bohemian freedom.',
    image: 'https://images.unsplash.com/photo-1590490977353-8ef7fec82c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk3MHMlMjBib2hvfGVufDF8fHx8MTc2MjUyODQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '🌻',
    color: 'from-green-500/20 to-emerald-600/20'
  }
];

export function EraExplorerScreen({ context }: EraExplorerScreenProps) {
  return (
    <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-vintage-gold/20 via-vintage-rose/20 to-vintage-gold/20 p-6 sticky top-0 z-10 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => context.navigateTo('home')}
            className="p-2 hover:bg-vintage-gold/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-vintage-gold" />
          </button>
          <h1 className="text-vintage-gold font-serif">Explore Eras</h1>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-vintage-text/70 dark:text-vintage-cream/70 mb-6">
          Journey through time and discover the unique style, culture, and spirit of each decade.
        </p>

        {eras.map((era, index) => (
          <motion.button
            key={era.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => context.navigateTo('era-detail', { era: era.id })}
            className="w-full group"
          >
            <div className={`relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${era.color}`}>
              <div className="absolute inset-0">
                <img
                  src={era.image}
                  alt={era.name}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="relative p-6 min-h-[180px] flex flex-col justify-end">
                <div className="mb-3" style={{ fontSize: '2.5rem' }}>{era.icon}</div>
                <h3 className="text-white font-serif mb-1 text-left">
                  {era.name}
                </h3>
                <p className="text-vintage-gold/90 mb-2 text-left italic">
                  {era.subtitle}
                </p>
                <p className="text-white/80 mb-3 text-left" style={{ fontSize: '0.875rem' }}>
                  {era.description}
                </p>
                <div className="flex items-center gap-2 text-vintage-gold">
                  <span style={{ fontSize: '0.875rem' }}>View More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <BottomNav context={context} activeScreen="eras" />
    </div>
  );
}
