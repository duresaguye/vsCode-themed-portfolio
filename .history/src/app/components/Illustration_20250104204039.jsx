import React from 'react';

function Loader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#4A90E2"
        strokeWidth="4"
        fill="none"
        strokeDasharray="251.32741228718345"
        strokeDashoffset="0"
        transform="rotate(66 50 50)"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;502.654824574;0"
          dur="1.5s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default Loader;
