import randomcolor from 'randomcolor';

function App1() {
  const [color, setColor] = setState();
  return (
    <div>
      <h1>Random color generator</h1>
    </div>
    <div
    style={{
      width: 400,
      height: 400,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center'
      fontSize: 80,
        }}
      >
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
