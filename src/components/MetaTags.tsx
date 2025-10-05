import React from 'react';
import { Helmet } from 'react-helmet';
export const MetaTags = () => {
  return <Helmet>
      {/* Primary Meta Tags */}
      <title>Oh, The Places You'll Go! - A Special Message</title>
      <meta name="title" content="Oh, The Places You'll Go! - A Special Message" />
      <meta name="description" content="A special Dr. Seuss inspired message for Sham Sham with a surprise gift waiting!" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content="Oh, The Places You'll Go! - A Special Message" />
      <meta property="og:description" content="A special Dr. Seuss inspired message for Sham Sham with a surprise gift waiting!" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content="Oh, The Places You'll Go! - A Special Message" />
      <meta property="twitter:description" content="A special Dr. Seuss inspired message for Sham Sham with a surprise gift waiting!" />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
    </Helmet>;
};