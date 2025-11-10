import { motion } from 'motion/react';
import { X, Copy, MessageCircle, Mail } from 'lucide-react';
import { AppContextType } from '../App';

interface SharePopupProps {
  title: string;
  onClose: () => void;
  context: AppContextType;
}

export function SharePopup({ title, onClose, context }: SharePopupProps) {
  const shareOptions = [
    { icon: Copy, label: 'Copy Link', action: () => handleShare('copy') },
    { icon: MessageCircle, label: 'Message', action: () => handleShare('message') },
    { icon: Mail, label: 'Email', action: () => handleShare('email') }
  ];

  const handleShare = (method: string) => {
    context.showToast('Share link copied!');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-vintage-cream dark:bg-vintage-dark rounded-t-3xl shadow-2xl w-full max-w-[480px] pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-vintage-gold/20">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-vintage-gold font-serif">Share</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-vintage-gold/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-vintage-gold" />
            </button>
          </div>
          <p className="text-vintage-text/70 dark:text-vintage-cream/70 line-clamp-1">
            {title}
          </p>
        </div>

        <div className="p-6 grid gap-3">
          {shareOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.label}
                onClick={option.action}
                className="flex items-center gap-4 p-4 bg-white dark:bg-vintage-dark/60 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-vintage-gold/10 rounded-full group-hover:bg-vintage-gold/20 transition-colors">
                  <Icon className="w-5 h-5 text-vintage-gold" />
                </div>
                <span className="text-vintage-text dark:text-vintage-cream">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
