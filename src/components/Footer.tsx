import React from 'react';
import { GiftBox } from './GiftBox';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
interface FooterProps {
  showConfetti: boolean;
  setShowConfetti: (show: boolean) => void;
}
export const Footer: React.FC<FooterProps> = ({
  showConfetti,
  setShowConfetti
}) => {
  return <footer className="py-12 px-4 relative">
      <div className="absolute inset-0 bg-blue-200 transform skew-y-2 z-0"></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <motion.div className="mb-8" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <GiftBox onOpen={() => setShowConfetti(true)} />
        </motion.div>
        <motion.div className="text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <p className="text-lg text-purple-800 flex items-center justify-center">
            5194 with
            <motion.span animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }} className="mx-2">
              <HeartIcon className="text-red-500" size={24} />
            </motion.span>
            for Sham Sham
          </p>
        </motion.div>
      </div>
    </footer>;
};