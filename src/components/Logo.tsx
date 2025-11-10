import { Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showTagline?: boolean;
}

export function Logo({ size = 'medium', showTagline = false }: LogoProps) {
  const sizes = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  };

  return (
    <div className="text-center">
      <div className="relative inline-block">
        <div className={`${sizes[size]} font-serif text-vintage-gold dark:text-vintage-gold-light`}>
          <div className="relative">
            <span className="block">Winni</span>
            <span className="block text-lg -mt-2 opacity-70 tracking-wider">Spinni</span>
          </div>
        </div>
        <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-vintage-rose dark:text-vintage-mint animate-pulse" />
      </div>
      {showTagline && (
        <p className="mt-4 text-sm text-vintage-text-light dark:text-vintage-text-dark tracking-widest">
          Discover Timeless Charm
        </p>
      )}
    </div>
  );
}
