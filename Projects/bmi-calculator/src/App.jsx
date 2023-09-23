import { useState } from "react";
import "./assets/css/bmi.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState("");

  let calBmi = (event) => {
    //prevent submitting the server
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please fill the input properly");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      //logic for message
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy person");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container">
        <h1>BMI Calculate</h1>
        <form action="" onSubmit={calBmi}>
          <label htmlFor="">Weight(lbs)</label>
          <br />
          <input
            type="text"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder="Enter your weight"
          />
          <br />
          <label htmlFor="">Height(in)</label>
          <br />
          <input
            type="text"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            placeholder="Enter your height"
          />
          <br />

          <button className="btn check" type="submit">
            Check
          </button>
          <button className="btn reload" onClick={reload}>
            Reload
          </button>
          <br />
          <p>{bmi}</p>
          <p>{message}</p>
        </form>
      </div>
    </>
  );
}

export default App;
