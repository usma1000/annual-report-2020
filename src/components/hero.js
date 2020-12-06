import React from "react";
import CanvasMesh from "./3D/CanvasMesh";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <CanvasMesh />
  </div>
);
