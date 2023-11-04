import "./contact.css";
import Facebook from "../../assets/facebook-icon.png";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <span className="contactTitle">Contact Me</span>
        <p className="contactPara">
          Please fill out the form below to discuss any work oppotunities
        </p>
        <form
          action="https://formspree.io/f/xoqobljo"
          method="POST"
          className="form"
        >
          <input
            className="inputF"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="inputF"
            type="email"
            placeholder="Enter your Email"
            name="email"
          />
          <textarea
            name="message"
            className="inputF"
            rows={5}
            placeholder="Write your message here"
          />
          <button type="submit" className="btnSub">
            Submit
          </button>
        </form>
        <div className="linkImg">
          <a href="https://www.facebook.com/utshadasreal567">
            <img src={Facebook} alt="" className="linkIcon" />
          </a>

          <a href="https://www.instagram.com/thinkaboututsha">
            <img src={instagram} alt="" className="linkIcon" />
          </a>
          <a href="https://www.linkedin.com/in/utsha-kumar-das-csebd25/">
            <img src={linkedIn} alt="" className="linkIcon linkIn" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
