import React from "react";
import Img from "gatsby-image";
import CanvasMesh from "./3D/CanvasMesh";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero} style={{ position: "relative" }}>
    <CanvasMesh />
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
);
