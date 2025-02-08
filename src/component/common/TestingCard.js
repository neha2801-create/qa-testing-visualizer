import React from 'react';

const TestingCard = ({ 
  icon: Icon, 
  title, 
  description, 
  technicalTerm, 
  technicalDescription, 
  example, 
  color, 
  isActive, 
  onClick 
}) => (
  <div 
    className={`p-4 rounded-2xl mb-4 cursor-pointer transition-all transform hover:scale-105 ${
      isActive ? 'scale-105 shadow-lg' : ''
    }`}
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <Icon className="w-8 h-8 text-white" />
      <h3 className="font-bold text-xl text-white">{title}</h3>
    </div>
    {isActive && (
      <div className="mt-4">
        <div className="p-4 bg-white rounded-xl mb-3">
          <p className="text-lg mb-3">{description}</p>
          <div className="bg-purple-100 p-3 rounded-lg">
            <p className="font-bold">For example: </p>
            <p>{example}</p>
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded-xl text-white">
          <h4 className="font-bold mb-2">Technical Term: {technicalTerm}</h4>
          <p className="text-sm opacity-90">{technicalDescription}</p>
        </div>
      </div>
    )}
  </div>
);

export default TestingCard;