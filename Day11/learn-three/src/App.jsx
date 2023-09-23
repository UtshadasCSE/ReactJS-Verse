import { useRef } from "react";

function App() {
  let hWorld = useRef();
  let img = useRef();
  const imgChange = () => {
    img.current.src = "https://placehold.co/600x600";
    img.current.setAttribute = ("height", "100px");
    img.current.setAttribute = ("width", "100px");
  };

  const change = () => {
    hWorld.current.innerText = "DJ";
  };
  return (
    <>
      <div>
        <img ref={img} src="https://placehold.co/600x400" alt="" />
        <button onClick={imgChange}>Click</button>
      </div>
      <div ref={hWorld}>Hello World</div>
      <button onClick={change}>Change</button>
    </>
  );
}

export default App;
