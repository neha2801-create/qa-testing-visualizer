import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 shadow-lg">
    <div className="max-w-4xl mx-auto flex items-center justify-center">
      <Sparkles className="w-8 h-8 mr-3" />
      <h1 className="text-3xl font-bold text-center">
        Let's Learn About Testing! 🎮
      </h1>
      <Sparkles className="w-8 h-8 ml-3" />
    </div>
    <p className="text-center mt-2 text-white text-opacity-90">
      Exploring Quality Assurance through fun examples!
    </p>
  </header>
);

export default Header;