import type { Article, Era, GalleryItem } from '../App';

export const featuredArticle: Article = {
  id: 'featured1',
  title: 'The Golden Age of Hollywood Glamour',
  era: '1950s Elegance',
  image: '',
  excerpt: 'Discover the timeless elegance that defined an era of silver screen sophistication.',
  content: `The 1950s marked a pinnacle of Hollywood glamour, where elegance and sophistication reigned supreme. This was an era of full skirts, cinched waists, and an emphasis on feminine silhouettes that continues to inspire modern fashion.

Grace Kelly, Audrey Hepburn, and Elizabeth Taylor became icons not just for their acting prowess, but for their impeccable style. The hourglass figure was celebrated, achieved through structured garments and clever tailoring.

Key Elements:
- Full circle skirts paired with fitted bodices
- Pearl accessories and white gloves
- Cat-eye sunglasses and red lipstick
- Structured coats and elegant evening gowns

The influence of this era extends far beyond fashion. It represented a return to femininity and luxury after the wartime years, celebrating beauty and craftsmanship in every detail.`
};

export const mockArticles: Article[] = [
  {
    id: 'art1',
    title: 'Art Deco: Geometry Meets Luxury',
    era: '1920s Art Deco',
    image: '',
    excerpt: 'The roaring twenties brought geometric patterns and luxurious materials.',
    content: `The Art Deco movement of the 1920s revolutionized design with its bold geometric patterns, luxurious materials, and modern aesthetic. This era celebrated progress, glamour, and the machine age.

Fashion became more liberated, with dropped waistlines, shorter hemlines, and looser silhouettes that allowed for the energetic dances of the Jazz Age. Beading, sequins, and metallic threads adorned evening wear, creating movement and sparkle.

Iconic Features:
- Drop-waist dresses with geometric beading
- Cloche hats and bobbed hair
- Long pearl necklaces and cigarette holders
- Metallic fabrics and fringe details

The Art Deco aesthetic represented modernity and sophistication, breaking away from the ornate Victorian era and embracing clean lines and streamlined forms.`
  },
  {
    id: 'art2',
    title: 'The Power of Red Lipstick Through Time',
    era: 'Beauty Icons',
    image: '',
    excerpt: 'How one cosmetic staple became a symbol of confidence and rebellion.',
    content: `Red lipstick has been a constant companion through the decades, symbolizing everything from wartime morale to feminist empowerment. Its meaning has evolved, but its power remains unchanged.

In the 1940s, red lipstick was a patriotic statement. In the 1950s, it epitomized glamour. The 1970s saw it as a tool of liberation, while modern times embrace it as a versatile expression of personality.

Through the Ages:
- 1920s: Dark berry reds in cupid's bow shape
- 1940s: True reds as a morale booster
- 1950s: Classic Hollywood red lips
- 1970s: Bold matte reds with natural faces
- Modern: Every shade and finish imaginable

Red lipstick transcends trends, remaining a timeless symbol of confidence and self-expression.`
  },
  {
    id: 'art3',
    title: 'Bohemian Dreams of the Seventies',
    era: '1970s Boho',
    image: '',
    excerpt: 'Free spirits and flowing fabrics defined a decade of self-expression.',
    content: `The 1970s bohemian movement embraced natural fabrics, flowing silhouettes, and a rejection of rigid fashion rules. This era celebrated individuality, craftsmanship, and a connection to global cultures.

Influenced by hippie culture and folk traditions, 70s boho style featured earthy tones, intricate patterns, and handcrafted details. It was fashion as personal expression and political statement.

Essential Elements:
- Flowing maxi dresses and skirts
- Fringe, crochet, and macramé
- Wide-brimmed hats and headbands
- Suede boots and platform shoes
- Natural fibers and earthy colors

The bohemian aesthetic continues to resurface, reminding us that true style is about authenticity and creative freedom.`
  }
];

export const mockEras: Era[] = [
  {
    id: 'era1',
    name: '1920s Art Deco',
    decade: '1920s',
    description: 'The Jazz Age brought geometric glamour, dropped waists, and liberated silhouettes. Flappers danced the night away in beaded fringe dresses.',
    image: '',
    facts: [
      'Women\'s hemlines rose to just below the knee for the first time',
      'Coco Chanel introduced the "little black dress" in 1926',
      'Cloche hats became the defining accessory of the decade',
      'Art Deco patterns featured zigzags, sunbursts, and geometric shapes'
    ],
    styleNotes: [
      'Drop-waist silhouettes emphasized a boyish figure',
      'Heavy beading and sequins created movement and sparkle',
      'Accessories were key: long pearl necklaces, cigarette holders, feather boas',
      'Evening wear featured luxurious fabrics like silk, velvet, and lamé'
    ]
  },
  {
    id: 'era2',
    name: '1940s Wartime Elegance',
    decade: '1940s',
    description: 'Fashion adapted to wartime restrictions with practical elegance. Victory rolls, red lips, and make-do-and-mend creativity defined the era.',
    image: '',
    facts: [
      'Fabric rationing led to shorter skirts and simpler designs',
      'Women entered the workforce in record numbers, requiring practical clothing',
      'The "New Look" by Christian Dior in 1947 marked the end of austerity',
      'Red lipstick became a symbol of morale and patriotism'
    ],
    styleNotes: [
      'Tailored suits with padded shoulders conveyed strength',
      'Victory rolls and pin curls were practical yet glamorous hairstyles',
      'Stockings were scarce; women drew seams on their legs with eyeliner',
      'Platform shoes conserved leather while adding height'
    ]
  },
  {
    id: 'era3',
    name: '1950s Hollywood Glamour',
    decade: '1950s',
    description: 'Post-war optimism brought full skirts, cinched waists, and feminine sophistication. Hollywood icons set the standard for elegance.',
    image: '',
    facts: [
      'Christian Dior\'s "New Look" emphasized the hourglass figure',
      'Teenagers emerged as a distinct consumer group with their own fashion',
      'Grace Kelly\'s wedding dress influenced bridal fashion for decades',
      'The bikini gained popularity despite initial controversy'
    ],
    styleNotes: [
      'Full circle skirts paired with fitted bodices created the iconic silhouette',
      'Cat-eye glasses and winged eyeliner defined beauty standards',
      'Pearls, white gloves, and structured handbags were essential accessories',
      'Pastel colors, polka dots, and gingham patterns dominated prints'
    ]
  },
  {
    id: 'era4',
    name: '1960s Mod Revolution',
    decade: '1960s',
    description: 'Youth culture exploded with mini skirts, bold patterns, and space-age styles. London\'s Carnaby Street became fashion\'s epicenter.',
    image: '',
    facts: [
      'Mary Quant popularized the mini skirt in 1964',
      'Twiggy became the face of the mod look with her pixie cut and doe eyes',
      'Op art and psychedelic patterns reflected cultural experimentation',
      'Men\'s fashion became more adventurous with colorful suits and longer hair'
    ],
    styleNotes: [
      'Shift dresses and A-line silhouettes replaced structured fits',
      'Bold geometric patterns and color blocking made strong statements',
      'Go-go boots and Mary Jane shoes completed the mod look',
      'False eyelashes and pale lipstick created the "doll" makeup aesthetic'
    ]
  },
  {
    id: 'era5',
    name: '1970s Bohemian Freedom',
    decade: '1970s',
    description: 'Individualism flourished with flowing fabrics, earthy tones, and eclectic influences. Disco glam and hippie chic coexisted beautifully.',
    image: '',
    facts: [
      'Diane von Furstenberg introduced the wrap dress in 1974',
      'Platform shoes reached new heights, literally and fashionably',
      'Unisex fashion became increasingly popular',
      'Natural fabrics and handcrafted details reflected environmental consciousness'
    ],
    styleNotes: [
      'Maxi dresses and skirts in flowing, natural fabrics',
      'Fringe, crochet, macramé, and embroidery added texture',
      'Earth tones: rust, mustard, avocado, and burnt orange',
      'Wide-leg pants, bell bottoms, and jumpsuits for all genders'
    ]
  },
  {
    id: 'era6',
    name: '1980s Power & Expression',
    decade: '1980s',
    description: 'Bold shoulders, bright colors, and fearless mixing defined the decade. Power dressing met punk rebellion in spectacular fashion.',
    image: '',
    facts: [
      'Power suits with shoulder pads symbolized women in corporate America',
      'MTV launched in 1981, making music videos major fashion influencers',
      'Athletic wear became streetwear with brands like Nike and Adidas',
      'Designers like Versace and Armani rose to international fame'
    ],
    styleNotes: [
      'Oversized blazers with exaggerated shoulder pads',
      'Neon colors, metallics, and bold prints clashed gloriously',
      'Accessories were maximalist: chunky jewelry, oversized sunglasses',
      'Leg warmers, headbands, and athletic-inspired pieces crossed into daily wear'
    ]
  }
];

export const mockGalleryItems: GalleryItem[] = [
  {
    id: 'gal1',
    image: '',
    title: 'Flapper Elegance',
    era: '1920s',
    caption: 'A stunning beaded drop-waist dress exemplifying Jazz Age glamour'
  },
  {
    id: 'gal2',
    image: '',
    title: 'Victory Roll Perfection',
    era: '1940s',
    caption: 'Classic wartime hairstyle combining practicality with elegance'
  },
  {
    id: 'gal3',
    image: '',
    title: 'Circle Skirt Dreams',
    era: '1950s',
    caption: 'The iconic full skirt that defined post-war femininity'
  },
  {
    id: 'gal4',
    image: '',
    title: 'Mod Mini Revolution',
    era: '1960s',
    caption: 'Bold geometric patterns and daring hemlines of the youth movement'
  },
  {
    id: 'gal5',
    image: '',
    title: 'Boho Maxi Magic',
    era: '1970s',
    caption: 'Flowing fabrics and earthy tones embody free-spirited style'
  },
  {
    id: 'gal6',
    image: '',
    title: 'Power Dressing',
    era: '1980s',
    caption: 'Bold shoulders and bright colors defined professional women\'s wear'
  },
  {
    id: 'gal7',
    image: '',
    title: 'Art Deco Jewelry',
    era: '1920s',
    caption: 'Geometric precision meets luxurious craftsmanship'
  },
  {
    id: 'gal8',
    image: '',
    title: 'Hollywood Glamour',
    era: '1950s',
    caption: 'Grace and sophistication from the golden age of cinema'
  },
  {
    id: 'gal9',
    image: '',
    title: 'Psychedelic Prints',
    era: '1960s',
    caption: 'Vibrant patterns reflecting cultural experimentation'
  }
];
