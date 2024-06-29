import React from "react";
import Slider from "react-slick";

import styles from "./Projects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 5 seconds
    arrows: false,
    customPaging: (i) => <div className={styles.customDot} />,
    appendDots: (dots) => (
      <div>
        <ul className={styles.dots}>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Slider {...settings} className={styles.slider}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectSlide}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
