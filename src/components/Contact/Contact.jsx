import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

 const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto</h2>
        <p>No dudes en comunicarte!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:erikmosich@gmail.com">erikmosich@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/erik-mosich/">linkedin.com/in/erik-mosich/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/emosich">github.com/emosich</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;