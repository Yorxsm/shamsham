import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiftIcon } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
interface GiftBoxProps {
  onOpen: () => void;
}
export const GiftBox: React.FC<GiftBoxProps> = ({
  onOpen
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    width,
    height
  } = useWindowSize();
  const [showHint, setShowHint] = useState(true);
  const handleClick = () => {
    setIsOpen(true);
    setShowHint(false);
    onOpen();
    // Reset after animation
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };
  return <div className="relative">
      {isOpen && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}
      <motion.div className="cursor-pointer relative" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }} onClick={handleClick}>
        <motion.div className="absolute inset-0 bg-yellow-300 rounded-lg opacity-50" animate={{
        scale: isOpen ? [1, 1.5] : [1, 1.2, 1],
        opacity: isOpen ? [0.5, 0] : [0.5, 0.8, 0.5]
      }} transition={{
        duration: isOpen ? 0.8 : 2,
        repeat: isOpen ? 0 : Infinity,
        repeatType: 'loop'
      }} />
        {showHint && <motion.div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [0, 10, 0]
      }} transition={{
        opacity: {
          delay: 1,
          duration: 0.5
        },
        y: {
          repeat: Infinity,
          duration: 1.5
        }
      }}>
            <div className="text-center mb-2 bg-white px-3 py-1 rounded-full border-2 border-black shadow-comic">
              <p className="font-bold text-purple-700 text-sm">Click me!</p>
            </div>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-black border-r-[10px] border-r-transparent" />
          </motion.div>}
        <div className="bg-red-500 border-4 border-black rounded-lg p-4 shadow-comic relative z-10">
          <GiftIcon size={40} className="text-yellow-300" />
        </div>
      </motion.div>
      {isOpen && <motion.div className="absolute top-[-4.5rem] sm:-top-20 left-1/2 transform -translate-x-1/2 bg-white border-4 border-black rounded-lg p-4 shadow-comic whitespace-nowrap z-20" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0
    }}>
          <p className="text-lg font-bold text-purple-700">
            Your gift is in your wallet!
          </p>
        </motion.div>}
    </div>;
};