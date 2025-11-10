import { motion } from 'motion/react';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { AppContextType } from '../../App';
import { useState } from 'react';
import { SharePopup } from '../SharePopup';

interface ArticleScreenProps {
  context: AppContextType;
}

export function ArticleScreen({ context }: ArticleScreenProps) {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const article = context.selectedArticle;

  if (!article) {
    return (
      <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark flex items-center justify-center">
        <p className="text-vintage-text dark:text-vintage-cream">Article not found</p>
      </div>
    );
  }

  const isFavorited = context.isFavorite(article.id);

  const handleFavorite = () => {
    if (isFavorited) {
      context.removeFavorite(article.id);
    } else {
      context.addFavorite(article);
    }
  };

  const handleShare = () => {
    setShowSharePopup(true);
  };

  return (
    <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark">
      {/* Header Image */}
      <div className="relative h-96">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <button
          onClick={() => context.navigateTo('home')}
          className="absolute top-6 left-6 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="absolute top-6 right-6 flex gap-2">
          <button
            onClick={handleFavorite}
            className={`p-2 backdrop-blur-sm rounded-full transition-all ${
              isFavorited 
                ? 'bg-vintage-gold text-vintage-cream' 
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
          >
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-vintage-gold mb-2 tracking-widest" style={{ fontSize: '0.75rem' }}>
            {article.category} • {article.era}
          </p>
          <h1 className="text-white font-serif">{article.title}</h1>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 space-y-6"
      >
        <div className="prose prose-vintage max-w-none">
          <p className="text-vintage-text/80 dark:text-vintage-cream/80 italic border-l-2 border-vintage-gold pl-4 py-2">
            {article.excerpt}
          </p>

          <div className="mt-6 text-vintage-text dark:text-vintage-cream/90 leading-relaxed space-y-4">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-12 pt-8 border-t border-vintage-gold/20">
          <h2 className="text-vintage-gold font-serif mb-4">Related Stories</h2>
          <p className="text-vintage-text/60 dark:text-vintage-cream/60 italic">
            More articles coming soon...
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6">
          <button
            onClick={handleFavorite}
            className={`flex-1 py-3 rounded-full flex items-center justify-center gap-2 transition-all ${
              isFavorited
                ? 'bg-vintage-gold text-vintage-cream'
                : 'bg-vintage-gold/10 text-vintage-gold hover:bg-vintage-gold/20'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
            <span>{isFavorited ? 'Saved' : 'Save'}</span>
          </button>
          <button
            onClick={handleShare}
            className="flex-1 py-3 rounded-full flex items-center justify-center gap-2 bg-vintage-gold/10 text-vintage-gold hover:bg-vintage-gold/20 transition-all"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </motion.div>

      {showSharePopup && (
        <SharePopup
          title={article.title}
          onClose={() => setShowSharePopup(false)}
          context={context}
        />
      )}
    </div>
  );
}
