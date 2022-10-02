import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(
    randomColor({
      luminosity: 'random',
      hue: 'random',
    }),
  );

  return (
    <div>
      <h1>Random color generator</h1>

      <div
        style={{
          height: '500px',
          width: '500px',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Generated Color: {color}
      </div>
      <input
        value={'Generated color:' + color}
        onClick={(event) => {
          setColor(event.currentTarget.value);
        }}
      />
      <label>{color}</label>

      <button
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'white',
        }}
        onClick={() => {
          const newColor = randomColor({
            luminosity: 'random',
            hue: 'random',
          });
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
