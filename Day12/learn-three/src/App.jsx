import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>
        <h2>Number:{number}</h2>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          COUNT
        </button>
      </div>
    </>
  );
}

export default App;
