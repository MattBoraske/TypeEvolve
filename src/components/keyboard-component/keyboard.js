import React from 'react';
import './keyboard.css';

/**
 * Decomposes an input string and maps each index, 0 for correct accuracy and 1 for a missed key
 */
function decompStr(inputStr) {
  let size = inputStr != null ? inputStr.length: 0;
  const charMap = {};
  for (let index = 0; index < size; index++) {
    if (charMap[inputStr.charAt(index)]) {
      charMap[inputStr.charAt(index)]++;
    } else {
      charMap[inputStr.charAt(index)] = 1;
    }
  }
  return charMap;
}

/**
 * 
 * @param {*} map1 Initial map from the user input (green)
 * @param {*} map2 The actual map that the prompt says (red)
 * @returns The highlighted result of the users input along with the actual input
 */
function differMaps(map1, map2) {
  const differMap = { ...map1};
  for (let key in map2) {
    if (differMap.hasOwnProperty(key)) {
      differMap[key] -= map2[key];
    } else {
      differMap[key] = -map2[key];
    }
  }
  return differMap;
}

/**
 * 
 * @param {*} param0  A component consiting of the target text (given from the user), the input text and how many keys are being typed
 * @returns  the keyboard component
 */
const Keyboard = ({targetText, text, keysTyped}) => {
  const accuracy = {
    a: 0, b: 0, c: 0, d: 0, e: 0,
    f: 0, g: 0, h: 0, i: 0, j: 0,
    k: 0, l: 0, m: 0, n: 0, o: 0,
    p: 0, q: 0, r: 0, s: 0, t: 0,
    u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
  };

  //Decompositions the prompt string into the text map
  const promptTextMap = decompStr(targetText)
  //Decompositions the input string into its own text map
  const userTextMap = decompStr(text)

  const differMap = differMaps(promptTextMap,userTextMap);

  console.log("prompt",promptTextMap);
  console.log("user",userTextMap)

  for (let key in userTextMap) {
    if (accuracy.hasOwnProperty(key)) {
      accuracy[key] = userTextMap[key];
    }
  }

  for (let key in differMap) {
    if (accuracy.hasOwnProperty(key)) {
      accuracy[key] = differMap[key];
    }
  }

  console.log("accuracy",accuracy);


  const getKeyColor = (value) => {

    let red, green, alpha;
    if (value < 0) {
      red = 255 - (255/(Math.abs(value)));
      green = 0;
      alpha = 1;
    } else if (value > 0) {
      green = 255 - (255/(Math.abs(value)));
      red = 0;
      alpha = 1;
    } else {
      red = 0;
      green = 0;
      alpha = 0;
    }

    /*
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
    */
  

    return `rgba(${red}, ${green}, 0, ${alpha})`;
  };

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className="keyboard">
      <h3 style={{ color: 'yellow', fontWeight: 'bold' }}>Keyboard Heatmap</h3>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <div 
              key={key} 
              className="keyboard-key-container"
              // onMouseEnter and onMouseLeave handlers removed
            >
              <button
                className="keyboard-key"
                style={{ backgroundColor: getKeyColor(accuracy[key.toLowerCase()]) }}
              >
                {key}
              </button>
              {/* Conditional rendering for tooltip on hover removed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default Keyboard;
