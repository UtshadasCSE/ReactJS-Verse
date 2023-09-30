import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [date, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  });
  return (
    <>
      <div>{JSON.stringify(date)}</div>
    </>
  );
}

export default App;
