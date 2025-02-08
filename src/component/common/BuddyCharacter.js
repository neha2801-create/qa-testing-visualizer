import React, { useState, useEffect } from 'react';

const BuddyCharacter = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  return (
    <div 
      className={`transition-transform duration-300 cursor-pointer ${
        isJumping ? '-translate-y-4' : ''
      }`}
      onClick={handleClick}
    >
      <svg viewBox="0 0 200 200" className="w-32 h-32">
        <circle cx="100" cy="100" r="50" fill="#FFB6C1"/>
        <circle cx="80" cy="90" r="10" fill="white"/>
        <circle cx="120" cy="90" r="10" fill="white"/>
        <circle cx="80" cy="90" r="5" fill="black"/>
        <circle cx="120" cy="90" r="5" fill="black"/>
        <path 
          d="M70 110 Q100 130 130 110" 
          fill="none" 
          stroke="black" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <line 
          x1="100" y1="50" x2="100" y2="30" 
          stroke="#FF69B4" 
          strokeWidth="3"
          className={`transform origin-bottom ${
            isWaving ? 'animate-[wave_0.5s_ease-in-out_infinite]' : ''
          }`}
        />
        <circle 
          cx="100" cy="25" r="5" 
          fill="#FF69B4"
          className={`transform origin-bottom ${
            isWaving ? 'animate-[wave_0.5s_ease-in-out_infinite]' : ''
          }`}
        />
      </svg>
    </div>
  );
};

export default BuddyCharacter;