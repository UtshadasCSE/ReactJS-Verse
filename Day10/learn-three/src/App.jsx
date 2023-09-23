function App() {
  let status = false;
  if (status == true) {
    return (
      <>
        <h1>Login Status</h1>
        <button>Logout</button>
      </>
    );
  } else if (status == false) {
    return (
      <>
        <h1>Login status</h1>
        <button>Login</button>
      </>
    );
  }
}

export default App;
