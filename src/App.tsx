import React, { useState } from 'react';
import { Header } from './components/Header';
import { ComicPage } from './components/ComicPage';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { MetaTags } from './components/MetaTags';
export function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  return <div className="comic-container bg-yellow-50 min-h-screen w-full overflow-x-hidden font-comic">
      <MetaTags />
      <Header />
      <ComicPage />
      <Footer showConfetti={showConfetti} setShowConfetti={setShowConfetti} />
      <AudioPlayer />
    </div>;
}