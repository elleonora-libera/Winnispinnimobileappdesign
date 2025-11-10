import { Menu, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { BottomNav } from './BottomNav';
import type { Screen, Article } from '../App';
import { mockArticles, featuredArticle } from '../data/mockData';

interface HomeScreenProps {
  navigateTo: (screen: Screen) => void;
  viewArticle: (article: Article) => void;
  addToFavorites: (item: Article) => void;
  isFavorite: (id: string) => boolean;
}

const eraButtons = [
  { decade: '1920s', style: 'Art Deco', color: 'from-amber-600 to-yellow-700' },
  { decade: '1940s', style: 'Wartime', color: 'from-slate-600 to-gray-700' },
  { decade: '1950s', style: 'Glamour', color: 'from-rose-500 to-pink-600' },
  { decade: '1960s', style: 'Mod', color: 'from-blue-500 to-indigo-600' },
  { decade: '1970s', style: 'Boho', color: 'from-orange-500 to-amber-600' },
  { decade: '1980s', style: 'Bold', color: 'from-purple-500 to-fuchsia-600' },
];

export function HomeScreen({ navigateTo, viewArticle, addToFavorites, isFavorite }: HomeScreenProps) {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-vintage-cream via-vintage-rose/10 to-vintage-mint/10 dark:from-vintage-dark dark:via-vintage-dark-alt dark:to-vintage-dark px-6 pt-8 pb-6 border-b border-vintage-gold/20 dark:border-vintage-gold-light/20">
        <div className="flex justify-between items-start mb-6">
          <Logo size="small" />
          <button className="p-2 rounded-full hover:bg-vintage-gold/10 dark:hover:bg-vintage-gold-light/10 transition-colors">
            <Menu className="w-6 h-6 text-vintage-gold dark:text-vintage-gold-light" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Today's Feature */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-vintage-rose dark:text-vintage-mint" />
            <h2 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light">Today's Feature</h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => viewArticle(featuredArticle)}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-vintage-beige to-vintage-rose/30 dark:from-vintage-dark-alt dark:to-vintage-gold/10 flex items-center justify-center">
              <div className="text-6xl">🎭</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
              <div>
                <span className="text-xs text-vintage-gold-light uppercase tracking-wider">
                  {featuredArticle.era}
                </span>
                <h3 className="text-xl font-serif text-white mt-1">
                  {featuredArticle.title}
                </h3>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-all">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </section>

        {/* Discover Eras */}
        <section>
          <h2 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
            Discover Eras
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            {eraButtons.map((era, index) => (
              <motion.button
                key={era.decade}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigateTo('eras')}
                className={`relative p-6 rounded-xl bg-gradient-to-br ${era.color} text-white shadow-md hover:shadow-xl transition-all overflow-hidden group`}
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">{era.decade}</div>
                  <div className="text-sm opacity-90">{era.style}</div>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all" />
              </motion.button>
            ))}
          </div>
        </section>

        {/* Curated Stories */}
        <section>
          <h2 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
            Curated Stories
          </h2>
          
          <div className="space-y-4">
            {mockArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => viewArticle(article)}
                className="flex gap-4 bg-white/50 dark:bg-vintage-dark-alt/50 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-vintage-beige to-vintage-rose/30 dark:from-vintage-dark-alt dark:to-vintage-gold/10 flex items-center justify-center flex-shrink-0 text-3xl">
                  {article.id === 'art1' ? '👗' : article.id === 'art2' ? '💄' : '👠'}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-vintage-rose dark:text-vintage-mint uppercase tracking-wider">
                    {article.era}
                  </span>
                  <h3 className="font-serif text-vintage-text-light dark:text-vintage-text-dark mt-1 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-vintage-text-light/60 dark:text-vintage-text-dark/60 mt-1 line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-vintage-gold dark:text-vintage-gold-light opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav currentScreen="home" navigateTo={navigateTo} />
    </div>
  );
}
