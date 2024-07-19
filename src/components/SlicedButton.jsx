import React from 'react';
import './SlicedButton.css';

const SlicedButton = () => {
  return (
    <div className='container'>
    <div class="center ">
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span className='font-redRose'>LET'S TALK NOW</span>
      </button>
  </div>
  </div>
  );
};

export default SlicedButton;
