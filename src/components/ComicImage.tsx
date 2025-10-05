import React from 'react';
import { motion } from 'framer-motion';
interface ComicImageProps {
  src: string;
  alt?: string;
  position?: 'left' | 'right' | 'center';
  rotation?: number;
  delay?: number;
  caption?: string;
}
export const ComicImage: React.FC<ComicImageProps> = ({
  src,
  alt = 'Comic image',
  position = 'center',
  rotation = 0,
  delay = 0,
  caption = 'KAPOW!'
}) => {
  // Position styling
  const positionClass = position === 'left' ? 'ml-4 mr-auto' : position === 'right' ? 'mr-4 ml-auto' : 'mx-auto';
  // Random animation selection
  const animations = [{
    // Pulse animation
    animate: {
      scale: [1, 1.05, 1],
      rotate: rotation
    },
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2
    }
  }, {
    // Float animation
    animate: {
      y: [0, -10, 0],
      rotate: rotation
    },
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 3
    }
  }, {
    // Shake animation
    animate: {
      x: [0, 5, -5, 5, 0],
      rotate: [rotation, rotation + 2, rotation - 2, rotation + 2, rotation]
    },
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2.5
    }
  }];
  // Pick a random animation
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  return <motion.div className={`my-8 ${positionClass} max-w-xs relative`} initial={{
    opacity: 0,
    scale: 0.8
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.5,
    delay
  }}>
      <motion.div className="relative z-10" animate={randomAnimation.animate} transition={randomAnimation.transition}>
        {/* Comic border */}
        <div className="border-4 border-black bg-white p-2 shadow-comic transform rotate-0">
          {/* Image with filter */}
          <div className="overflow-hidden">
            <img src={src} alt={alt} className="w-full h-auto filter grayscale contrast-125" />
          </div>
          {/* Comic dots overlay */}
          <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '8px 8px'
        }} />
          {/* Comic caption */}
          <div className="bg-yellow-300 border-t-2 border-black p-2 text-center">
            <motion.p className="text-sm font-bold" animate={{
            scale: [1, 1.02, 1]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }}>
              {caption}
            </motion.p>
          </div>
        </div>
        {/* Comic-style exclamation */}
        <motion.div className="absolute -top-6 -right-6 bg-red-500 text-white text-sm font-bold p-3 rounded-full border-2 border-black shadow-comic z-20" animate={{
        rotate: [0, 10, 0, -10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          {['WOW!', 'POW!', 'BAM!', 'ZOOM!', 'WHAM!'][Math.floor(Math.random() * 5)]}
        </motion.div>
      </motion.div>
    </motion.div>;
};