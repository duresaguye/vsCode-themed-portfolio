import React from 'react';

function TechIllustration(props) {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Create a circle for outer border */}
      <circle cx="75" cy="75" r="70" fill="none" stroke="#4A90E2" strokeWidth="4" />
      
      {/* Vertical line for the left side of 'D' */}
      <line x1="50" y1="25" x2="50" y2="125" stroke="#4A90E2" strokeWidth="6" />
      
      {/* Create a curve (instead of the horizontal line) to form the round part of 'D' */}
      <path
        d="M 100,50 Q 120,130 70,125"
        stroke="#4A90E2"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

export default TechIllustration;
