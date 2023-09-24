import { useRef } from "react";

function App() {
  let apiData = useRef(null);
  let myTag = useRef();
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/1");
    apiData.current = await response.json();
  };
  const showData = () => {
    myTag.current.innerText = JSON.stringify(apiData.current);
  };
  return (
    <>
      <div>
        <p ref={myTag}></p>
        <button onClick={fetchData}>Call API</button>
        <button onClick={showData}>Show Data</button>
      </div>
    </>
  );
}

export default App;
