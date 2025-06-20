import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

interface Props {
  children: ReactNode;
}

const FadeInCard = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInCard;
