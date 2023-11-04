import "./portfolio.css";
import DailyNews from "../../assets/dailynews.png";
import musicApp from "../../assets/musicapp.png";
import superHero from "../../assets/superheroinfo.png";
import Wedding from "../../assets/weddingplan.png";
import VideoDownloder from "../../assets/videodownloader.png";
import CodeBlog from "../../assets/codehelpblogs.png";
const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <span className="portTitle">My Portfolio</span>
        <p className="portText">
          I work lots of projects.You can checkout some of my projects down
          below.When you work in projects you can easily gain more knowledge.{" "}
          <br /> I learn apout API JWAt auth from building projects.And i
          continue learning from my projects.
        </p>

        <div className="showProjects">
          <img src={CodeBlog} alt="" className="portImg" />
          <img src={VideoDownloder} alt="" className="portImg" />
          <img src={Wedding} alt="" className="portImg" />
          <img src={superHero} alt="" className="portImg" />
          <img src={musicApp} alt="" className="portImg" />
          <img src={DailyNews} alt="" className="portImg" />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
