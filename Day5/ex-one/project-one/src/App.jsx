import React from "react";

function App() {
  const name = "utsha";
  if (name) {
    return (
      <>
        <div>Hello {name}</div>
      </>
    );
  } else {
    return <>Hello World</>;
  }
}
export default App;
