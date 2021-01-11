import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "./cwrulogo.svg";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleClass = open ? styles.open : styles.closed;

  return (
    <>
      <nav role="navigation" className={styles.container}>
        <div className={styles.logo}>
          <a href="https://case.edu/">
            <img alt="CWRU Logo" src={logo} />
          </a>
        </div>
        <div
          className={`${styles.hamburger} ${toggleClass}`}
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          tabindex="0"
          role="button"
        >
          <div className={styles.hamburgerBox}>
            <div className={styles.hamburgerInner}></div>
          </div>
        </div>
        <div className={styles.break}></div>
        <ul className={`${styles.navigation} ${toggleClass}`}>
          <li className={styles.navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/research">Research</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/innovation">Innovation</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/community">Community</Link>
          </li>
          <li className={styles.more}>
            <span>
              More <span className={styles.arrow}>▼</span>
            </span>
            <ul className={styles.submenu}>
              <li className={styles.navigationItem}>
                <Link to="/university-trustees-and-leadership">
                  University Leadership
                </Link>
              </li>
              <li className={styles.navigationItem}>
                <Link to="/presidents-letter">Interim President's Letter</Link>
              </li>
              <li className={styles.navigationItem}>
                <Link to="/financials">Financials &amp; Numbers</Link>
              </li>
              <li className={styles.navigationItem}>
                <a href="case.edu/advancingtogether/annual-report-2020.pdf">
                  Download as PDF
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
