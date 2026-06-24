import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center font-sans"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Simple overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-10 py-16 text-center">
        {/* Brand tag */}
        <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-4 font-light">
          <span className="text-amber-400 font-bold text-lg">#1</span> Matrimony
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          {t.findYour}
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-1">
          <span className="text-amber-400">{t.rightMatch}</span> {t.here}
        </h2>

        {/* Description */}
        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl mx-auto">
          {t.mostTrusted}
        </p>

        {/* Simple Divider */}
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-6 rounded-full" />
      </div>
    </section>
  );
};

export default Home;