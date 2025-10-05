import React from 'react';
import { ComicPanel } from './ComicPanel';
import { ComicImage } from './ComicImage';
import { motion } from 'framer-motion';
import { ZapIcon, CompassIcon, BrainIcon, MountainIcon, HeartIcon, StarIcon } from 'lucide-react';
export const ComicPage = () => {
  // Image URLs
  const imageUrls = ["/photo_5987779405784663904_y.jpg", "/photo_5987779405784663903_y.jpg", "/photo_5987779405784663902_y.jpg"];
  return <main className="pb-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 text-6xl font-bold text-yellow-500 transform -rotate-12 opacity-20 z-0">
        ZOOM!
      </div>
      <div className="absolute top-96 right-10 text-7xl font-bold text-blue-500 transform rotate-12 opacity-20 z-0">
        POW!
      </div>
      <div className="absolute bottom-40 left-1/4 text-8xl font-bold text-green-500 transform -rotate-6 opacity-20 z-0">
        BANG!
      </div>
      {/* Mobile-specific decorative elements */}
      <div className="md:hidden absolute top-20 right-5 text-4xl font-bold text-pink-500 transform rotate-12 opacity-20 z-0">
        WOW!
      </div>
      <div className="md:hidden absolute bottom-20 right-5 text-5xl font-bold text-purple-500 transform -rotate-6 opacity-20 z-0">
        BAM!
      </div>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <ComicPanel text="Congratulations Baby! Oh the Places You'll Go!" backgroundColor="bg-pink-100" textColor="text-purple-800" position="left" illustration={<motion.div animate={{
        rotate: [0, 10, 0, -10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 5
      }}>
              <StarIcon size={80} className="text-yellow-400 drop-shadow-lg" />
            </motion.div>} />
        {/* First comic image */}
        <ComicImage src={imageUrls[0]} position="right" rotation={3} delay={0.1} caption="You did, I was here" />
        <ComicPanel text="Hey Sham Sham! Today is your day. You're off to Great Places! You're off and  from Uniben stress!" backgroundColor="bg-blue-100" textColor="text-blue-700" position="right" delay={0.2} illustration={<motion.div animate={{
        y: [0, -10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
              <ZapIcon size={70} className="text-yellow-500 drop-shadow-lg" />
            </motion.div>} />
        <ComicPanel text="You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." backgroundColor="bg-green-100" textColor="text-green-800" position="left" delay={0.3} illustration={<motion.div animate={{
        scale: [1, 1.1, 1]
      }} transition={{
        repeat: Infinity,
        duration: 3
      }}>
              <BrainIcon size={70} className="text-pink-400 drop-shadow-lg" />
            </motion.div>} />
        {/* Second comic image */}
        <ComicImage src={imageUrls[1]} position="left" rotation={-2} delay={0.3} caption="The beginning" />
        <ComicPanel text="You're on your own, and YOU decide where to go now." backgroundColor="bg-yellow-100" textColor="text-yellow-800" position="right" delay={0.4} illustration={<motion.div animate={{
        rotate: [0, 360]
      }} transition={{
        repeat: Infinity,
        duration: 10,
        ease: 'linear'
      }}>
              <CompassIcon size={70} className="text-blue-500 drop-shadow-lg" />
            </motion.div>} />
        <ComicPanel text="You'll soar high, see great sights, and be the best of the best." backgroundColor="bg-purple-100" textColor="text-purple-800" position="left" delay={0.5} />
        {/* Third comic image */}
        <ComicImage src={imageUrls[2]} position="center" rotation={1} delay={0.5} caption="Not the end but the transition" />
        <ComicPanel text="But sometimes you'll face Bang-ups, Hang-ups, and Slumps. Un-slumping isn't easy, but you'll escape the Waiting Place—where everyone just waits." backgroundColor="bg-red-100" textColor="text-red-800" position="right" delay={0.6} />
        <ComicPanel text="Onward you'll go through foul weather and fears, facing problems with care. Life's a Great Balancing Act, but never forget: You'll succeed!" backgroundColor="bg-orange-100" textColor="text-orange-800" position="left" delay={0.7} />
        <motion.div className="text-center my-16 px-4" initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-700 transform -rotate-2 inline-block bg-yellow-200 px-6 py-3 rounded-lg border-4 border-black shadow-comic">
            DAWN, YOU'LL MOVE MOUNTAINS!
          </h2>
        </motion.div>
        <ComicPanel text="You're off to Great Places! CONGRATULATIONS on your sign out Baby!" backgroundColor="bg-blue-100" textColor="text-blue-800" position="right" delay={0.8} illustration={<motion.div animate={{
        y: [0, -5, 0],
        scale: [1, 1.05, 1]
      }} transition={{
        repeat: Infinity,
        duration: 3
      }}>
              <MountainIcon size={70} className="text-purple-500 drop-shadow-lg" />
            </motion.div>} />
      </div>
    </main>;
};