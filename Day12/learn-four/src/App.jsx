import { useState } from "react";
function App() {
  const [myObj, setObj] = useState({
    key1: "I am key one",
    key2: "I am key two",
    key3: "I am key three",
  });
  const change = () => {
    setObj((prevObj) => ({
      ...prevObj,
      key1: "I am new key one",
      key2: "I am new key two",
    }));
  };
  return (
    <>
      <div>
        <h1>{myObj.key1}</h1>
        <h2>{myObj.key2}</h2>
        <h3>{myObj.key3}</h3>
        <button onClick={change}>Change</button>
      </div>
    </>
  );
}

export default App;
