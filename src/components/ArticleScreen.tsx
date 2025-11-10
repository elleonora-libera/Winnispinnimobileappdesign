import { ArrowLeft, Heart, Share2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { Article } from '../App';
import { mockArticles } from '../data/mockData';

interface ArticleScreenProps {
  article: Article;
  onBack: () => void;
  addToFavorites: (article: Article) => void;
  isFavorite: boolean;
}

export function ArticleScreen({ article, onBack, addToFavorites, isFavorite }: ArticleScreenProps) {
  const [showRelated, setShowRelated] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const relatedArticles = mockArticles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-vintage-cream/80 dark:bg-vintage-dark/80 backdrop-blur-lg border-b border-vintage-gold/20 dark:border-vintage-gold-light/20">
        <div className="px-6 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-vintage-gold/10 dark:hover:bg-vintage-gold-light/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-vintage-gold dark:text-vintage-gold-light" />
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setShowShareOptions(true)}
              className="p-2 rounded-full hover:bg-vintage-gold/10 dark:hover:bg-vintage-gold-light/10 transition-colors"
            >
              <Share2 className="w-5 h-5 text-vintage-gold dark:text-vintage-gold-light" />
            </button>
            <button 
              onClick={() => addToFavorites(article)}
              className="p-2 rounded-full hover:bg-vintage-gold/10 dark:hover:bg-vintage-gold-light/10 transition-colors"
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${
                  isFavorite 
                    ? 'fill-vintage-rose text-vintage-rose dark:fill-vintage-mint dark:text-vintage-mint' 
                    : 'text-vintage-gold dark:text-vintage-gold-light'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-[3/2] bg-gradient-to-br from-vintage-beige to-vintage-rose/30 dark:from-vintage-dark-alt dark:to-vintage-gold/10 flex items-center justify-center text-6xl"
      >
        {article.id === 'featured1' || article.id === 'art1' ? '🎭' : 
         article.id === 'art2' ? '💄' : '👗'}
      </motion.div>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-vintage-rose/20 dark:bg-vintage-mint/20 text-vintage-rose dark:text-vintage-mint text-xs uppercase tracking-wider mb-3">
            {article.era}
          </span>
          <h1 className="text-3xl font-serif text-vintage-gold dark:text-vintage-gold-light leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="prose prose-vintage max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-vintage-text-light dark:text-vintage-text-dark mb-4 leading-relaxed whitespace-pre-line"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Related Articles Button */}
        <button
          onClick={() => setShowRelated(true)}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-vintage-gold/10 to-vintage-rose/10 dark:from-vintage-gold-light/10 dark:to-vintage-mint/10 border border-vintage-gold/20 dark:border-vintage-gold-light/20 flex items-center justify-center gap-2 hover:border-vintage-gold dark:hover:border-vintage-gold-light transition-all"
        >
          <Sparkles className="w-4 h-4 text-vintage-gold dark:text-vintage-gold-light" />
          <span className="text-vintage-gold dark:text-vintage-gold-light">
            View Related Stories
          </span>
        </button>
      </div>

      {/* Related Articles Pop-up */}
      <AnimatePresence>
        {showRelated && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRelated(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              className="fixed inset-x-0 bottom-0 max-w-md mx-auto bg-white dark:bg-vintage-dark-alt rounded-t-3xl p-6 shadow-2xl z-50"
            >
              <div className="w-12 h-1 bg-vintage-beige dark:bg-vintage-gold/20 rounded-full mx-auto mb-6" />
              
              <h3 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
                Related Stories
              </h3>
              
              <div className="space-y-3 mb-6">
                {relatedArticles.map((related) => (
                  <div
                    key={related.id}
                    className="flex gap-3 p-3 rounded-lg bg-vintage-cream/50 dark:bg-vintage-dark/50 hover:bg-vintage-cream dark:hover:bg-vintage-dark transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-vintage-beige to-vintage-rose/30 dark:from-vintage-dark-alt dark:to-vintage-gold/10 flex items-center justify-center flex-shrink-0 text-xl">
                      {related.id === 'art1' ? '👗' : related.id === 'art2' ? '💄' : '👠'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-vintage-rose dark:text-vintage-mint uppercase tracking-wider">
                        {related.era}
                      </p>
                      <p className="font-serif text-vintage-text-light dark:text-vintage-text-dark mt-1 line-clamp-2">
                        {related.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowRelated(false)}
                className="w-full py-3 rounded-full bg-vintage-gold dark:bg-vintage-gold-light text-white"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Share Options Pop-up */}
      <AnimatePresence>
        {showShareOptions && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowShareOptions(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto bg-white dark:bg-vintage-dark-alt rounded-2xl p-6 shadow-2xl z-50"
            >
              <h3 className="text-xl font-serif text-vintage-gold dark:text-vintage-gold-light mb-4">
                Share Article
              </h3>
              <div className="space-y-2 mb-6">
                <button className="w-full py-3 px-4 rounded-lg bg-vintage-cream dark:bg-vintage-dark text-left text-vintage-text-light dark:text-vintage-text-dark hover:bg-vintage-beige dark:hover:bg-vintage-dark-alt transition-colors">
                  Copy Link
                </button>
                <button className="w-full py-3 px-4 rounded-lg bg-vintage-cream dark:bg-vintage-dark text-left text-vintage-text-light dark:text-vintage-text-dark hover:bg-vintage-beige dark:hover:bg-vintage-dark-alt transition-colors">
                  Share via Email
                </button>
              </div>
              <button
                onClick={() => setShowShareOptions(false)}
                className="w-full py-3 rounded-full border border-vintage-gold/30 dark:border-vintage-gold-light/30 text-vintage-text-light dark:text-vintage-text-dark"
              >
                Cancel
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
