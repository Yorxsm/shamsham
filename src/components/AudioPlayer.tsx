import React, { useEffect, useState, useRef } from 'react';
import { VolumeXIcon, Volume2Icon } from 'lucide-react';
import { motion } from 'framer-motion';
import musicFile from '../assets/music.mp3';


export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [audioInitialized, setAudioInitialized] = useState(false);
  // Create audio element only once
  useEffect(() => {
    if (!audioInitialized) {
      const audio = new Audio();
      audio.src = musicFile; // Fallback music
      audio.loop = true;
      audioRef.current = audio;
      // Set up event listeners
      audio.addEventListener('canplaythrough', () => {
        setIsLoaded(true);
      });
      setAudioInitialized(true);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => {});
      }
    };
  }, [audioInitialized]);
  // Set up user interaction listeners
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Audio play failed:', error);
          // Try with a different audio source if the first one fails
          if (audioRef.current) {
            audioRef.current.src = musicFile;
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch(e => console.error('Backup audio failed too:', e));
          }
        });
      }
    };
    // Add click event listener to the entire document
    document.addEventListener('click', handleUserInteraction, {
      once: true
    });
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [isPlaying]);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Toggle play failed:', error);
        });
      }
    }
  };
  return <motion.div className="fixed bottom-4 right-4 z-50 bg-purple-700 text-white p-3 rounded-full shadow-comic border-2 border-black cursor-pointer" whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} onClick={togglePlay} initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      {isPlaying ? <VolumeXIcon size={24} /> : <Volume2Icon size={24} />}
    </motion.div>;
};