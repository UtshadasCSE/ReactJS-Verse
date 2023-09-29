import { useState } from "react";

function App() {
  const [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const inputChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  };
  return (
    <>
      <div className="container">
        <form action="" onSubmit={formSubmit}>
          <input
            value={formObj.fName}
            onChange={(e) => inputChange("fName", e.target.value)}
            type="text"
            placeholder="First name"
          />
          <input
            value={formObj.lName}
            onChange={(e) => inputChange("lName", e.target.value)}
            type="text"
            placeholder="Last name"
          />
          <select
            value={formObj.city}
            onChange={(e) => {
              inputChange("city", e.target.value);
            }}
            name=""
          >
            <option value="">Choose a city</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Cumilla">Cumilla</option>
            <option value="Tangail">Tangail</option>
          </select>
          <input
            checked={formObj.gender === "Male"}
            onChange={() => {
              inputChange("gender", "Male");
            }}
            type="radio"
            name="gender"
          />
          Male
          <input
            checked={formObj.gender === "Female"}
            onChange={() => {
              inputChange("gender", "Female");
            }}
            type="radio"
            name="gender"
          />
          Female
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
