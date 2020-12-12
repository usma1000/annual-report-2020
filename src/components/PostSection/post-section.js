import React from "react";
import { Link } from "gatsby";
import Icon from "../Icons/Icon";
import styles from "./post-section.module.css";

const PostSection = ({ headline, children, icon, url, linkText }) => {
  return (
    <div className={styles.flex}>
      <div className={styles.icon}>
        <Icon icon={icon} alt={headline} />
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.headline}>{headline}</h2>
        <div>{children}</div>
        <Link to={url} className={styles.button}>
          {linkText} >
        </Link>
      </div>
    </div>
  );
};

export default PostSection;
