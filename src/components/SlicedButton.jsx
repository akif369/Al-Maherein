import React, { useState } from 'react';
import './SlicedButton.css';

const SlicedButton = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const smoothScroll = (targetId) => {
    if (isScrolling || isDisabled) return;

    setIsScrolling(true);
    setIsDisabled(true);
    setTimeout(() => {
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
      });
      setIsScrolling(false);
      setIsDisabled(false);
    }, 1000); // 1 second delay

   
  };

  return (
    <div onClick={() => smoothScroll('contact')} className='container'>
      <div className="center">
        <button className={`btn  ${isDisabled&& ""} duration-700`} disabled={isDisabled}>
          <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span className='font-redRose'>LET'S TALK NOW</span>
        </button>
      </div>
    </div>
  );
};

export default SlicedButton;
