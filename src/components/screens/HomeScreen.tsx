import { motion } from 'motion/react';
import { Menu, Sparkles, ChevronRight } from 'lucide-react';
import { AppContextType, Article } from '../../App';
import { BottomNav } from '../BottomNav';

interface HomeScreenProps {
  context: AppContextType;
}

const todayFeature: Article = {
  id: 'feature-1',
  title: 'The Golden Age of Art Deco',
  excerpt: 'Explore the glamorous 1920s and the revolutionary design movement that defined an era.',
  content: 'Art Deco represented a departure from the flowing lines of Art Nouveau, embracing geometric shapes, bold colors, and luxurious materials. This movement influenced everything from architecture to fashion, jewelry to automobiles. The 1920s saw the rise of the flapper, jazz music, and a new sense of freedom and modernity. Women shortened their skirts, bobbed their hair, and embraced a more androgynous silhouette. The era was marked by optimism, technological advancement, and a celebration of luxury and craftsmanship.',
  image: 'https://images.unsplash.com/photo-1558898434-af897d9ac0a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJ0JTIwZGVjb3xlbnwxfHx8fDE3NjI1Mjg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  era: '1920s',
  category: 'Design & Culture'
};

const curatedStories: Article[] = [
  {
    id: 'story-1',
    title: '1950s Hollywood Glamour',
    excerpt: 'The era of elegance, full skirts, and silver screen icons.',
    content: 'The 1950s marked the golden age of Hollywood glamour, with stars like Grace Kelly, Audrey Hepburn, and Marilyn Monroe setting trends that would influence fashion for decades. This era celebrated femininity with cinched waists, full skirts, and ladylike accessories.',
    image: 'https://images.unsplash.com/photo-1488693236539-d8f00a91b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk1MHMlMjBnbGFtb3VyfGVufDF8fHx8MTc2MjUyODQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    era: '1950s',
    category: 'Fashion'
  },
  {
    id: 'story-2',
    title: '1970s Bohemian Revolution',
    excerpt: 'Free spirits, flowing fabrics, and the birth of boho chic.',
    content: 'The 1970s embraced freedom, natural fabrics, and eclectic style. The bohemian movement rejected mainstream fashion in favor of handcrafted items, vintage finds, and globally-inspired pieces.',
    image: 'https://images.unsplash.com/photo-1590490977353-8ef7fec82c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk3MHMlMjBib2hvfGVufDF8fHx8MTc2MjUyODQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    era: '1970s',
    category: 'Fashion'
  },
  {
    id: 'story-3',
    title: 'Victorian Home Interiors',
    excerpt: 'Ornate details, rich fabrics, and timeless craftsmanship.',
    content: 'Victorian interior design was characterized by elaborate ornamentation, heavy drapery, and an abundance of decorative objects. Every surface was an opportunity for display and embellishment.',
    image: 'https://images.unsplash.com/photo-1666689464534-11d437f06ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwaW50ZXJpb3IlMjB2aW50YWdlfGVufDF8fHx8MTc2MjUyODQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    era: 'Victorian',
    category: 'Interior Design'
  }
];

const eras = [
  { id: '1920s', name: '1920s Art Deco', icon: '✨' },
  { id: '1930s', name: '1930s Elegance', icon: '🎭' },
  { id: '1940s', name: '1940s Wartime', icon: '🌹' },
  { id: '1950s', name: '1950s Glamour', icon: '💫' },
  { id: '1960s', name: '1960s Mod', icon: '🌸' },
  { id: '1970s', name: '1970s Boho', icon: '🌻' }
];

export function HomeScreen({ context }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-vintage-gold/20 via-vintage-rose/20 to-vintage-gold/20 p-6 sticky top-0 z-10 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-vintage-gold font-serif mb-0" style={{ fontSize: '2rem' }}>Winni</h1>
            <p className="text-vintage-gold/70 font-serif -mt-1" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>Spinni</p>
          </div>
          <button className="p-2 hover:bg-vintage-gold/10 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-vintage-gold" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Today's Feature */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-vintage-gold" />
            <h2 className="text-vintage-gold font-serif">Today's Feature</h2>
          </div>
          <button
            onClick={() => context.navigateTo('article', { article: todayFeature })}
            className="w-full group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={todayFeature.image}
                alt={todayFeature.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-vintage-gold/90 mb-2 tracking-widest" style={{ fontSize: '0.75rem' }}>
                  {todayFeature.category}
                </p>
                <h3 className="text-white mb-2 font-serif">{todayFeature.title}</h3>
                <p className="text-white/80" style={{ fontSize: '0.875rem' }}>
                  {todayFeature.excerpt}
                </p>
              </div>
            </div>
          </button>
        </motion.section>

        {/* Discover Eras */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-vintage-gold font-serif mb-4">Discover Eras</h2>
          <div className="grid grid-cols-2 gap-3">
            {eras.map((era, index) => (
              <motion.button
                key={era.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                onClick={() => context.navigateTo('era-detail', { era: era.id })}
                className="bg-gradient-to-br from-vintage-gold/10 to-vintage-rose/10 dark:from-vintage-gold/20 dark:to-vintage-rose/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-vintage-gold/20"
              >
                <div className="mb-2" style={{ fontSize: '2rem' }}>{era.icon}</div>
                <p className="text-vintage-text dark:text-vintage-cream/90 font-serif">
                  {era.name}
                </p>
              </motion.button>
            ))}
          </div>
          <button
            onClick={() => context.navigateTo('eras')}
            className="w-full mt-4 py-3 bg-vintage-gold/5 hover:bg-vintage-gold/10 rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            <span className="text-vintage-gold">View All Eras</span>
            <ChevronRight className="w-4 h-4 text-vintage-gold" />
          </button>
        </motion.section>

        {/* Curated Stories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-vintage-gold font-serif mb-4">Curated Stories</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {curatedStories.map((story, index) => (
              <motion.button
                key={story.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => context.navigateTo('article', { article: story })}
                className="flex-shrink-0 w-64 group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <p className="text-vintage-gold/90 mb-1" style={{ fontSize: '0.75rem' }}>
                      {story.era}
                    </p>
                    <h4 className="text-white font-serif" style={{ fontSize: '1rem' }}>
                      {story.title}
                    </h4>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>
      </div>

      <BottomNav context={context} activeScreen="home" />
    </div>
  );
}
