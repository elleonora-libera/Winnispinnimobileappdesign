import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { AppContextType, GalleryItem } from '../../App';
import { BottomNav } from '../BottomNav';
import { useState } from 'react';
import { GalleryViewer } from '../GalleryViewer';

interface GalleryScreenProps {
  context: AppContextType;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: 'https://images.unsplash.com/photo-1731750118449-cf1c40970080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZHJlc3MlMjBlbGVnYW50fGVufDF8fHx8MTc2MjUyODU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Elegant 1950s evening gown with classic silhouette',
    era: '1950s',
    tags: ['evening wear', 'glamour', 'formal']
  },
  {
    id: 'gallery-2',
    image: 'https://images.unsplash.com/photo-1579619312739-8d373e647330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFjY2Vzc29yaWVzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjI1Mjg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Vintage jewelry collection featuring Art Deco pieces',
    era: '1920s',
    tags: ['accessories', 'jewelry', 'art deco']
  },
  {
    id: 'gallery-3',
    image: 'https://images.unsplash.com/photo-1620443365729-908dfed20c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjI1Mjg1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Colorful vintage clothing and accessories',
    era: '1970s',
    tags: ['casual', 'bohemian', 'colorful']
  },
  {
    id: 'gallery-4',
    image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwZnVybml0dXJlJTIwZGVjb3J8ZW58MXx8fHwxNzYyNTI4NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Classic antique furniture and interior design',
    era: 'Victorian',
    tags: ['interior', 'furniture', 'decor']
  },
  {
    id: 'gallery-5',
    image: 'https://images.unsplash.com/photo-1690322041787-dc67d0624a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGZhc2hpb24lMjBwZWFybHN8ZW58MXx8fHwxNzYyNTI4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Pearl necklaces and vintage fashion accessories',
    era: '1950s',
    tags: ['pearls', 'accessories', 'elegant']
  },
  {
    id: 'gallery-6',
    image: 'https://images.unsplash.com/photo-1702374114989-3298a116224d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGhhbmRiYWclMjBwdXJzZXxlbnwxfHx8fDE3NjI1Mjg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Retro handbag with timeless design',
    era: '1960s',
    tags: ['handbag', 'accessories', 'mod']
  },
  {
    id: 'gallery-7',
    image: 'https://images.unsplash.com/photo-1649652917651-3e33c5306149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc2hvZXMlMjBoZWVsc3xlbnwxfHx8fDE3NjI1Mjg1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Vintage heels with classic elegance',
    era: '1950s',
    tags: ['shoes', 'heels', 'formal']
  },
  {
    id: 'gallery-8',
    image: 'https://images.unsplash.com/photo-1488693236539-d8f00a91b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk1MHMlMjBnbGFtb3VyfGVufDF8fHx8MTc2MjUyODQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: '1950s Hollywood glamour inspiration',
    era: '1950s',
    tags: ['glamour', 'hollywood', 'fashion']
  },
  {
    id: 'gallery-9',
    image: 'https://images.unsplash.com/photo-1590490977353-8ef7fec82c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk3MHMlMjBib2hvfGVufDF8fHx8MTc2MjUyODQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: '1970s bohemian style and free spirit fashion',
    era: '1970s',
    tags: ['boho', 'casual', 'freedom']
  }
];

export function GalleryScreen({ context }: GalleryScreenProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
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
          <h1 className="text-vintage-gold font-serif">Gallery</h1>
        </div>
      </div>

      <div className="p-6">
        <p className="text-vintage-text/70 dark:text-vintage-cream/70 mb-6">
          A curated collection of vintage fashion, accessories, and timeless design.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleItemClick(item)}
              className="group relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-vintage-gold mb-1" style={{ fontSize: '0.625rem' }}>
                    {item.era}
                  </p>
                  <p className="text-white line-clamp-2" style={{ fontSize: '0.75rem' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <BottomNav context={context} activeScreen="gallery" />

      {selectedItem && (
        <GalleryViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          context={context}
        />
      )}
    </div>
  );
}
