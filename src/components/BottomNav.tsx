import { Home, Clock, Image, Heart, User } from 'lucide-react';
import { AppContextType, Screen } from '../App';

interface BottomNavProps {
  context: AppContextType;
  activeScreen: 'home' | 'eras' | 'gallery' | 'favorites' | 'profile';
}

export function BottomNav({ context, activeScreen }: BottomNavProps) {
  const navItems = [
    { id: 'home' as Screen, icon: Home, label: 'Home' },
    { id: 'eras' as Screen, icon: Clock, label: 'Eras' },
    { id: 'gallery' as Screen, icon: Image, label: 'Gallery' },
    { id: 'favorites' as Screen, icon: Heart, label: 'Favorites' },
    { id: 'profile' as Screen, icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-vintage-cream/95 dark:bg-vintage-dark/95 backdrop-blur-lg border-t border-vintage-gold/20 z-50">
      <div className="max-w-[480px] mx-auto">
        <nav className="flex items-center justify-around py-3 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => context.navigateTo(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'text-vintage-gold scale-105' : 'text-vintage-text/60 dark:text-vintage-cream/60 hover:text-vintage-gold/70'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'fill-vintage-gold/20' : ''}`} />
                <span style={{ fontSize: '0.625rem' }} className="tracking-wide">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
