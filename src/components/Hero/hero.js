import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./hero.module.css";
import img from "./cover.jpg";

export default ({ children, home, icon }) => {
  const lineHeight = useSpring({
    lineHeight: 1,
    from: { lineHeight: 0.5 },
  });
  const titleStyle = home ? styles.titleHome : styles.title;
  const heroStyle = home ? styles.heroHome : styles.hero;

  return (
    <div className={heroStyle}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <animated.h1 style={lineHeight} className={titleStyle}>
        {children}
      </animated.h1>
      {home && (
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="students walking" />
        </div>
      )}
    </div>
  );
};
