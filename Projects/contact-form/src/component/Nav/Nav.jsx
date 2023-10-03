import styles from "./Nav.module.css";
function Nav() {
  return (
    <>
      <nav className={`${styles.nav} container`}>
        <div className="logo">
          <img src="/images/logo.png" alt="Brand Logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
