import React from "react";
import { Link } from "gatsby";
import logo from "./cwrulogo.svg";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <>
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
            <Link to="/innovation">Innovation</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/research">Research</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/community">Community</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/university-trustees-and-leadership">Leadership</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/presidents-letter">President's Letter</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/financials">Financials</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
