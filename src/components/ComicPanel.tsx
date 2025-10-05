import React from 'react';
import { motion } from 'framer-motion';
interface ComicPanelProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  position?: 'left' | 'right';
  delay?: number;
  illustration?: React.ReactNode;
}
export const ComicPanel: React.FC<ComicPanelProps> = ({
  text,
  backgroundColor = 'bg-white',
  textColor = 'text-black',
  position = 'left',
  delay = 0,
  illustration
}) => {
  return <motion.div className={`comic-panel ${backgroundColor} border-4 border-black rounded-lg p-4 sm:p-6 md:p-8 my-6 sm:my-8 mx-2 sm:mx-4 md:mx-12 shadow-comic transform ${position === 'left' ? 'md:-rotate-1' : 'md:rotate-1'} relative`} initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.5,
    delay
  }}>
      {position === 'right' && illustration && <div className="absolute -top-12 -right-4 sm:-right-8 md:-right-16 z-10 transform rotate-12 scale-75 sm:scale-100">
          {illustration}
        </div>}
      {position === 'left' && illustration && <div className="absolute -top-12 -left-4 sm:-left-8 md:-left-16 z-10 transform -rotate-12 scale-75 sm:scale-100">
          {illustration}
        </div>}
      <div className="speech-bubble relative">
        <p className={`${textColor} text-lg sm:text-xl md:text-2xl font-bold leading-relaxed`}>
          {text}
        </p>
      </div>
    </motion.div>;
};