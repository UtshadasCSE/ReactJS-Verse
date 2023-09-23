import { useRef } from "react";

function App() {
  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.current.classList.remove("text-success");
    myHeadLine.current.classList.add("text-danger");
  };
  return (
    <>
      <h1 className="text-success" ref={myHeadLine}>
        Hello
      </h1>
      <button onClick={change}>OK</button>
    </>
  );
}

export default App;
