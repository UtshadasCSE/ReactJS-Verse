/* eslint-disable react/prop-types */
const Hero = (props) => {
  return (
    <div>
      <ul>
        <li>Name:{props.item["name"]}</li>
        <li>Age:{props.item["age"]}</li>
        <li>City:{props.item["city"]}</li>
      </ul>

      <button onClick={props.btnClick}>OK</button>
    </div>
  );
};

export default Hero;
