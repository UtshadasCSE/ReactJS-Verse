function App() {
  let city = ["Dhaka", "Delhi", "Cumilla", "Rangpur", "Kolkata"];
  let names = ["utsha", "purnima", "das", "bhadra"];
  return (
    <>
      <ol>
        {city.map((item, i) => {
          return <li key={i.toString}>{item}</li>;
        })}
      </ol>
      <ul>
        {names.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
