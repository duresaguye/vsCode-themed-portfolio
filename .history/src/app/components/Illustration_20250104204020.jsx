import React from 'react';

function ReactLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      fill="none"
      {...props}
    >
      <circle cx="32" cy="32" r="8" fill="#61DAFB" />
      <circle cx="32" cy="32" r="16" fill="none" stroke="#61DAFB" strokeWidth="2" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#61DAFB" strokeWidth="2" />
      <circle cx="32" cy="32" r="32" fill="none" stroke="#61DAFB" strokeWidth="2" />
    </svg>
  );
}

export default ReactLogo;
