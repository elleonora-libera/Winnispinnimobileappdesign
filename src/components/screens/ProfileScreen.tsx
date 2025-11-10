import { motion } from 'motion/react';
import { ArrowLeft, User, Heart, Bell, Info, MessageSquare, Settings, Moon, Sun } from 'lucide-react';
import { AppContextType } from '../../App';
import { BottomNav } from '../BottomNav';
import { useState } from 'react';
import { AboutPopup } from '../AboutPopup';

interface ProfileScreenProps {
  context: AppContextType;
}

export function ProfileScreen({ context }: ProfileScreenProps) {
  const [showAbout, setShowAbout] = useState(false);

  const menuItems = [
    {
      icon: Heart,
      label: 'My Favorites',
      count: context.favorites.length,
      action: () => context.navigateTo('favorites')
    },
    {
      icon: Bell,
      label: 'Notifications',
      badge: null,
      action: () => {}
    },
    {
      icon: Info,
      label: 'About WinniSpinni',
      action: () => setShowAbout(true)
    },
    {
      icon: MessageSquare,
      label: 'Feedback',
      action: () => {}
    },
    {
      icon: Settings,
      label: 'Settings',
      action: () => {}
    }
  ];

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
          <h1 className="text-vintage-gold font-serif">Profile</h1>
        </div>
      </div>

      <div className="p-6">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vintage-gold/30 to-vintage-rose/30 flex items-center justify-center mb-4 border-2 border-vintage-gold/30">
            <User className="w-12 h-12 text-vintage-gold" />
          </div>
          <h2 className="text-vintage-gold font-serif mb-1">Vintage Enthusiast</h2>
          <p className="text-vintage-text/60 dark:text-vintage-cream/60">
            Exploring timeless elegance
          </p>
        </motion.div>

        {/* Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 bg-white dark:bg-vintage-dark/60 rounded-xl p-4 shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {context.theme === 'light' ? (
                <Sun className="w-5 h-5 text-vintage-gold" />
              ) : (
                <Moon className="w-5 h-5 text-vintage-gold" />
              )}
              <div>
                <p className="text-vintage-text dark:text-vintage-cream">Appearance</p>
                <p className="text-vintage-text/60 dark:text-vintage-cream/60" style={{ fontSize: '0.75rem' }}>
                  {context.theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                </p>
              </div>
            </div>
            <button
              onClick={context.toggleTheme}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                context.theme === 'dark' ? 'bg-vintage-gold' : 'bg-vintage-gold/30'
              }`}
            >
              <motion.div
                layout
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                style={{
                  left: context.theme === 'dark' ? '28px' : '4px'
                }}
              />
            </button>
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={item.action}
                className="w-full bg-white dark:bg-vintage-dark/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-vintage-gold/10 group-hover:bg-vintage-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-vintage-gold" />
                  </div>
                  <span className="text-vintage-text dark:text-vintage-cream">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.count !== undefined && item.count > 0 && (
                    <span className="px-2 py-1 bg-vintage-gold/20 text-vintage-gold rounded-full" style={{ fontSize: '0.75rem' }}>
                      {item.count}
                    </span>
                  )}
                  <svg
                    className="w-5 h-5 text-vintage-text/30 dark:text-vintage-cream/30 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* App Version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-vintage-text/40 dark:text-vintage-cream/40" style={{ fontSize: '0.75rem' }}>
            WinniSpinni v1.0.0
          </p>
        </motion.div>
      </div>

      <BottomNav context={context} activeScreen="profile" />

      {showAbout && <AboutPopup onClose={() => setShowAbout(false)} />}
    </div>
  );
}
