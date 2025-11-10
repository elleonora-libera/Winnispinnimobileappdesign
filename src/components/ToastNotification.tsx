import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
}

export function ToastNotification({ message }: ToastNotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-vintage-dark dark:bg-vintage-cream text-vintage-cream dark:text-vintage-dark px-6 py-3 rounded-full shadow-xl flex items-center gap-2 backdrop-blur-sm">
        <CheckCircle2 className="w-5 h-5" />
        <span>{message}</span>
      </div>
    </motion.div>
  );
}
