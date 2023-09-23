import { useRef } from "react";

function App() {
  let firstname,
    lastname = useRef();

  const check = () => {
    let fn = firstname.value;
    let ln = lastname.value;
    alert("Your First name is " + fn + " And your Last name " + ln);
  };

  return (
    <>
      <div>
        <input
          ref={(fn) => (firstname = fn)}
          type="text"
          placeholder="First name"
        />
        <input
          type="text"
          ref={(ln) => (lastname = ln)}
          placeholder="Last name"
        />
        <button onClick={check}>Show</button>
      </div>
    </>
  );
}

export default App;
