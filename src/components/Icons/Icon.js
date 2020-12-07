import React from "react";
import styles from "./icon.module.css";

const Icon = ({ icon, alt }) => (
  <img alt={`${alt} icon`} src={icon} className={styles.container} />
);

export default Icon;
