import React, { useState } from 'react';
import './Keyboard.css';
import TextBox from '../target-box/target-box';

const Keyboard = ({targetText, text, keysTyped}) => {
  const accuracy = {
    a: 0, b: 0, c: 0, d: 0, e: 0,
    f: 0, g: 0, h: 0, i: 0, j: 0,
    k: 0, l: 0, m: 0, n: 0, o: 0,
    p: 0, q: 0, r: 0, s: 0, t: 0,
    u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
  };

  //const promptTargetMap = decompStr()

  for (let key in keysTyped) {
    if (accuracy.hasOwnProperty(key)) {
      accuracy[key] = keysTyped[key];
    }
  }

  const [hoveredKey, setHoveredKey] = useState(null);

  const getKeyColor = (value) => {
    const maxErrorValue = 5;
    const halfMaxError = maxErrorValue / 2;
    const intensity = Math.min(value / maxErrorValue, 1);
    let red, green, alpha;

    if (value <= halfMaxError) {
      green = 255;
      red = 0;
      alpha = .7 - (2 * intensity);
    } else {
      red = 255 * ((intensity - 0.5) * 2);
      green = 0;
      alpha = (intensity - 0.5) * 1;
    }

    return `rgba(${red}, ${green}, 0, ${alpha})`;
  };

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <div 
              key={key} 
              className="keyboard-key-container"
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <button
                className="keyboard-key"
                style={{ backgroundColor: getKeyColor(accuracy[key.toLowerCase()]) }}
              >
                {key}
              </button>
              {hoveredKey === key && (
                <div className="keyboard-tooltip">
                  {accuracy[key.toLowerCase()]}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
