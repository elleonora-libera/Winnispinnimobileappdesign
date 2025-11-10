import { motion } from 'motion/react';
import { X, Heart } from 'lucide-react';
import { AppContextType, GalleryItem } from '../App';

interface GalleryViewerProps {
  item: GalleryItem;
  onClose: () => void;
  context: AppContextType;
}

export function GalleryViewer({ item, onClose, context }: GalleryViewerProps) {
  const isFavorited = context.isFavorite(item.id);

  const handleFavorite = () => {
    if (isFavorited) {
      context.removeFavorite(item.id);
    } else {
      context.addFavorite(item);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-6">
        <button
          onClick={onClose}
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFavorite();
          }}
          className={`p-2 backdrop-blur-sm rounded-full transition-all ${
            isFavorited 
              ? 'bg-vintage-gold text-vintage-cream' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <Heart className={`w-6 h-6 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          src={item.image}
          alt={item.caption}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-t from-black via-black/90 to-transparent p-6 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-vintage-gold mb-2">{item.era}</p>
        <p className="text-white mb-4">{item.caption}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full"
              style={{ fontSize: '0.75rem' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
