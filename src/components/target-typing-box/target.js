import React from 'react';
import './target.css';

const TextBox = ({ text }) => { // Destructure the text prop

  return (
    <><div className='text-box-to-type-to'>
      This is the target text
    </div><div className="text-box">
        {text}
      </div></>
  );
};

export default TextBox;
