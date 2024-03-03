import React, { useState } from 'react';
// import './Keyboard.css';

const Keyboard = () => {

  const accuracy = {
    a: 1, b: 2, c: 3, d: 0, e: 5,
    f: 1, g: 0, h: 2, i: 3, j: 0,
    k: 1, l: 4, m: 0, n: 2, o: 3,
    p: 0, q: 1, r: 2, s: 3, t: 0,
    u: 1, v: 2, w: 3, x: 0, y: 1, z: 2,
  };

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
