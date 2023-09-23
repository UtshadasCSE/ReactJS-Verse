function App() {
  let mark = 90; 

  return (
    <>
      <button
        style={{
          color: "red",
          background: "Blue",
          borderRadius: "5px",
        }}
        onClick={() => {
          alert("Hello BD");
        }}
      >
        Alert Show
      </button>
      {mark>80?<h1>Brillient</h1>:<h1>Avarege Student</h1>}
    </>
  );
}

export default App;
