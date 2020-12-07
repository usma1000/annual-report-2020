import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.container}>
    © 2020 Case Western Reserve University
    <ul className={styles.links}>
      <li>
        <a href="https://case.edu/admissions">Apply</a>
      </li>
      <li>
        <a href="https://securelb.imodules.com/s/1526/gid1/interior-2col.aspx?sid=1526&gid=1&pgid=327&cid=914">
          Give
        </a>
      </li>
      <li>
        <a href="https://case.edu/visit">Visit</a>
      </li>
      <li>
        <a href="https://webapps.case.edu/directory/">Directory</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
