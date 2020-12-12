import React from "react";
import styles from "./icon.module.css";

const Icon = ({ icon, alt }) => (
  // <img alt={`${alt} icon`} src={icon} className={styles.container} />
  <div className={styles.container} aria-label={alt}>
    {icon}
  </div>
);

export default Icon;
