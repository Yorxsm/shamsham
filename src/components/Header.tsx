import React from 'react';
import { motion } from 'framer-motion';
export const Header = () => {
  return <motion.header className="py-8 px-4 text-center relative overflow-hidden" initial={{
    opacity: 0,
    y: -50
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }}>
      <div className="absolute inset-0 bg-blue-100 transform -skew-y-2 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-16 h-16 bg-yellow-300 rounded-full absolute top-6 left-6 opacity-70"></div>
        <div className="w-12 h-12 bg-red-300 rounded-full absolute top-10 right-10 opacity-60"></div>
        <div className="w-20 h-20 bg-green-300 rounded-full absolute bottom-4 left-1/4 opacity-50"></div>
      </div>
      <motion.h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-2 relative z-10" initial={{
      scale: 0.8
    }} animate={{
      scale: 1
    }} transition={{
      delay: 0.3,
      type: 'spring',
      stiffness: 100
    }}>
        Oh, The Places You'll Go!
      </motion.h1>
      <motion.div className="text-xl md:text-2xl text-red-600 font-bold relative z-10" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.6
    }}>
        A Special Message for Sham Sham
      </motion.div>
    </motion.header>;
};