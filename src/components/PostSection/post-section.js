import React from "react";
import { Link } from "gatsby";
import Icon from "../Icons/Icon";
import styles from "./post-section.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const PostSection = ({ headline, children, icon, url, linkText }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const fade = useSpring({ opacity: inView ? 1 : 0, from: { opacity: 0 } });
  return (
    <div ref={ref} className={styles.flex}>
      <animated.div style={fade} className={styles.icon}>
        <Icon icon={icon} alt={headline} />
      </animated.div>
      <div className={styles.textBox}>
        <animated.h2 style={fade} className={styles.headline}>
          {headline}
        </animated.h2>
        <div>{children}</div>
        <Link to={url} className={styles.button}>
          {linkText} >
        </Link>
      </div>
    </div>
  );
};

export default PostSection;
