import { motion } from 'motion/react';
import { ArrowLeft, Info } from 'lucide-react';
import { AppContextType, Article } from '../../App';
import { useState } from 'react';
import { DidYouKnowPopup } from '../DidYouKnowPopup';

interface EraDetailScreenProps {
  context: AppContextType;
}

const eraData: Record<string, {
  name: string;
  years: string;
  image: string;
  description: string;
  keyFeatures: string[];
  styleNotes: string[];
  culturalContext: string;
  trivia: string[];
  relatedArticles: Article[];
}> = {
  '1920s': {
    name: '1920s Art Deco',
    years: '1920-1929',
    image: 'https://images.unsplash.com/photo-1676040038506-0932c64a0223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFzaGlvbiUyMDE5MjBzfGVufDF8fHx8MTc2MjUyODQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The Roaring Twenties brought liberation, jazz, and geometric glamour. This decade saw dramatic social change, with women gaining the right to vote and embracing new freedoms in fashion and lifestyle.',
    keyFeatures: [
      'Dropped waistlines and loose silhouettes',
      'Bobbed hair and cloche hats',
      'Beaded and fringed dresses',
      'Art Deco geometric patterns',
      'T-strap shoes and long pearl necklaces'
    ],
    styleNotes: [
      'The flapper dress became iconic',
      'Androgynous silhouettes challenged traditional femininity',
      'Luxury materials like silk, velvet, and sequins',
      'Egyptian motifs inspired by King Tut\'s tomb discovery'
    ],
    culturalContext: 'The 1920s was a period of economic prosperity and cultural dynamism. Jazz music flourished, cinema became popular entertainment, and Art Deco influenced architecture and design worldwide. The era celebrated modernity and broke from Victorian constraints.',
    trivia: [
      'Coco Chanel introduced the little black dress in 1926',
      'Flappers often wore galoshes unfastened, creating a "flapping" sound',
      'The bobbed haircut was so controversial some women wore wigs over it'
    ],
    relatedArticles: []
  },
  '1950s': {
    name: '1950s Glamour',
    years: '1950-1959',
    image: 'https://images.unsplash.com/photo-1488693236539-d8f00a91b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk1MHMlMjBnbGFtb3VyfGVufDF8fHx8MTc2MjUyODQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The 1950s celebrated ultra-femininity with cinched waists, full skirts, and Hollywood glamour. This was the golden age of American prosperity and optimism.',
    keyFeatures: [
      'Cinched waists with full skirts',
      'Peter Pan collars and cardigans',
      'Pencil skirts for a sleek silhouette',
      'Petticoats and crinolines',
      'Cat-eye sunglasses and winged eyeliner'
    ],
    styleNotes: [
      'Christian Dior\'s "New Look" defined the decade',
      'Emphasis on hourglass figure',
      'Pastel colors and polka dots',
      'Matching sets and coordinated accessories'
    ],
    culturalContext: 'Post-war prosperity brought consumer culture and suburban living. Television became mainstream, rock and roll emerged, and Hollywood stars like Grace Kelly and Audrey Hepburn became style icons.',
    trivia: [
      'Poodle skirts were named after the appliqué poodle designs',
      'The average woman owned 3-4 pairs of gloves',
      'Red lipstick was the most popular makeup item'
    ],
    relatedArticles: []
  },
  '1970s': {
    name: '1970s Boho',
    years: '1970-1979',
    image: 'https://images.unsplash.com/photo-1590490977353-8ef7fec82c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwMTk3MHMlMjBib2hvfGVufDF8fHx8MTc2MjUyODQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The 1970s embraced freedom, natural aesthetics, and eclectic style. This decade saw the rise of bohemian fashion, disco glamour, and individual expression.',
    keyFeatures: [
      'Bell-bottom jeans and palazzo pants',
      'Peasant blouses and maxi dresses',
      'Platform shoes and clogs',
      'Fringe, macramé, and crochet',
      'Earth tones and bold patterns'
    ],
    styleNotes: [
      'Mix of hippie and disco influences',
      'Natural fabrics like cotton and suede',
      'Layering and eclectic accessories',
      'Vintage and handmade items valued'
    ],
    culturalContext: 'The 1970s saw social activism, environmental consciousness, and cultural diversity. Disco music dominated dance floors, while punk emerged as a counter-culture. Fashion became more democratic and individualistic.',
    trivia: [
      'Mood rings were invented in 1975',
      'The average pair of bell-bottoms had a 22-inch flare',
      'Halston designed affordable fashion for JCPenney'
    ],
    relatedArticles: []
  }
};

export function EraDetailScreen({ context }: EraDetailScreenProps) {
  const [showTrivia, setShowTrivia] = useState(false);
  const [triviaIndex, setTriviaIndex] = useState(0);
  
  const eraId = context.selectedEra || '1920s';
  const era = eraData[eraId] || eraData['1920s'];

  const handleTriviaClick = (index: number) => {
    setTriviaIndex(index);
    setShowTrivia(true);
  };

  return (
    <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark pb-20">
      {/* Header with image */}
      <div className="relative h-80">
        <img
          src={era.image}
          alt={era.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <button
          onClick={() => context.navigateTo('eras')}
          className="absolute top-6 left-6 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-vintage-gold mb-2">{era.years}</p>
          <h1 className="text-white font-serif mb-2">{era.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-vintage-text dark:text-vintage-cream/90 leading-relaxed">
            {era.description}
          </p>
        </motion.section>

        {/* Timeline placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-vintage-gold/5 via-vintage-rose/5 to-vintage-gold/5 rounded-xl p-6 border border-vintage-gold/20"
        >
          <h2 className="text-vintage-gold font-serif mb-4">Timeline</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-vintage-gold mt-2 flex-shrink-0" />
                <div>
                  <p className="text-vintage-gold" style={{ fontSize: '0.875rem' }}>
                    {Number(era.years.split('-')[0]) + (i - 1) * 3}
                  </p>
                  <p className="text-vintage-text/70 dark:text-vintage-cream/70" style={{ fontSize: '0.875rem' }}>
                    Key moment in {era.name.split(' ')[0]} history
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-vintage-gold font-serif mb-4">Key Features</h2>
          <ul className="space-y-3">
            {era.keyFeatures.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-vintage-gold mt-1">✦</span>
                <span className="text-vintage-text dark:text-vintage-cream/90">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Style Notes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-vintage-gold font-serif mb-4">Style Notes</h2>
          <div className="grid gap-3">
            {era.styleNotes.map((note, index) => (
              <div key={index} className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/10">
                <p className="text-vintage-text dark:text-vintage-cream/90" style={{ fontSize: '0.875rem' }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Cultural Context */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-vintage-gold font-serif mb-4">Cultural Context</h2>
          <p className="text-vintage-text dark:text-vintage-cream/90 leading-relaxed">
            {era.culturalContext}
          </p>
        </motion.section>

        {/* Did You Know */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-vintage-gold font-serif mb-4">Did You Know?</h2>
          <div className="grid gap-3">
            {era.trivia.map((fact, index) => (
              <button
                key={index}
                onClick={() => handleTriviaClick(index)}
                className="bg-gradient-to-br from-vintage-gold/10 to-vintage-rose/10 rounded-lg p-4 border border-vintage-gold/20 hover:shadow-lg transition-all text-left group"
              >
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-vintage-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-vintage-text dark:text-vintage-cream/90">
                    {fact}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.section>
      </div>

      {showTrivia && (
        <DidYouKnowPopup
          fact={era.trivia[triviaIndex]}
          onClose={() => setShowTrivia(false)}
        />
      )}
    </div>
  );
}
