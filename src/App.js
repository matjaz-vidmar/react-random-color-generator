import randomcolor from 'randomcolor';

function App1() {
  const [color, setColor] = setState();
  return (
    <div>
      <h1>Random color generator</h1>
    </div>
    <div>
        {color}
      </div>
        <button
        onClick={() => {
          const newColor = (randomColor().color);
          setColor(newColor)
        }
        }></button>
  );
}

export default App1;
