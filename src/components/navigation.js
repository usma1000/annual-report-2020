import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";
import logo from "./cwrulogo.svg";

export default () => (
  <nav role="navigation" className={styles.container}>
    <div className={styles.logo}>
      <a href="https://case.edu/">
        <img alt="CWRU Logo" src={logo} />
      </a>
    </div>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/university-trustees-and-leadership">Leadership</Link>
      </li>
    </ul>
  </nav>
);
