/* eslint-disable react/jsx-no-comment-textnodes */
import "./intro.css";
import profile from "../../assets/profile.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>

          <span className="introText">
            I am <span className="introName">Utsha</span>
            <br />
            Web devloper👨🏾‍💻
          </span>
          <p className="intoPara">
            A passionate Web developer from Bangladesh.I will help you to build
            your online presence.
          </p>
          <a href="https://utshadascv.netlify.app/">
            <button className="btn">
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </a>
        </div>
        <img src={profile} alt="profileImg" className="bg" />
      </section>
    </>
  );
};

export default Intro;
