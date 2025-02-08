import React, { useState } from 'react';
import { Bug, Heart, Star, Sun, Moon, Rainbow, Gift } from 'lucide-react';
import BuddyCharacter from '../common/BuddyCharacter';
import TestingCard from '../common/TestingCard';

const testingSteps = [
  {
    icon: Bug,
    title: "Check One Thing!",
    description: "Just like when you're getting ready for school, you check one thing at a time: your backpack, your lunch, your homework.",
    example: "When Mom checks if you've brushed your teeth, she's not checking your homework at the same time - she focuses on one thing!",
    technicalTerm: "Test Focus & Scope",
    technicalDescription: "Like testing just the login button in a game before moving on to test other features.",
    color: "#FF9999"
  },
  {
    icon: Heart,
    title: "Learn the Rules",
    description: "Before playing a new board game, you learn all the different ways to play it.",
    example: "When you get a new bike, you first learn to use the pedals, then the brakes, then how to turn - one step at a time!",
    technicalTerm: "Test Strategy & Types",
    technicalDescription: "Testing different aspects of an app: how it looks, how fast it runs, if it's safe to use.",
    color: "#FF99CC"
  },
  {
    icon: Star,
    title: "Double Check",
    description: "Like when you clean your room and then check again to make sure everything is still tidy.",
    example: "After cleaning up your toys, you check again before bedtime to make sure no toys are on the floor!",
    technicalTerm: "Regression Testing",
    technicalDescription: "Making sure the game still works after adding new features, like checking if you can still jump after adding a new power-up.",
    color: "#99FF99"
  },
  {
    icon: Sun,
    title: "Spot Problems",
    description: "When something's not right, like a missing puzzle piece, you tell someone about it!",
    example: "If your toy car's wheel is loose, you show it to Mom or Dad so they can fix it.",
    technicalTerm: "Bug Reporting & Tracking",
    technicalDescription: "Writing down problems found in the game so developers can fix them, like noting that a character can walk through walls.",
    color: "#FFCC99"
  },
  {
    icon: Moon,
    title: "Keep Score",
    description: "Like keeping track of how many books you read this week or how many times you helped set the table.",
    example: "Using star stickers on a chart to count how many days in a row you've made your bed!",
    technicalTerm: "QA Metrics & Analytics",
    technicalDescription: "Counting how many bugs we found and fixed, and how many times we tested each part of the game.",
    color: "#99CCFF"
  },
  {
    icon: Rainbow,
    title: "Try Everything",
    description: "Like trying your new shoes on different surfaces - grass, playground, and sidewalk.",
    example: "Testing if your rainboots keep your feet dry in puddles, in rain, and in wet grass!",
    technicalTerm: "Cross-platform Testing",
    technicalDescription: "Making sure a game works on phones, tablets, and computers, just like checking if shoes work everywhere.",
    color: "#CC99FF"
  },
  {
    icon: Gift,
    title: "Check Parts & Whole",
    description: "Like checking each LEGO piece before building, then checking the whole castle when done.",
    example: "First you check if each crayon works, then you check if they all work together to make a beautiful picture!",
    technicalTerm: "Unit & Integration Testing",
    technicalDescription: "Testing each button separately, then testing if all buttons work together in the game menu.",
    color: "#FF99FF"
  }
];

const KidsQATestingApp = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const handleRestart = () => {
    setActiveStep(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="flex justify-center mb-8">
        <BuddyCharacter />
      </div>
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          Click the cards to learn more! 🎯
        </h2>
        <p className="text-gray-600">
          Each card shows how everyday activities are like testing computer games!
        </p>
      </div>

      <div className="grid gap-4">
        {testingSteps.map((step, index) => (
          <TestingCard
            key={index}
            {...step}
            isActive={activeStep === index}
            onClick={() => handleStepClick(index)}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button 
          className="px-6 py-3 bg-purple-500 text-white rounded-full text-xl font-bold 
                     hover:bg-purple-600 transform hover:scale-105 transition-all"
          onClick={handleRestart}
        >
          Start Over! 🌟
        </button>
      </div>
    </div>
  );
};

export default KidsQATestingApp;