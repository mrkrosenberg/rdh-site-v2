import React from 'react';
import Image from 'next/image';

// assets
import splash from '../../../public/images/splash.svg';
        {/* <Image 
            priority
            src={splash}
            alt='relaxed hygienist splash outline'
        /> */}

// components


function HeroContainer() {
  return (
    <div className="h-section w-section bg-black border-2 border-white">
        <div>
            Hero Container
        </div>
        <div>
            Splash Screen
        </div>
    </div>
  )
};

export default HeroContainer;