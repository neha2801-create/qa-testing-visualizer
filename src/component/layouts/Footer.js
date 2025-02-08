import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-100 py-6 mt-8">
    <div className="max-w-4xl mx-auto text-center">
      <p className="flex items-center justify-center text-gray-600">
        Made with 
        <Heart className="w-5 h-5 mx-2 text-red-500 fill-current" /> 
        for curious kids!
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Learning about software testing through everyday examples
      </p>
    </div>
  </footer>
);

export default Footer;