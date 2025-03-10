import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kodela Anand vasu</h1>
        <p className={styles.description}>
        Aspiring Full Stack Developer passionate about building dynamic web applications with modern technologies like React, Node.js, and MongoDB. Skilled in both frontend and backend development, I love solving problems and creating seamless user experiences. Always eager to learn and explore new innovations in web development!
        </p>
        <a href="mailto:anandvasuk@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
