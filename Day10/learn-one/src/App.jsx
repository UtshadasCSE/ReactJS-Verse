function App() {
  let marks = 78;
  return (
    <div>
      {(() => {
        if (marks >= 80 && marks <= 90) {
          return <h1>A+</h1>;
        } else if (marks < 80 && marks >= 70) {
          return <h1>A</h1>;
        } else {
          return <h1>Hello</h1>;
        }
      })()}
    </div>
  );
}

export default App;
