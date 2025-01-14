import React from 'react';
import Image from 'next/image';

function TechIllustration(props) {
  return (

    <>
     <Image
      src="/dure.svg"
      width='520'
      height='529'
      />
  
       <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
     
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Create a circle for outer border */}
      
    </svg>
    </>
 
  );
}

export default TechIllustration;
