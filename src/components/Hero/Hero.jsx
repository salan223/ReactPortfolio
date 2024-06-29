import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const words = [
    "A Computer Engineering Student", 
    "Versatile Programming Skills and Hands on Hardware Experience..", 
    "Currently working at Hydro One to energize Ontario."
  ];

  const [typingText, setTypingText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 30 : 100;
    const nextLetterIndex = isDeleting ? letterIndex - 1 : letterIndex + 1;
    const currentText = isDeleting
      ? currentWord.substring(0, letterIndex - 1)
      : currentWord.substring(0, letterIndex) + "|";

    setTypingText(currentText);

    const timer = setTimeout(() => {
      if (!isDeleting && nextLetterIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && nextLetterIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      setLetterIndex(nextLetterIndex);
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Salan</h1>
        <p className={styles.typingText}>{typingText}</p>
        <p className={styles.description}>
        A journey from: System.out.println("Hello World") to this.
          <br />
          <br />
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:salanbhattarai5@gmail.com" className={styles.contactBtn}>
          Contact Me
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
