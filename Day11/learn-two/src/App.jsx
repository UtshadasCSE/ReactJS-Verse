function App() {
  const postDataForm = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };
  return (
    <>
      {/* {/* <button
        onClick={() => {
          alert("Hello! bitch");
        }}
      >
        SUBMIT
      </button> */}
      {/* <button onClick={Demo}>OK</button> */}
      <form action="" onSubmit={postDataForm}>
        <input type="text" placeholder="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
