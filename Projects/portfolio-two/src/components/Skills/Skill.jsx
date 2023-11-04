import "./skill.css";
// import UIdesign from "../../assets/ui-design.png";
import Webdesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skill = () => {
  return (
    <>
      <section id="skill">
        <span className="skillTitle">What I Do</span>
        <span className="description">
          Hi, I’m Utsha Das. I’m a web developer with experience in designing
          user interfaces and navigation menus, writing and reviewing code for
          sites. I continue my Bsc in Computer Science and Engineeringg from
          Daffodil International University
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Webdesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Devoloper</h2>
              <p>
                I have worked on several projects that have helped clients
                achieve their business goals.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Devoploper</h2>
              <p>
                I have worked on several projects that have helped clients
                achieve their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
