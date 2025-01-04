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
      <circle cx="75" cy="75" r="70" fill="none" stroke="#4A90E2" strokeWidth="4" />
      <line x1="50" y1="25" x2="50" y2="125" stroke="#4A90E2" strokeWidth="4" />
      <line x1="100" y1="25" x2="100" y2="125" stroke="#4A90E2" strokeWidth="4" />
      <path
        d="M 50,75 L 100,75"
        stroke="#4A90E2"
        strokeWidth="4"
      />
    </svg>
  );
}

export default TechIllustration;
