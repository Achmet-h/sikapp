import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [lang, setLang] = useState('en');
  const [email, setEmail] = useState('');

  const content = {
    en: {
      title: 'Sik App',
      subtitle: 'Sell anything from home. Coming soon.',
      notify: 'Notify Me',
      placeholder: 'Email',
    },
    ar: {
      title: 'Sik App',
      subtitle: 'ابدأ البيع من المنزل. نمّي تجارتك.',
      notify: 'أعلمني',
      placeholder: 'البريد الإلكتروني',
    },
    ku: {
      title: 'Sik App',
      subtitle: 'لە ماڵەوە بفرۆشە. بازرگانیەکەت گەشە پێ بدە.',
      notify: 'ئاگادارم بکە',
      placeholder: 'ئیمەیڵ',
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
      {/* Language Selector - Minimal top right */}
      <div className="absolute top-6 right-6 flex gap-2">
        {['en', 'ar', 'ku'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-xs uppercase tracking-wider transition-colors ${
              lang === l ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
          {content[lang].title}
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-16 font-light">
          {content[lang].subtitle}
        </p>

        {/* Email Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission here
          }}
          className="space-y-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={content[lang].placeholder}
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-center py-3 text-base transition-colors placeholder:text-gray-400"
          />
          
          <motion.button
            type="submit"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full border border-black py-3 text-sm uppercase tracking-wider transition-colors hover:bg-black hover:text-white"
          >
            {content[lang].notify}
          </motion.button>
        </form>
      </motion.div>

      {/* Footer - Minimal bottom center */}
      <footer className="absolute bottom-6 text-xs text-gray-400">
        © 2025
      </footer>
    </div>
  );
}

