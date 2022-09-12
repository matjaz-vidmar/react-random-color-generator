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
          height: '100vh',
          width: '100vw',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <input
          value={'Generate color:' + color}
          onClick={(event) => {
            setColor(event.currentTarget.value);
          }}
        ></input>
        {color}
      </div>

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
