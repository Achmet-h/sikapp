import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'Sik App',
      subtitle: 'Sell anything from home. Coming soon.',
      notify: 'Notify Me',
    },
    ar: {
      title: 'Sik App',
      subtitle: 'ابدأ البيع من المنزل. نمّي تجارتك.',
      notify: 'أعلمني',
    },
    ku: {
      title: 'Sik App',
      subtitle: 'لە ماڵەوە بفرۆشە. بازرگانیەکەت گەشە پێ بدە.',
      notify: 'ئاگادارم بکە',
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-3">{content[lang].title}</h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">{content[lang].subtitle}</p>

        <div className="flex gap-3 justify-center mb-10">
          <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full border ${lang === 'en' ? 'bg-white text-black' : 'border-gray-500'}`}>EN</button>
          <button onClick={() => setLang('ar')} className={`px-3 py-1 rounded-full border ${lang === 'ar' ? 'bg-white text-black' : 'border-gray-500'}`}>AR</button>
          <button onClick={() => setLang('ku')} className={`px-3 py-1 rounded-full border ${lang === 'ku' ? 'bg-white text-black' : 'border-gray-500'}`}>KU</button>
        </div>

        <motion.input
          type="email"
          placeholder="you@example.com"
          className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-center py-2 text-lg w-64 mb-6"
          whileFocus={{ scale: 1.05 }}
        />
        <br />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold tracking-wide"
        >
          {content[lang].notify}
        </motion.button>
      </motion.div>

      <footer className="absolute bottom-5 text-gray-500 text-sm">
        © 2025 Sik App
      </footer>
    </div>
  );
}

