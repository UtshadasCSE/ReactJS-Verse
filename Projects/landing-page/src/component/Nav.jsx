import "../assets/css/index.css";

function Nav() {
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>login</button>
        </nav>
      </div>
    </>
  );
}

export default Nav;
