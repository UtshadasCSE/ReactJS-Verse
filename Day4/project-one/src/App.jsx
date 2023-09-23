import "./app.css";
const App = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="nBtn">Login</button>
      </nav>
      <div className="container">
        <div className="leftSide">
          <div className="hContent">
            <h1 className="headIng">
              YOUR FEET <br /> DESERVE <br /> THE BEST
            </h1>
          </div>
          <div className="about">
            YOUR FEETDESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </div>
          <div className="btnContent">
            <div className="shop">
              <button>Shop Now</button>
            </div>
            <div className="catBtn">
              <button>Catagory</button>
            </div>
          </div>
          <div className="shareContent">
            <div className="aval">
              <span>Also available on</span>
            </div>
            <div className="icon">
              <li>
                <img src="/images/flipkart.png" alt="" />
              </li>
              <li>
                <img src="/images/amazon.png" alt="" />
              </li>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>
    </>
  );
};
export default App;
