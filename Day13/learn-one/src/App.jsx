import { useState } from "react";

function App() {
  let [formObj, setFormObj] = useState({
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
  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(formObj);
    alert(JSON.stringify(formObj));
  };
  return (
    <>
      <div className="container">
        <form action="" onSubmit={FormSubmit}>
          <input
            onChange={(e) => {
              inputChange("fName", e.target.value);
            }}
            value={formObj.fName}
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => {
              inputChange("lName", e.target.value);
            }}
            value={formObj.lName}
            type="text"
            placeholder="Last Name"
          />
          <select
            onChange={(e) => {
              inputChange("city", e.target.value);
            }}
            value={formObj.city}
          >
            <option value="">Choose city</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Cumilla">Cumilla</option>
          </select>
          <br />
          <input
            onChange={() => {
              inputChange("gender", "Male");
            }}
            checked={formObj.gender === "Male"}
            type="radio"
            name="gender"
          />
          Male
          <input
            onChange={() => {
              inputChange("gender", "Female");
            }}
            checked={formObj.gender === "Female"}
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
