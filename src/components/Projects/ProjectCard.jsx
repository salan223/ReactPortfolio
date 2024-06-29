import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={project.imageSrc} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.skills}>
          {project.skills.map((skill, index) => (
            <li key={index} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={project.demo} className={styles.link}>Demo</a>
          <a href={project.source} className={styles.link}>Source</a>
        </div>
      </div>
    </div>
  );
};
