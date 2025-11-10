import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Heart, X } from 'lucide-react';
import { AppContextType, Article, GalleryItem } from '../../App';
import { BottomNav } from '../BottomNav';

interface FavoritesScreenProps {
  context: AppContextType;
}

export function FavoritesScreen({ context }: FavoritesScreenProps) {
  const isArticle = (item: Article | GalleryItem): item is Article => {
    return 'content' in item;
  };

  const handleItemClick = (item: Article | GalleryItem) => {
    if (isArticle(item)) {
      context.navigateTo('article', { article: item });
    } else {
      // Open gallery viewer (for now just show in context)
      context.navigateTo('gallery', { galleryItem: item });
    }
  };

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
          <h1 className="text-vintage-gold font-serif">Favorites</h1>
        </div>
      </div>

      <div className="p-6">
        {context.favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="mb-6 p-8 rounded-full bg-vintage-gold/10">
              <Heart className="w-16 h-16 text-vintage-gold/40" />
            </div>
            <h2 className="text-vintage-gold font-serif mb-3">No Favorites Yet</h2>
            <p className="text-vintage-text/60 dark:text-vintage-cream/60 max-w-sm">
              Your favorites will appear here. Start exploring and save the stories and images that inspire you.
            </p>
            <button
              onClick={() => context.navigateTo('home')}
              className="mt-6 px-6 py-3 bg-vintage-gold text-vintage-cream rounded-full hover:shadow-lg transition-all"
            >
              Start Exploring
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <p className="text-vintage-text/70 dark:text-vintage-cream/70 mb-6">
              {context.favorites.length} {context.favorites.length === 1 ? 'item' : 'items'} saved
            </p>

            <AnimatePresence mode="popLayout">
              {context.favorites.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <button
                    onClick={() => handleItemClick(item)}
                    className="w-full"
                  >
                    <div className="bg-white dark:bg-vintage-dark/60 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <div className="flex gap-4">
                        <div className="w-28 h-28 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={isArticle(item) ? item.title : item.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 p-4 pr-12 text-left">
                          {isArticle(item) ? (
                            <>
                              <p className="text-vintage-gold mb-1" style={{ fontSize: '0.75rem' }}>
                                {item.category}
                              </p>
                              <h3 className="text-vintage-text dark:text-vintage-cream font-serif mb-2 line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-vintage-text/60 dark:text-vintage-cream/60 line-clamp-2" style={{ fontSize: '0.875rem' }}>
                                {item.excerpt}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-vintage-gold mb-1" style={{ fontSize: '0.75rem' }}>
                                {item.era}
                              </p>
                              <p className="text-vintage-text dark:text-vintage-cream line-clamp-3">
                                {item.caption}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {item.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-0.5 bg-vintage-gold/10 text-vintage-gold rounded-full"
                                    style={{ fontSize: '0.625rem' }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      context.removeFavorite(item.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white dark:bg-vintage-dark rounded-full shadow-md hover:bg-vintage-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <BottomNav context={context} activeScreen="favorites" />
    </div>
  );
}
