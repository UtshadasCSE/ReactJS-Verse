import { MdMessage, MdCall, MdOutlineMailOutline } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
function ContactForm() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text=" VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="34px" />}
          />
          <Button text=" VIA CALL" icon={<MdCall fontSize="34px" />} />
        </div>
        <Button
          isOutline={true}
          text=" VIA EMAIL FORM"
          icon={<MdOutlineMailOutline fontSize="34px" />}
        />
        <form action="">
          <div className={styles.form_controller}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="">Text</label>
            <textarea rows="8" name="text" />
          </div>
          <div>
            <Button
              text=" SUBMIT"
              icon={<MdOutlineMailOutline fontSize="34px" />}
            />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
