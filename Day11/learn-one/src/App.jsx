import Hero from "./component/Hero";

function App() {
  let itemObj = {
    name: "utsha",
    age: 23,
    city: "Cumilla",
  };
  const btnClick = () => {
    alert("Ohh Bangladesh");
  };
  return (
    <>
      <Hero item={itemObj} btnClick={btnClick} />
    </>
  );
}

export default App;
