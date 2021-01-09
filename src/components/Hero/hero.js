import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./hero.module.css";
import img from "./cover.jpg";

export default ({ children, home, icon }) => {
  const lineHeight = useSpring({
    lineHeight: 1.65,
    from: { lineHeight: 0.5 },
  });
  return (
    <div className={styles.hero}>
      <animated.h1 style={lineHeight} className={styles.title}>
        {children}
      </animated.h1>
      {home && (
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="students walking" />
        </div>
      )}
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};
