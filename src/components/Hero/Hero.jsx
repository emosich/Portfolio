import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Erik</h1>
        <p className={styles.description}>
          Soy un desarrollador full-stack con 2 años de experiencia usando React y NodeJS. Me apasiona crear sitios web bonitos y funcionales!
        </p>
        <a href="mailto:erikmosich@gmail.com" className={styles.contactBtn}>
          Hablemos
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
